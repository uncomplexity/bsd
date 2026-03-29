

- getPopInScript(...)

---
The getPopInScript(...) is a convenience function that generates a small bit of javascript to open a pop-in window to a given URL using BlueStep's internal scripting libraries.**Syntax:** **getPopInScript(** *url* **)
getPopInScript(** *url***,** *edit* **)
getPopInScript(** *url***,** *height* **)
getPopInScript(** *url***,** *height***,** *edit* **)
getPopInScript(** *url***,** *height***,** *width* **)
getPopInScript(** *url***,** *height***,** *width***,** *edit* **)**
*url***.getPopInScript( )**
*url***.getPopInScript(** *edit* **)**
*url***.getPopInScript(** *height* **)**
*url***.getPopInScript(** *height***,** *edit* **)**
*url***.getPopInScript(** *height***,** *width* **)**
*url***.getPopInScript(** *height***,** *width***,** *edit* **)**

| **Parameter** | **Description** |
| --- | --- |
| *url* | The URL to display within the pop-in window. If the URL begins with a slash, indicating a BlueStep url then "_dt=s" is appended to the end (with appropriate separator) to indicate that the "**d**efault **t**emplate" should be "**s**tyles only". |
| *height* | An Integer field indicating the maximum height of the pop-in window. If omitted or null or if there is not enough room for the value given, the pop-in window will take the full height of the browser less a margin. |
| *width* | An Integer field indicating the maximum width of the pop-in window. If omitted or null or if there is not enough room for the value given, the pop-in window will take the full width of the browser less a margin. |
| *edit* | A boolean value indicating that the URL is for a BlueStep edit page. A value of true causes an additional parameter to be added to the url so the save button will work correctly in the context of the pop-in. Specifically, if the edit parameter is true, an additional parameter of "_dest=/shared/admin/refreshandclose.jsp" is added. **Note:** If you want to close the pop-in but not refresh the parent page, then there is an alternate page, "saveandclose.jsp", which can be used in place of "refreshandclose.jsp". You can either add the "_dest" parameter to the url yourself prior to passing it to getPopInScript(...) and omit the edit parameter, or use the edit parameter then search and replace in the result string. |

, </strong><em>edit</em> <strong>[B.popInScript()](/jslib/docs/B/classes/bluestep.b.html#popinscript "B.popInScript()") [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8083](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8083) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8422](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8422)

 
