import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { convert } from "@kreuzberg/html-to-markdown-wasm";
import slugify from "@sindresorhus/slugify";
import { chromium } from "playwright";

interface Subpage {
  name: string;
  url: string;
  depth: number;
  parents: string[];
};

// Each outline is a BlueStep "content outline" page — a table-of-contents listing
// all subpages for that section. Each one becomes a top-level directory under content/.
const outlines = [
	{
		name: "Relate Components",
		url: "https://bluestepplatformsupport.bluestep.net/shared/custompage/contentoutline.jsp?_event=view&_id=445506___8201",
	},
	{
		name: "RelateScript",
		url: "https://bluestepplatformsupport.bluestep.net/shared/custompage/contentoutline.jsp?_event=view&_id=445506___3122",
	},
] as const;

const browser = await chromium.launch({ headless: true });

for (let i = 0, l = outlines.length; i < l; i += 1) {
	const outline = outlines[i];
	assert(outline instanceof Object);

	const outline_name = slugify(outline.name);
	console.log(`${outline_name}..`);

	const page = await browser.newPage();

	await page.goto(outline.url, { waitUntil: "networkidle" });

	// Strip BlueStep chrome (header, footer, nav) so only the content remains.
	await page.evaluate(() => {
		document
			.querySelectorAll(".headerArea, .footerArea, .menuBase, .rightButtons")
			.forEach((el) => el.remove());
	});

	// Replace the entire body with just #contentArea to further isolate the content.
	await page.evaluate(() => {
		const inner = document.querySelector('#contentArea');
		if (inner) {
			document.body.innerHTML = '';
			document.body.appendChild(inner);
		}
	});

	// Parse the outline's table-of-contents into a flat list of subpages.
	// BlueStep renders each entry as a two-cell table row: the first cell has a
	// padding-left style that encodes the nesting depth (24px per level), and the
	// second cell holds the link. This walks those rows to reconstruct the hierarchy.
	const subpages = await page.evaluate(() => {
		const content = document.querySelector("#contentArea");
		if (!content) {
			return [];
		}
		const tables = Array.from(content.querySelectorAll("table"));
		const subpages: Subpage[] = [];
		const parents: string[] = [];
		for (const table of tables) {
			const tds = table.querySelectorAll("td");
			const indentCell = tds[0];
			if (indentCell) {
				const linkCell = tds[1];
				if (linkCell) {
					const link = linkCell.querySelector("a");
					if (link) {
						const style = indentCell.getAttribute("style") ?? "";
						const match = style.match(/padding-left:\s*(\d+)px/i);
						if (match) {
							const padding = Number(match[1]);
							const depth = Math.floor(padding / 24);
							const name = link.textContent.trim();
							const url = link.href;
							// Keep a rolling breadcrumb — truncate to current depth so
							// deeper items don't bleed into shallower siblings.
							parents[depth - 1] = name;
							parents.length = depth;
							const subpage: Subpage = {
								name,
								url,
								depth,
								parents: parents.slice(0, depth - 1),
							};
							subpages.push(subpage);
						}
					}
				}
			}
		}
		return subpages;
	});

	await page.close();

	// Create the top-level output directory for this outline (e.g. content/relate-script/).
	const outline_dirpath = path.join(
		import.meta.dirname,
		"../content/",
		outline_name,
	);

	if (!fs.existsSync(outline_dirpath)) {
		fs.mkdirSync(outline_dirpath, { recursive: true });
	}

	// Scrape each subpage and write it as a markdown file, mirroring the outline hierarchy.
	for (let i = 0, l = subpages.length; i < l; i += 1) {
		const subpage = subpages[i];
		assert(subpage instanceof Object);

		// Build the output path from slugified parent names + the page name.
		// e.g. content/relate-script/advanced-functions/do-lookup-b-lookup.md
		const parent_slugs = subpage.parents.map((path) => slugify(path));
		const page_name = slugify(subpage.name);
		const page_filename = `${page_name}.md`;
		const page_dirpath = path.join(outline_dirpath, ...parent_slugs);
		if (!fs.existsSync(page_dirpath)) {
			fs.mkdirSync(page_dirpath, { recursive: true })
		}
		const page_filepath = path.join(page_dirpath, page_filename);

		if (fs.existsSync(page_filepath)) {
			// continue;
		}

		if (parent_slugs.length) {
			console.log(`${outline_name} > ${parent_slugs.join(' > ')} > ${page_name}..`);
		} else {
			console.log(`${outline_name} > ${page_name}..`);
		}

		const page = await browser.newPage();

		await page.goto(subpage.url, { waitUntil: "networkidle" });

		// Strip BlueStep chrome from the subpage as well.
		await page.evaluate(() => {
			document
				.querySelectorAll(
					".headerArea, .footerArea, .menuBase, .rightButtons, #sideNav",
				)
				.forEach((el) => el.remove());
		});

		// Rewrite internal BlueStep links to local content paths so cross-references
		// resolve within the generated docs instead of pointing back to the live site.
		// BlueStep's JS-resolved href uses ___ as an ID separator, but the raw HTML
		// attribute uses _U129801__ — the replacement aligns the two before building
		// the CSS attribute selector.
		// for (const subpage of subpages) {
		// 	const subpage_href =
		// 		"/" +
		// 		[
		// 			slugify(outline.name),
		// 			...subpage.parents.map((path) => slugify(path)),
		// 			slugify(subpage.name),
		// 		].join("/");
		// 	const subpage_url = new URL(subpage.url);
		// 	const subpage_pathname_search = subpage_url.pathname.concat(subpage_url.search).replace('___', '_U129801__');
		// 	const selector = `a[href="${subpage_pathname_search}"]`;
		// 	await page.locator(selector).evaluateAll(
		// 		(els, subpage_href) => {
		// 			for (const el of els) {
		// 				el.setAttribute("href", subpage_href);
		// 			}
		// 		},
		// 		subpage_href
		// 	);
		// }

		// Rewrite any remaining relative /shared/... links to absolute URLs so they
		// still work when viewed outside the BlueStep domain.
		// {
		// 	const selector = `a[href^="/shared/"]`;
		// 	await page.locator(selector).evaluateAll((els) => {
		// 		for (const el of els) {
		// 			if (el instanceof HTMLAnchorElement) {
		// 				el.setAttribute("href", `https://bluestepplatformsupport.bluestep.net${el.getAttribute("href")}`);
		// 			}
		// 		}
		// 	});
		// }

		// Convert the cleaned HTML to markdown and write it to disk.
		const page_html = await page.content();
		const page_markdown = convert(page_html, {
			extractMetadata: false,
		});
		fs.writeFileSync(page_filepath, page_markdown);

		await page.close();
	}
}

await browser.close();
