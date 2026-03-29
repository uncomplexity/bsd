

- getDocumentLibrary(...)

---
The getDocumentLibrary(...) function is used to retrieve and modify the documents and folders within the document library of a Relate record. This allows both read-access and modify/write capabilities. The result of the getDocumentLibrary(...) function is a Folder object representing the root folder of the document library. Folder objects retrieve sub-folders and documents contained within that folder. Documents can retrieve a list of versions of that document. Folder, document and document version objects are described below.Syntax:
**getDocumentLibrary(** *formEntryId* **)**
**getDocumentLibrary(** *formEntryId***,** *hqMedia* **)**
*formEntryId***.getDocumentLibrary( )**
*formEntryId***.getDocumentLibrary(** *hqMedia* **)**

| **Parameter** | **Description** |
| --- | --- |
| *formEntryId* | The id of a form entry belonging to the record. |
| *hqMedia* | A boolean value which, if true, retrieves the HQ media library within the record's unit instead of the record's document library. This feature is designed primarily to fix a regression problem for one particular BlueStep client. It is not recommended for general use. |**Folder Object**

| **Field/Function** | **Description** |
| --- | --- |
| *name* | Gets the name of the folder. This field may be changed using the rename(...) function. |
| *rename(...)* | Renames the folder. The result of the rename(...) function is a boolean value indicating if the rename was successful. The only parameter (other than the folder) is the new name. If the new name is null or the empty-string, or if a document or folder already exists in the same location with the same name, then the rename will not occur and the function will return false. The new name of the folder can contain any characters except the forward slash, "/". However, remember that Microsoft operating systems also do not support several other characters; specifically, the following characters are not allowed: < > : " / \ \| ? *. Plus, control characters (such as tab and new-line) are nearly always a bad idea and not supported in many cases. |
| *path* | Gets the path of the folder. This field may be changed using the move(...) function. |
| *fullPath* | Gets the combined path and name of the folder. This property is read-only. |
| *move(...)* | Changes the path, or location, of the current folder. The result of move(...) is a boolean value indicating whether the move was successful. The move(...) function receives either one or two additional parameters. The first is a String value containing the destination folder's full path. The second parameter is optional. It is a Boolean value indicating whether the destination path should be created if it does not already exist. |
| *davURL* | Gets the WebDAV url of the folder. This property is read-only. |
| *getSubFolders(...)* | Gets an array of subfolders of the current folder. The folder objects in the array are indexed by name. (Note: An index consists of the name of the subfolder and a '/'. So for the folder 'My Documents', the index would be 'My Documents/'.) In other words, the type of the result value is Folder[String]. The function can receive one optional boolean parameter. If the parameter is true, then sub-folders are retrieved recursively, not just immediate child folders. |
| *getDocuments( )* | Gets an array of documents of the current folder. The document objects in the array are indexed by name. In other words, the type of the result value is Document[String] |
| *newDocument(...)* | Creates a new document in the current folder. This function works the same as the [setContent(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/set-content) except all three parameters are always required because it is always creating a new document. The contentType, however, may be null or empty-string, and the system will guess from the file extension. |
| *newDocumentFromURL(...)* | Creates a new document in the current folder. This function works the same as the [setContentFromURL(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/set-content-from-url) except it always creates a new document. |
| *newFolder(...)* | Creates a new sub-folder within the current folder. The function receives one additional parameter, the name of the new folder. The result of this function is a boolean value indicating whether the folder creation was successful. New folders may not have the same name as any existing folder or document within the current folder. All characters are allow in the folder name exception the forward slash character. However, control characters and other characters not allowed by Microsoft operating systems are discouraged since they can make things difficult for some users. |
| *delete( )* | Deletes the current folder. The function receives no additional parameters. The result of the function is a boolean value indicating whether the delete was successful. This function will always be unsuccessful if the folder is not empty. It will not allow deleting a folder that contains other folders or documents. |
| *isRoot* | A boolean value indicating whether this is the root folder. |
| *parent* | Gets the parent folder of the current folder. The root folder has no parent folder. |**Document and DocumentVersion Objects**
Documents and their individual versions have many similar fields and functions. A document can do everything a document version can, plus it supports update capabilities and has path/folder information. An X in the DV column indicates that both documents and document versions support the property. If there is no X, then only documents support the property. All fields are read-only. Edit/modify capabilities are provided via functions.

| **Field/Function** | **DV** | **Description** |
| --- | --- | --- |
| *filename* | X | The filename of the document. This field can be modified using the rename(...) function. |
| *rename(...)* | | Changes the name of the current document. The result of the rename(...) function is a boolean value indicating if the rename was successful. The only parameter (other than the document) is the new name. If the new name is null or the empty-string, or if a document or folder already exists in the same location with the same name, then the rename will not occur and the function will return false. The new name of the document can contain any characters except the forward slash, "/". However, remember that Microsoft operating systems also do not support several other characters; specifically, the following characters are not allowed: < > : " / \ \| ? *. Plus, control characters (such as tab and new-line) are nearly always a bad idea and not supported in many cases. |
| *path* | | The path of this document relative to the root folder of the document library. This field may be modified using the move(...) function. |
| *fullPath* | | Gets the combined path and filename of the document. |
| *folder* | | Gets the folder containing the document. |
| *move(...)* | | The move(...) function changes the path, or location, of the document referenced by the document field. The result of move(...) is a boolean value indicating whether the move was successful |
| *permURL* | X | The current permanent URL of this document. Yes, a seemingly self contradictory phrase: "current permanent". The first part of the URL permenantly identifies the document (unless it is deleted). The last part is the current name. If you rename the document you will have a new permURL, but the old one will still work. Your browser may be confused about the name of the file, but it will still contain the correct data. |
| *davURL* | | The URL which allows webDAV access to this document. The webDAV URL is based on the path and name of the document and will change if the document is moved or renamed. The old webDAV URL will cease to work when the document or it's path changes. The webDAV URL will change if a folder containing the document is moved or renamed (i.e. the path is changed). Because of this you should usually use the permURL property in preference to the webDAV URL unless webDAV capabilities are specifically needed. |
| *contentType* | X | The MIME type of this document. MIME types have the form of *basic-type/specific-type* with an optional character set indentifier for text documents. For instance, an HTML document has a MIME type of "text/html" or with the character set identified, something like "text/html; charset=UTF8". For a GIF image the MIME type is "image/gif". [A list of supported character encodings is available within Oracle's Java documentation.](http://docs.oracle.com/javase/7/docs/technotes/guides/intl/encoding.doc.html) |
| *setContentType(...)* | | Changes the stored content type of the currently referenced document. The result of the setContentType(...) function is a boolean value indicating if the proceedure was successful. The function receives one additional String parameter, the new content type. If new content type is null the default content type based on the document's name will be used. |
| *contentSize* | X | The size, in bytes, of the document. |
| *createdTimestamp* | X | The date and time this document was first created |
| *createdCredential* | X | The professional credential, as of the creation timestamp, of the user who first created this document. Credentials are an optional feature that may not be enabled for your organization. |
| *createdUsername* | X | The username of the user who first created this document |
| *createdFirstName* | X | The first name of the user who first created this document |
| *createdLastName* | X | The last name of the user who first created this document |
| *createdEmail* | X | The email address of the user who first created this document |
| *modifiedTimestamp* | X | The date and time when this document was last modified. The modifiedTimestamp records changes to either content or any property of the document such as its name. The contentTimestamp only applies to the actual document content. |
| *modifiedCredential* | X | The professional credential, as of the modification timestamp, of the user who last modified this document. Credentials are an optional feature that may not be enabled for your organization. |
| *modifiedUsername* | X | The username of the user who last modified this document |
| *modifiedFirstName* | X | The first name of the user who last modified this document |
| *modifiedLastName* | X | The last name of the user who last modified this document |
| *modifiedEmail* | X | The email address of the user who last modified this document |
| *contentTimestamp* | X | The date and time the content of the document was last changed. The modifiedTimestamp records changes to either content or any property of the document such as its name. The contentTimestamp only applies to the actual document content. |
| *notes* | X | The contents of the notes field of the document. This field can be modified using the setNotes(...) function. |
| *setNotes(...)* | | Changes the notes stored with the currently referenced document. The result of the setNotes(...) function is a boolean value indicating if the procedure was successful. The function receives one additional parameter: the new notes to be stored with the document. |
| *getContent(...)* | X | Retrieves the content of the document. This function works identically to the [getContent(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/get-content). |
| *setContent(...)* | | Replaces the content of the document. This function works similarly to the [setContent(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/set-content), except it cannot be used to create a new documents. |
| *setContentFromURL(...)* | | Replaces the content of the document. This function works similarly to the [setContentFromURL(...) function of document field](/relate-script/working-with-relate-data/field-data/document-fields/set-content-from-url), except it cannot be used to create a new documents. |
| **delete(...)** | | Deletes the current document. The function receives no additional parameters. The result of this function is a boolean value indicating if the delete was successful. |
| *getThumbnailURL(...)* | X | Builds a String value containing a URL which retrieves the thumbnail of the document referenced by the document field. Optional parameters allow for different thumbnail dimensions and alternate resizing techniques. Although this function is most often used for generating thumbnails it is capable of resizing images to dimensions too large to be rightly called thumbnails. It should be considered a general function to get a resized image, not just thumbnails. This function works identically to the [getThumbnailURL(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/get-thumbnail-url). |
| *getThumbnailHTML(...)* | X | Builds a String value containing a piece of HTML which will display a thumbnail of the document referenced by the document field. Optional parameters allow for different thumbnail dimensions, alternate resizing techniques, and whether to include a link to pop-up the original, full-sized document. Although this function is most often used for generating thumbnails it is capable of resizing images to dimensions too large to be rightly called thumbnails. It should be considered a general function to get a resized image, not just thumbnails. This function workds identically to the [getThumbnailHTML(...) function of document fields](/relate-script/working-with-relate-data/field-data/document-fields/get-thumbnail-html). |
| *imageWidth* | X | The image width in pixels. If the document is not recognised as being an image the value is null. |
| *imageHeight* | X | The image height in pixels. If the document is not recognised as being an image the value is null. |
| *versioned* | | Indicates whether the document is versioned or not. This field may be modified using the setVersioned(...) function. |
| *setVersioned(...)* | | Changes whether the currently referenced document is versioned. The result of the setVersioned(...) function is a boolean value indicating if the proceedure was successful. The function receives one additinal parameter: a boolean value indicating whether the document should be versioned. If the parameter is null the function will return false. Remember that a changing a document from versioned to un-versioned does not cause it to lose all previous versions. It does hide the previous versions, and it does cause any future content changes to replace the content of the most recent version. |
| *versions* | | Retrieves the list of document versions as an array indexed by version number. Versions are normally sequential beginning at 1. However, older versions can be deleted if they are not longer wanted, so in rare cases the version may not start a 1 and may not be sequential. |
| *referenceCount* | | The number of document fields with a *saved* reference to the document. This means that for pre-edit formulas, field formulas and pre-save formulas a field's reference may or may not be included depending on whether the field value has just been changed. For post-save formulas most field references will be included. |
| *references* | | An array of DocumentReference object values representing each saved document-field reference to the document. The references are indexed numerically and in an arbitrary order. The DocumentReference object is described below. |**DocumentReference Object**
A DocumentReference represents the connection between a document field and the document selected by that field.

| **Field/Function** | **Description** |
| --- | --- |
| *entryId* | The id of the form entry containing the document field that references the document. |
| *System* | The System field of the entry containing the document field that references the document. The System field is helpful for getting the URL to view/edit the form entry. |
| formName | The name of the form containing the document field that references the document. |
| formLabel | The label of the form containing the document field that references the document. |
| fieldName | The name of the document field that references the document. |
| fieldLabel | The label of the document field that references the document. |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3154](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3154) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8481](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8481)

 
