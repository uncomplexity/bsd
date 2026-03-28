

- setContentType(...)

---
The setContentType(...) function has only one variation, not counting syntax variations. The function simply changes the stored content type of the currently referenced document. The result of the setContentType(...) function is a boolean value indicating if the proceedure was successful.**Syntax:**
**setContentType(** *document-field***,** *contentType* **)**
*document-field***.setContentType(** *contentType* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document which will have the new contentType. If the field is read-only or does not currently reference a document the function will return false or null respectively. |
| *contentType* | The new contentType of the document. If contentType is null the default contentType based on the document's name will be used. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___8061](/shared/custompage/custompage.jsp?_event=view&_id=445506___8061) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7505](/shared/custompage/custompage.jsp?_event=view&_id=445506___7505)

 
