

- Generating PDFs

---
*Under construction.*PDFs can be generated for various urls using the /pdf endpoint. It consists of the following parameters.

- forwardCookies: Optional. Forward cookies in this request to all url requests
- attachment: Optional. Download instead of loading in browser.
- fileName: Optional. Name of pdf to be created.
- generator: Required. JSON that controls the generation of pdf.
Following is the JSON structure used by the generator parameter: {
 globalSettings: {
 collate: <boolean>, //Collate when printing multiple copies (default true)
 cookie-jar: <path>, //Read and write cookies from and to the supplied cookie jar file
 copies: <number>, //Number of copies to print into the pdf file
 grayscale: <boolean>, //PDF will be generated in grayscale (default 1)
 image-dpi <integer>, //When embedding images scale them down to this dpi (default 600)
 image-quality <integer>, //When jpeg compressing images use this quality (default 94)
 lowquality: <boolean>, //Generates lower quality pdf/ps. Useful to shrink the result document space
 margin-bottom: <unitsreal>, //Set the page bottom margin
 margin-left:: <unitsreal>, //Set the page left margin (default 10mm)
 margin-right: <unitsreal>, //Set the page right margin (default 10mm)
 margin-top: <unitsreal>, //Set the page top margin
 orientation: <orientation>, //Set orientation to Landscape or Portrait (default Portait)
 page-height: <unitreal>, //Page height
 page-size: <size>, //Set paper size to: A4, Letter, etc (default A4)
 page-width: <unitreal>, //Page width
 no-pdf-compression: <boolean>, //Do not use lossless compression on pdf objects
 title: <text>, //The title of the generated pdf file (The title of the first document is used if not specified)
 outline: <boolean>, //Put an outline into the pdf (default true)
 outline-depth: <integer>, //Set the depth of the outline (default 4)
 //All properties from pages below can be used except where noted.
 },
 pages: [{
 type: <cover|toc|page>, //One of 'cover', 'toc', or 'page'. Does not apply to globalSettings.
 // cover: A cover puts the content of a single webpage into the output document, the page
 // does not appear in the table of contents, and
 // does not have headers and footers.
 // toc: Inserts a table of contents into the output document
 page: <path>, //Url or text starting with <html>. Does not apply to globalSettings or toc type.
 //Following properties only apply to toc type.
 disable-toc-links: <boolean>, //Do not use dotted lines in the toc
 toc-header-text: <text>, //The header text of the toc
 toc-level-indentation: <unit>, //For each level of headings in the toc indent by this length (default 1em)
 disable-toc-links: <boolean>, //Do not link from toc to sections
 toc-text-size-shrink:<number>, //For each level of headings in the toc the font is scaled by this factor (default 0.8)
 xsl-style-sheet: <text>, //Use the supplied xsl style sheet for printing the table of content
 //Following properties apply to all types as well as globalSettings.
 background: <boolean>, //Do print background (default true)
 checkbox-checked-svg: <path>, //Use SVG when rendering checked checkboxes
 checkbox-svg: <path>, //Use SVG when rendering unchecked checkboxes
 cookie: [ //Set an additional cookies
 {
 key: <key>,
 value: <value>
 },
 ],
 custom-header: [ //Set an additional HTTP header
 {
 key: <key>,
 value: <value>
 },
 ],
 custom-header-propagation:<boolean>,//Add HTTP headers specified by custom-header for each resource request.
 defaultHeader: <boolean>, //Add a default header, with the name of the page to the left,
 // and the page number to the right, this is short for:
 // header-left:'[webpage]',
 // header-right:'[page]/[toPage]',
 // top:'2cm',
 // header-line: true
 encoding: <text>, //Set the default text encoding, for input
 external-links: <boolean>, //Make links to remote web pages (default true)
 forms: <boolean>, //Turn HTML form fields into pdf form fields (default false)
 images: <boolean>, //Do load or print images (default true)
 javascript: <boolean>, //Allow web pages to run javascript (default true)
 keep-relative-links: boolean>, //Keep relative external links as relative external links
 load-error-handling: <text>, //Specify how to handle pages that fail to load: abort, ignore or skip (default abort)
 load-media-error-handling: <text>,//Specify how to handle media files that fail to load: abort, ignore or skip (default ignore)
 minimum-font-size: <integer>, //Minimum font size
 include-in-outline: <boolean>, //Include the page in the table of contents and outlines
 page-offset: <integer>, //Set the starting page number
 password: <text>, // HTTP Authentication password
 post: [ //Add an additional post field(s)
 {
 key: <key>,
 value: <value>
 },
 ],
 print-media-type: <boolean>, //Use print media-type instead of screen
 radiobutton-checked-svg: <path>,//Use this SVG file when rendering checked radiobuttons
 radiobutton-svg: <path>, //Use this SVG file when rendering unchecked radiobuttons
 run-script: [<text>], //Run this additional javascript after the page is done loading (repeatable)
 smart-shrinking: <boolean>, //Enable the intelligent shrinking strategy used by WebKit that makes the pixel/dpi ratio none constant (default true)
 stop-slow-scripts: <boolean>, //Stop slow running javascripts (default true)
 toc-back-links: <boolean>, //Link from section header to toc (default false)
 user-style-sheet: <path>, //Specify a user style sheet, to load with every page
 username: <text>, //HTTP Authentication username
 viewport-size: <number>, //Set viewport size if you have custom scrollbars or css attribute overflow to emulate window size
 window-status: <text>, //Wait until window.status is equal to this string before rendering page
 zoom: <float>, //Use this zoom factor (default 1)
 footer-center: <text>, //Centered footer text
 footer-font-name: <text>, //Set footer font name (default Arial)
 footer-font-size: <number>, //Set footer font size (default 12)
 footer-html: <path>, //Adds a html footer
 footer-left: <text>, //Left aligned footer text
 footer-line: <boolean>, //Do not display line above the footer (default false)
 footer-right: <text>, //Right aligned footer text
 footer-spacing: <number>, //Spacing between footer and content in mm (default 0)
 header-center: <text>, //Centered header text
 header-font-name: <text>, //Set header font name (default Arial)
 header-font-size: <number>, //Set header font size (default 12)
 header-html: <path>, //Adds a html header
 header-left: <text>, //Left aligned header text
 header-line: <boolean>, //Do not display line above the header (default false)
 header-right: <text>, //Right aligned header text
 header-spacing: <number>, //Spacing between header and content in mm (default 0)
 replace: [ //Replace [key] with value in header and footer (repeatable)
 {
 key: <key>,
 value: <value>
 },
 ]
 }]
 }

 Relate Example 1: reqObj = getHTTPRequester();
 reqObj.url = "/pdf";
 reqObj.method = "POST";
 reqObj.addParam("forwardCookies");
 reqObj.addParam("fileName","myPDF.pdf");
 generator = new JSONObject();
 pages = new JSONArray();
 generator.put("pages", pages);
 page = new JSONObject();
 pages.put(page);
 page.put("type", "page");
 page.put("page", "http://www.bluestep.net");
 reqObj.addParam("generator",generator.toString());
 pdfURL = reqObj.getContentURL();

 Relate Example 2: reqObj = getHTTPRequester();
 reqObj.url = "/pdf";
 reqObj.method = "POST";
 reqObj.addParam("fileName","myPDF.pdf");

 generator = (String)newJSONObject(``{
 "globalSettings":{
 "print-media-type":true,
 "page-size":"Letter"
 },
 "pages":[
 {"type":"toc"},
 {"type":"page","page":"http://www.bluestep.net"},
 {"type":"page","page":"http://amazon.com"}
 ]}``);

 reqObj.addParam("generator", generator);
 pdfURL = reqObj.getContentURL();




