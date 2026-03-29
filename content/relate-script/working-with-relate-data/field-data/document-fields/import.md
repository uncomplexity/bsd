

- import(...)

---
The import(...) function can be used for many, many purposes, but in general it changes the document referenced by the document field, usually by importing it from another field and possibly from another document library. The import(...) function results in a boolean value indicating whether the import was successful.**Syntax:** **import(** *document-field***,** *permURL* **)
import(** *document-field***,** *permURL***,** *path* **)
import(** *document-field***,** *permURL***,** *path***,** *copy* **)
import(** *document-field***,** *permURL***,** *copy* **)
import(** *document-field***,** *permURL***,** *path***,** *copy***,** *rename* **)
import(** *document-field***,** *permURL***,** *copy***,** *rename* **)**
*document-field***.import(** *permURL* **)**
*document-field***.import(** *permURL***,** *path* **)**
*document-field***.import(** *permURL***,** *path***,** *copy* **)**
*document-field***.import(** *permURL***,** *copy* **)**
*document-field***.import(** *permURL***,** *path***,** *copy***,** *rename* **)**
*document-field***.import(** *permURL***,** *copy***,** *rename* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field to import into. If the field is read-only, no import will occur and the function will return false. |
| *permURL* | The permanent URL of the document to be imported. If the permURL is empty or invalid, the function will return false and the document field will be unchanged. The permanent URL is the value typically stored in old-style document fields, making import from this type of field easy. |
| *path* | The path within the current record's document library where the imported document will be placed. If omitted then the default folder, based on the creation date of the document being imported, will be used. If a path is specified that does not exist, it will be created. If the path specified is of an existing document, not folder, then the default folder will be used. |
| *copy* | Can force a document to be copied while being imported rather than simply moved. If *copy* is true then the import will always copy the document. If *copy* is null or false then the import will generally move the document. However, if the document is already referenced by another document field belonging to another record, then the document will be copied. If the document has a reference from a document field within the current record, then the document will be left at its current path unless an import *path* was specified. If the document is moved and the folder from which the document is moved is left empty after the move then the folder will be automatically deleted. |
| *rename* | This is an optional boolean parameter. If true it allows the file to be renamed during import if there is already an existing document with the same name. If false, null or omitted and a duplicate file exists at the target path, the import will fail and return false. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7461](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7461) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7501](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7501)

 
