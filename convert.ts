import fs, { link } from "node:fs";
import path from "node:path";
import { convert } from "@kreuzberg/html-to-markdown-wasm";
import slugify from "@sindresorhus/slugify";
import { chromium } from "playwright";

const outlines = [
	{
		name: "Relate Components",
		url: "https://bluestepplatformsupport.bluestep.net/shared/custompage/contentoutline.jsp?_event=view&_id=445506___8201",
	},
] as const;

const browser = await chromium.launch({ headless: true });

for (const outline of outlines) {
	const outline_name = slugify(outline.name);
  console.log(`${outline_name}..`);
	const page = await browser.newPage();
	await page.goto(outline.url, { waitUntil: "networkidle" });
	await page.evaluate(() => {
		document
			.querySelectorAll(".headerArea, .footerArea, .menuBase, .rightButtons")
			.forEach((el) => el.remove());
	});
	const subpages = await page.evaluate(() => {
		return Array.from(document.querySelectorAll("a")).map((a) => ({
			name: a.innerText.trim(),
			url: a.href,
		}));
	});
	await page.close();
	const outline_path = path.join(import.meta.dirname, outline_name);
  if (!fs.existsSync(outline_path)) {
    fs.mkdirSync(outline_path, { recursive: true });
  }
	for (const subpage of subpages) {
		const page_name = slugify(subpage.name);
    console.log(`${outline_name} > ${page_name}..`);
		const page = await browser.newPage();
		await page.goto(subpage.url, { waitUntil: "networkidle" });
		await page.evaluate(() => {
			document.querySelectorAll(".headerArea, .footerArea, .menuBase, .rightButtons, #sideNav").forEach((el) => el.remove());
		});
		const page_html = await page.content();
		const page_markdown = convert(page_html, { extractMetadata: false });
		const page_filename = `${page_name}.md`;
		const page_filepath = path.join(outline_path, page_filename);
		fs.writeFileSync(page_filepath, page_markdown);
		await page.close();
	}
}

await browser.close();
