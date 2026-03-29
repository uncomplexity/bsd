

- rename(...)

---
The rename(...) function has only one variation, not counting syntax variations. The function simply changes the name of the currently referenced document. The result of the rename(...) function is a boolean value indicating if the rename was successful.**Syntax:**
**rename(** *document-field***,** *name* **)**
*document-field***.rename(** *name* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document which will be renamed. If the field is read-only in the formula it will return false. If it does not currently reference a document the function will return null. |
| *name* | The new name of the document. If name is null or the empty-string, or if a document or folder already exists in that location with that name, then the rename will not occur and the function will return false. The new name of the document can contain any characters except the forward slash, "/". However, remember that Microsoft operating systems also do not support several other characters; specifically, the following characters are not allowed: < > : " / \ \| ? * |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7501](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7501) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7503](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7503)

 
