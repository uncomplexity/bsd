

- setContent(...)

---
The setContent(...) has 3 variations, not counting syntax variations. **NOTE: The variation with all of the 3 parameters is required if a new document is being uploaded.** It may be used to replace the content of existing documents, or to create new documents entirely. The result of setContent(...) is a boolean value indicating whether the function was successful.**Syntax:** **setContent(** *document-field***,** *content* **)
setContent(** *document-field***,** *content***,** *contentType* **)** **setContent(** *document-field***,** *content***,** *contentType***,** *name* **)**
*document-field***.setContent(** *content* **)**
*document-field***.setContent(** *content***,** *contentType* **)**
*document-field***.setContent(** *content***,** *contentType***,** *name* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field which will reference the new content. If the field is read-only, no action will occur and the function will return false. If the document field does not currently reference a document a new document will be created in the default folder. Thus, a name will be required to successfully complete the function. If a document is being created and a name is not specified, the function will return false. If the field currently references a document then that document's content will be replaced. The existing content of the document will be permanently lost unless the document is versioned. |
| *content* | The content which the document will contain. The content, a 16-bit Unicode String value, must be converted to bytes using a character encoding or "charset". The most accurate way to determine the charset is from the "charset" part of the contentType. This requires first, that a contentType be available and second, that it contain a charset. If no contentType is given, the system looks at the contentType of any existing document, then attempts to guess from the filename. If no contentType can be determine or the "charset" part of the contentType is not specified then the charset must be guessed. If there is a contentType and it begins with begins with "text", then Cp1252, the Microsoft Windows varient of the Latin-1 codepage, will be used. Finally, if no charset parameter can be found and the contentType does not begin with "text", then BASE64 encoding is assumed. For more discussion of encodings, character sets and content types review the [getContent(...)](/relate-script/working-with-relate-data/field-data/document-fields/get-content) function. If *content* is null, the function will return false. |
| *contentType* | The content type of the new content. If omitted or empty the contentType of the existing document will be used. If *contentType* is omitted, empty, or null when creating a new document, the content type will be guessed from the name given to the document. |
| *name* | The new name of the document. If name is null or the empty-string, or if a document or folder already exists in that location with that name, then the content will not be set and the function will return false. The new name of the document can contain any characters except the forward slash, "/". However, remember that Microsoft operating systems also do not support several other characters; specifically, the following characters are not allowed: < > : " / \ \| ? * |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7502](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7502) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8061](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8061)

 
