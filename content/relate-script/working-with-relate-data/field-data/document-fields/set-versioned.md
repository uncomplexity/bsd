

- setVersioned(...)

---
The setVersioned(...) function has only one variation, not counting syntax variations. The function simply changes whether the currently referenced document is versioned. The result of the setVersioned(...) function is a boolean value indicating if the proceedure was successful.**Syntax:** **setVersioned(** *document-field***,** *versioned* **)** *document-field***.setVersioned(** *versioned* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document which will receive the new notes. If the field is read-only or does not currently reference a document the function will return false or null respectively. |
| *versioned* | A boolean value indicating whether the document should be versioned. If *versioned* is null the function will return false. Remember that a changing a document from versioned to un-versioned does not cause it to lose all previous versions. It does hide the previous versions, and it does cause any future content changes to replace the content of the most recent version. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7505](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7505) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7481](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7481)

 
