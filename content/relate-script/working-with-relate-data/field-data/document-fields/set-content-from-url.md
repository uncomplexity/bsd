

- setContentFromURL(...)

---
The setContentFromURL(...) function may be used to replace the content of existing documents, or to create new documents entirely. The result of setContentFromURL(...) is a boolean value indicating whether the function was successful.**Syntax:** **setContentFromURL(** *document-field***,** *url* **)** *document-field***.setContentFromURL(** *url* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field which will reference the new content. If the field is read-only, no action will occur and the function will return false. If the document field does not currently reference a document a new document will be created in the default folder. If the field currently references a document then that document's content will be replaced. The existing content of the document will be permanently lost unless the document is versioned. If the URL does not return content no action will be taken and the function will return false. If a local URL is specified (the URL begins with a forward slash) then an attempt will be made to retrieve the content using the currently logged in user's credentials thus making it possible to retrieve secure files which require authentication to view. |
| *url* | The URL from which to retrieve the content of the document. Also the name of the document as it is contained in the URL will be used. If you want a different name, you must rename the file after the content is loaded. Finally, the content-type included in the HTTP response header when retrieving the URL will be used as the document's content-type. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7503](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7503) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7504](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7504)

 
