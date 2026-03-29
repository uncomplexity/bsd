

- sendRedirect(...)B.response.sendRedirect

---

- The sendRedirect(...) function sends an HTTP redirect response to the current request. It can also be used to detect if a redirect is possible, and thereby determine if this is a user initiated action or a system initiated action such as a scheduled formula or data import. To determine who/what initiated the action, use the return value or result of the function. If the result of the function is true, then an HTTP redirect response will be sent as directed. If the result of the function is false, then either the url is null/empty or some other formula has already sent a redirect (first redirect wins). If the result of the function is null then a redirect is not possible because this is not a user initiated action, it is system initiated. So, to just check without actually redirecting pass a null or empty-string url to the function, then check if the result is null vs. false.

**Syntax:** **sendRedirect(** *url* **)**
*url***.sendRedirect()**

| **Parameter** | **Description** |
| --- | --- |
| *url* | A String value containing the URL to redirect to. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3739](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3739) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11841](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11841)

 