Relate Example 3: generator = (String)newJSONObject(``{
 "globalSettings":{
 "print-media-type":true,
 "page-size":"Letter",
 "background":false
 },
 "pages":[
 {"type":"toc"},
 {"type":"cover", "page":"<html><body>Cover Page</body></html>"},
 {"type":"page", "page":"<html><body>Hello World</body></html>"},
 {"type":"page", "page":"/"}]
 }``);

 generator = generator.encodeURI();
 url = "/pdf?forwardCookies&attachment&generator=" + generator;
 anchor = "<a href='" + url + "' target='_blank'>Print PDF</a>";

javascript Example: var generator = {
 globalSettings: {
 "print-media-type": true,
 "page-size": "Letter"
 },
 pages: [
 { type: "toc"},
 { type: "page", page: "http://www.bluestep.net"},
 { type: "page", page: "http://amazon.com"}
 ]
 };

 var generatorEncoded = encodeURIComponent(JSON.stringify(generator));

 var newWindow = window.open("/pdf?fileName=myPDF.pdf&generator=" + generatorEncoded,"_blank");
 newWindow.print();

 See <https://wkhtmltopdf.org/usage/wkhtmltopdf.txt> for more details. [/shared/custompage/custompage.jsp?_event=view&_id=445506___8621](/shared/custompage/custompage.jsp?_event=view&_id=445506___8621) [/shared/custompage/custompage.jsp?_event=view&_id=445506___11401](/shared/custompage/custompage.jsp?_event=view&_id=445506___11401)

 
