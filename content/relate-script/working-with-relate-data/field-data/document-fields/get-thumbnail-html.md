

- getThumbnailHTML(...)

---
The getThumbnailHTML(...) function has a dozen variations, not counting syntax variations. The result of this function is a String value containing a piece of HTML which will display a thumbnail of the document referenced by the document field. Optional parameters allow for different thumbnail dimensions, alternate resizing techniques, and whether to include a link to pop-up the original, full-sized document. Although this function is most often used for generating thumbnails it is capable of resizing images to dimensions too large to be rightly called thumbnails. It should be considered a general function to get a resized image, not just thumbnails.

**Syntax:** **getThumbnailHTML(** *document-field* **)
getThumbnailHTML(** *document-field***,** *width***,** *height* **)
getThumbnailHTML(** *document-field***,** *width***,** *height***,** *resize-type* **)
getThumbnailHTML(** *document-field***,** *width***,** *height***,** *resize-type***,** *transform-type* **)
getThumbnailHTML(** *document-field***,** *width***,** *height***,** *resize-type***,** *link* **)
getThumbnailHTML(** *document-field***,** *width***,** *height***,** *resize-type***,** *transform-type***,** *link* **)
getThumbnailHTML(** *document-field***,** *width***,** *height***,** *link* **)
getThumbnailHTML(** *document-field***,** *resize-type* **)
getThumbnailHTML(** *document-field***,** *resize-type***,** *transform-type* **)
getThumbnailHTML(** *document-field***,** *resize-type***,** *link* **)
getThumbnailHTML(** *document-field***,** *resize-type***,** *transform-type***,** *link* **)
getThumbnailHTML(** *document-field***,** *link* **)**
*document-field***.getThumbnailHTML( )**
*document-field***.getThumbnailHTML(** *width***,** *height* **)**
*document-field***.getThumbnailHTML(** *width***,** *height***,** *resize-type* **)**
*document-field***.getThumbnailHTML(** *width***,** *height***,** *resize-type***,** *transform-type* **)**
*document-field***.getThumbnailHTML(** *width***,** *height***,** *resize-type***,** *link* **)**
*document-field***.getThumbnailHTML(** *width***,** *height***,** *resize-type***,** *transform-type***,** *link* **)**
*document-field***.getThumbnailHTML(** *width***,** *height***,** *link* **)**
*document-field***.getThumbnailHTML(** *resize-type* **)**
*document-field***.getThumbnailHTML(** *resize-type***,** *transform-type* **)**
*document-field***.getThumbnailHTML(** *resize-type***,** *link* **)**
*document-field***.getThumbnailHTML(** *resize-type***,** *transform-type***,** *link* **)**
*document-field***.getThumbnailHTML(** *link* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document for which to generate the thumbnail. If no document is referenced, the result will be null. |
| *width* | The resized width of the thumbnail to be generated. The resulting image may be narrower depending on the dimensions of the original image and the scaling type chosen. If *width* is null, omitted or less than 16 the setting defined in the field configuration will be used. If no value is specified in the field configuration, a value of 56 will be used by default. |
| *height* | The resized height of the thumbnail to be generated. The resulting image may be shorter depending on the dimensions of the original image and the scaling type chosen. If *height* is null, omitted or less than 16 the setting defined in the field configuration will be used. If no value is specified in the field configuration, a value of 56 will be used by default. |
| *resize-type* | Determines how the image will be resized. Thumbnails for non-image documents are pre-generated images based on the document's content type between 16x16 pixels and 56x48 pixels depending on dimensions requested. A list of possible values and their meanings is given in the article titled "*[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations).*" |
| *transformation-type* | Determines how the image will be transformed. Thumbnails for non-image documents cannot be transformed and will result an untransformed images. A list of possible values and their meanings is given in the article titled "*[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations).*" |
| *link* | A boolean value indicating whether the thumbail HTML should include a link to pop-up the original, full-sized document. If *link* is null, true, or omitted a link will be included. If link is false, no link will be included. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7421](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7421) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7461](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7461)

 
