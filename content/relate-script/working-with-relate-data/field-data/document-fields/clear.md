

- clear(...)

---
The clear(...) function has two variations, not counting syntax variations. It clears the document field so it no longer references a document. It can optionally delete the document which is being cleared. The result of the clear(...) function is a boolean value indicating if any work was actually done. The boolean value will be null if there was no document to clear. It will be false if the document field is read-only or if a server error occured while attempting to clear the field or delete the document. It will also be false if the formula delete parameter is set to true and the field is cleared, but the document is not deleted. This could happen if one user locked the document and another user edited and saved the form. The lock would prevent the document from being deleted, but the field would still be cleared. IMPORTANT: If clear is called in a pre-edit formula and the call results in a document being deleted, then the deletion will occur even if the edit is never completed. For this reason, in a pre-edit formula clear(...) should NEVER be called without passing false as the *delete* parameter.

**Syntax:** **clear(** *document-field* **)**
**clear(** *document-field***,** *delete* **)** *document-field***.clear(** **)**
*document-field***.clear(** *delete* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field to be cleared. |
| *delete* | A boolean value indicating whether the currently referenced document should be deleted. If *delete* is true then the document will be deleted. If *delete* is false then the document will not be deleted. If *delete* is null or is not given then the clean-up policy of the document field will be followed. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7341](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7341) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7401](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7401)

 
