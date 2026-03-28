

- putContent(...)B.pageContent

---
The putContent(...) allows HTML content (script, css) to be placed uniquely in the header or near the end of the page. Returns true for the first call that actually puts the content in the page.

**Syntax:** **putContent(***key, content, atEndOfPage* **)
putContent(***key, array, *atEndOfPage****)** *key***.putContent( )**

| **Parameter** | **Description** |
| --- | --- |
| *key* | *Content* will be placed once for each unique value of *key*. |
| *content* | A String value containing the *content* to be placed on the page. The *content* will be placed on this page once based on the *key*. |
| *array* | *Content* is looked up in the *array* by the *key* and then placed in the page using the same *key*. Shortcut for putContent(*key*, *array*[*key*]). |
| *atEndOfPage* | If true, null, or omitted then place *content* near end of the page. Otherwise place *content* in the header. |
Examples: `
putContent("myHelloWorld", "<script>alert('Hello World')</script>"); //Puts javascript near the end of the page.


"commonCSS".putContent(globalStrings, false); //shortcut for putContent("commonCSS", globalStrings["commonCSS"], false) which puts the css in the header.


if ("once".putContent("")) {

 //code in this if block will only run once on the page based on the key "once".

}`[B.pageContent()](/jslib/docs/B/classes/bluestep.b.html#pagecontent "B.pageContent()") [/shared/custompage/custompage.jsp?_event=view&_id=445506___8421](/shared/custompage/custompage.jsp?_event=view&_id=445506___8421) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8702](/shared/custompage/custompage.jsp?_event=view&_id=445506___8702)

 
