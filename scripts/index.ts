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

	await page.evaluate(() => {
		document
			.querySelectorAll(".headerArea, .footerArea, .menuBase, .rightButtons")
			.forEach((el) => el.remove());
	});

	await page.evaluate(() => {
		const inner = document.querySelector('#contentArea');
		if (inner) {
			document.body.innerHTML = '';
			document.body.appendChild(inner);
		}
	});

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

	const outline_dirpath = path.join(
		import.meta.dirname,
		"../content/",
		outline_name,
	);

	if (!fs.existsSync(outline_dirpath)) {
		fs.mkdirSync(outline_dirpath, { recursive: true });
	}

	for (let i = 0, l = subpages.length; i < l; i += 1) {
		const subpage = subpages[i];
		assert(subpage instanceof Object);
	
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
	
		await page.evaluate(() => {
			document
				.querySelectorAll(
					".headerArea, .footerArea, .menuBase, .rightButtons, #sideNav",
				)
				.forEach((el) => el.remove());
		});

		for (const subpage of subpages) {
			const subpage_href =
				"/" +
				[
					slugify(outline.name),
					...subpage.parents.map((path) => slugify(path)),
					slugify(subpage.name),
				].join("/");
			const subpage_url = new URL(subpage.url);
			const subpage_pathname_search = subpage_url.pathname.concat(subpage_url.search).replace('___', '_U129801__');
			const selector = `a[href="${subpage_pathname_search}"]`;
			await page.locator(selector).evaluateAll(
				(els, subpage_href) => {
					for (const el of els) {
						el.setAttribute("href", subpage_href);
					}
				},
				subpage_href
			);
		}

		{
			const selector = `a[href^="/shared/"]`;
			await page.locator(selector).evaluateAll((els) => {
				for (const el of els) {
					if (el instanceof HTMLAnchorElement) {
						el.setAttribute("href", `https://bluestepplatformsupport.bluestep.net${el.getAttribute("href")}`);
					}
				}
			});
		}

		const page_html = await page.content();
		const page_markdown = convert(page_html, {
			extractMetadata: false,
		});
		fs.writeFileSync(page_filepath, page_markdown);
	
		await page.close();
	}
}

await browser.close();
