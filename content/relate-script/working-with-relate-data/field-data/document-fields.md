

- Document Fields

---
A document field references a document contained in the current record's document library. A document field can access many basic properties about the document, such as its name, as well as many calculated properties, such at its thumbnail URL. A document field can also manipulate those properties in many ways. Finally, a document field can add new files to the current record's document library either by importing them from other places, or by providing the content of a document to be created. The many fields and functions which are available to perform these tasks are described below and in following pages.The following read-only fields are available to access the properties of the document. All of the properties will be null if no document is referenced by the field (the field is empty). The functions listed on following pages describe ways to edit the values returned by these properties.

| **Field Name** | **Data Type** | **Description** |
| --- | --- | --- |
| contentSize | Integer | The size, in bytes, of the document. |
| contentTimestamp | DateTime | The date and time the content of the document was last changed. |
| contentType | String | The MIME type of this document. MIME types have the form of *basic-type/specific-type* with an optional character set indentifier for text documents. For instance, an HTML document has a MIME type of "text/html" or with the character set identified, something like "text/html; charset=UTF8". For a GIF image the MIME type is "image/gif". [A list of supported character encodings is available within Oracle's Java documentation.](http://docs.oracle.com/javase/7/docs/technotes/guides/intl/encoding.doc.html) |
| createdEmail | String | The email address of the user who first created this document |
| createdFirstName | String | The first name of the user who first created this document |
| createdLastName | String | The last name of the user who first created this document |
| createdTimestamp | DateTime | The date and time this document was first created |
| createdUsername | String | The username of the user who first created this document |
| createdCredential | String | The professional credential, as of the creation timestamp, of the user who first created this document. Credentials are an optional feature that may not be enabled for your organization. |
| davURL | String | The URL which allows DAV access to this document. The DAV URL is based on the path and name of the document and will change if the document is moved or renamed. It will also change if a folder containing the document is moved or renamed. Because of this you should usually use the permURL property in preference to the DAV URL unless DAV capabilities are specifically needed. |
| displayHTML | String | The same HTML that would be generated if the document were inserted into a merge report. Casting the field to a String produces the same result |
| filename | String | The filename of the document. |
| folder | Folder | Gets the folder containing the document. Folders are documented in the [getDocumentLibrary(...)](/relate-script/working-with-relate-data/special-data-and-functions/get-document-library) function. |
| fullPath | String | Gets the combined path and filename of the document. |
| imageHeight | Integer | The image height in pixels. If the document is not recognised as being an image the value is null. |
| imageWidth | Integer | The image width in pixels. If the document is not recognised as being an image the value is null. |
| linkHTML | String | The name of the document with a pop-up link to open the document. |
| modifiedEmail | String | The email address of the user who last modified this document |
| modifiedFirstName | String | The first name of the user who last modified this document |
| modifiedLastName | String | The last name of the user who last modified this document |
| modifiedTimestamp | DateTime | The date and time when this document was last modified. |
| modifiedUsername | String | The username of the user who last modified this document |
| modifiedCredential | String | The professional credential, as of the modification timestamp, of the user who last modified this document. Credentials are an optional feature that may not be enabled for your organization. |
| notes | String | The contents of the notes field of the document |
| path | String | The path of this document relative to the root folder of current record's document library. |
| permURL | String | The permanent URL of this document. Although renaming the document will change this value, the old value will still work but result in a document with the old name. |
| referenceCount | Integer | The number of document fields with a saved reference to the document. This means that for pre-edit formulas, field formulas and pre-save formulas the current field's reference may, or may not, be included depending on whether the field value has just been changed. For post-save formulas the current field's reference will always be included. |
| versioned | Boolean | Indicates whether the document is versioned or not. |
**Documents also have many functions:**

 [clear(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7381)
[getContent(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7401)
[getDefaultPath(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7421)
[getThumbnailHTML(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7441)
[getThumbnailURL(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7461)
[import(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7462)
[move(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7501)
[rename(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7502)
[setContent(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7503)
[setContentFromURL(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8061)
[setContentType(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7504)
[setNotes(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7505)
[setVersioned(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7521)
[Image Transformations](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7481)
[Document Permissions](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7361) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3152](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3152) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7381](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7381)

 
