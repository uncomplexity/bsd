

- scriptIncl(...)

---
The scriptIncl(...) is a convenience method that produces an HTML script tag to include a script. The primary purpose is to avoid Google Chrome's XSS security logic from triggering while editing a RelateScript formula. It is also helpful for standard BlueStep scripts because it will load the script from special static-content domains which improve page load performance.

**Syntax:** **scriptIncl(** *url* **)**
*url***.scriptIncl( )**

| **Parameter** | **Description** |
| --- | --- |
| *url* | The URL of the script to be included. If the URL is just a script name with no path, then "/jslib/" is prepended. If the script is in the "/jslib/" folder and ends with ".js" then a special domain is added to load the script from one of BlueStep's static-content domains for improved page load time. |
[B.scriptInclude()](/jslib/docs/B/classes/bluestep.b.html#scriptinclude "B.scriptInclude()") [/shared/custompage/custompage.jsp?_event=view&_id=445506___11602](/shared/custompage/custompage.jsp?_event=view&_id=445506___11602) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8721](/shared/custompage/custompage.jsp?_event=view&_id=445506___8721)

 
