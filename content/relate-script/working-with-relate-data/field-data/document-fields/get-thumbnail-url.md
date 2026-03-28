

- getThumbnailURL(...)

---
The getThumbnailURL(...) function has six variations, not counting syntax variations. The result of this function is a String value containing a URL which retrieves the thumbnail of the document referenced by the document field. Optional parameters allow for different thumbnail dimensions and alternate resizing techniques. Although this function is most often used for generating thumbnails it is capable of resizing images to dimensions too large to be rightly called thumbnails. It should be considered a general function to get a resized image, not just thumbnails.

**Syntax:** **getThumbnailURL(** *document-field* **)
getThumbnailURL(** *document-field***,** *width***,** *height* **)
getThumbnailURL(** *document-field***,** *width***,** *height***,** *resize-type* **)
getThumbnailURL(** *document-field***,** *width***,** *height***,** *resize-type***,** *transform-type* **)
getThumbnailURL(** *document-field***,** *resize-type* **)
getThumbnailURL(** *document-field***,** *resize-type***,** *transform-type* **)**
*document-field***.getThumbnailURL( )**
*document-field***.getThumbnailURL(** *width***,** *height* **)**
*document-field***.getThumbnailURL(** *width***,** *height***,** *resize-type* **)**
*document-field***.getThumbnailURL(** *width***,** *height***,** *resize-type***,** *transform-type* **)**
*document-field***.getThumbnailURL(** *resize-type* **)**
*document-field***.getThumbnailURL(** *resize-type***,** *transform-type* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field referencing the document for which you wish to generate the thumbnail. If no document is referenced, the result will be null. |
| *width* | The resized width of the thumbnail to be generated. The resulting image may be narrower depending on the dimensions of the original image and the scaling type chosen. If *width* is null, omitted or less than 16 the setting defined in the field configuration will be used. If no value is specified in the field configuration, a value of 56 will be used by default. |
| *height* | The resized height of the thumbnail to be generated. The resulting image may be shorter depending on the dimensions of the original image and the scaling type chosen. If *height* is null, omitted or less than 16 the setting defined in the field configuration will be used. If no value is specified in the field configuration, a value of 56 will be used by default. |
| *resize-type* | Determines how the image will be resized. Thumbnails for non-image documents are pre-generated images based on the document's content type between 16x16 pixels and 56x48 pixels depending on dimensions requested. A list of possible values and their meanings is given in the article titled "*[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations).*" |
| *transformation-type* | Determines how the image will be transformed. Thumbnails for non-image documents cannot be transformed and will result an untransformed images. A list of possible values and their meanings is given in the article titled "*[Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations).*" |
 [/shared/custompage/custompage.jsp?_event=view&_id=445506___7441](/shared/custompage/custompage.jsp?_event=view&_id=445506___7441) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7462](/shared/custompage/custompage.jsp?_event=view&_id=445506___7462)

 
