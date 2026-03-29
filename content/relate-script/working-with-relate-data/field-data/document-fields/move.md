

- move(...)

---
The move(...) function has two variations, not counting syntax variations. The move(...) function changes the path, or location, of the document referenced by the document field. The result of move(...) is a boolean value indicating whether the move was successful.**Syntax:**
**move(** *document-field***,** *path* **)**
**move(** *document-field***,** *path***,** *create* **)**
*document-field***.move(** *path* **)**
*document-field***.move(** *path***,** *create* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document which will be moved. If the field is read-only or does not currently reference a document the function will return false. |
| *path* | The path within the current record's document library where the document will be placed. If the path specified is of an existing document, not folder, then the function will return false. If the folder from which the document is moved is left empty after the move then the folder will automatically be deleted. |
| *create* | Specifies whether the path should be created if it does not exist. By default, *create* is true. If *create* is false and the path does not exist, the function will return false. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7462](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7462) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7502](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7502)

 
