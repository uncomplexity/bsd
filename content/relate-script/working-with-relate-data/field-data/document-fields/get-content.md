

- getContent(...)

---
The getContent(...) function has five useful variations, not counting syntax variations. Other variations are possible, but they will, in practically all cases, result in a useless or null result. The function retrieves the content of the currently referenced document as a String value. It may optionally return the content of an image after resizing and possibly cropping it. Since all documents are stored as bytes (a list of 8-bit values) and the function returns a String value (a list of 16-bit values) there must be some type of data conversion. The getContent(...) function includes settings which determine how this data conversion will be done.

**Syntax:** **getContent(** *document-field* **)
getContent(** *document-field***,** *encoding* **)
getContent(** *document-field***,** *width***,** *height* **)
getContent(** *document-field***,** *width***,** *height***,** *resize-type* **)
getContent(** *document-field***,** *width***,** *height***,** *resize-type***,** *resize-type* **)**
*document-field***.getContent( )**
*document-field***.getContent(** *encoding* **)**
*document-field***.getContent(** *width***,** *height* **)**
*document-field***.getContent(** *width***,** *height***,** *resize-type* **)**
*document-field***.getContent(** *width***,** *height***,** *resize-type***,** *transform-type* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field which references the document from which the content will be retrieved. If no document is referenced by the field, the function will result in null. |
| *encoding* | The encoding parameter determines how the bytes constituting the file will be converted to characters in the String value returned by this function. For all non-text documents the default is "BASE64". For text documents the content type of the document is retrieved and scanned for a character set identifier. If present, that character set will be used by default. If the content type of the document does not include a character set identifier, then the default is "Cp1252" which is the Microsoft Windows varient of the Latin-1 codepage. If an encoding is specified it must end with "charset=" followed by a character set identifier. Ideally, the value specified should be the full MIME type of the document with a character set specified. [A list of supported encodings can be found within Sun Microsystem's Java documentation.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html) Additionally, BlueStep supports Base64 and UTF-7. If an invalid or unsupported encoding is specified the function will result in null. |
| *width* | The resized width of the image being retrieved. The resulting image content may be narrower depending on the dimensions of the original image and the scaling type chosen. If a null value is passed the image will not be width-bounded. |
| *height* | The resized height of the image being retrieved. The resulting image content may be shorter depending on the dimensions of the original image and the scaling type chosen. If a null value is passed the image will not be height-bounded. |
| *resize-type* | Determines how the image will be resized. If an attempt is made to scale a document which is not an image, the function will result in null. A list of possible values and their meanings is given in the article titled "[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations)*.*" The resulting image after a successful resize will always be a JPEG regardless of the orginal image type. |
| *transform-type* | Determines how the image will be rotated and flipped. If an attempt is made to transform a document which is not an image, the function will result in null. A list of possible values and their meanings is given in the article titled "[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations)*.*" The resulting image after a successful transform will always be a JPEG regardless of the orginal image type. |
 [/shared/custompage/custompage.jsp?_event=view&_id=445506___7381](/shared/custompage/custompage.jsp?_event=view&_id=445506___7381) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7421](/shared/custompage/custompage.jsp?_event=view&_id=445506___7421)

 
