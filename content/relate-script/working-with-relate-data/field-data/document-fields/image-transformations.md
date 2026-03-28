

- Image Transformations

---

| Resize/Scale Options |
| --- |
Example ImageImages can be resized in ten different ways. The following table describes each of these ways. These resizing types are available in several document field functions including, getContent(...), getThumbnailHTML(...) and getThumbnailURL(...). The image at the right is shown scaled using each option as an example. Sometimes different scale options have the same result; this is expected. Certain options behave differently only when given unusual sized images.*Techie information:* Image scaling can be applied to any image that is dynamically served by BlueStep. "Dynamically served" images include those generated from scratch such as a button or barcode and those that have permissions applied such as an uploaded file or biometric field image. This is done with parameters in the query string. Width, height and scale type are specified with __w, __h and __t respectively (that's a double underbar). BOUNDED is the default transformation, and if either width or height is omitted the other is automatically set in a way that makes sense for the transformation type chosen (usually by maintaining aspect ratio).

| **Code** | **Example 100x100** | **Description** |
| --- | --- | --- |
| *BOUNDED* | Example Image | BOUNDED is the is the default resizing mode. A bounded resize reduces the image until both of it's dimensions are less than or equal to the requested dimensions, retaining aspect-ratio. The new image is nearly always smaller than requested in one dimension. Thus it fits within or is bounded by the dimensions specified. If the original is already small enough to fit within the dimensions requested, the result is the same dimension as the original. |
| *CROPPED* | Example Image | CROPPED reduces or stretches an image until one of its dimensions fits within the requested dimensions, then crops the image in the other dimension until it fits. In this mode, an equal amount is cropped from opposite sides to make it fit within the dimensions specified. The result will always be the size requested, regardless of the size of the original. |
| *CROPPED_TL* | Example Image | CROPPED_TL reduces or stretches an image until one of its dimensions fits within the requested dimensions, then crops the image in the other dimension until it fits. In this mode, the top or left portion of the image is retained and the bottom or right portion is discarded to make it fit within the dimensions specified. The result will always be the size requested, regardless of the size of the original. |
| *CROPPED_BR* | Example Image | CROPPED_BR reduces or stretches an image until one of its dimensions fits within the requested dimensions, then crops the image in the other dimension until it fits. In this mode, the bottom or right portion of the image is retained and the top or left portion is discarded to make it fit within the dimensions specified. The result will always be the size requested, regardless of the size of the original. |
| *CROPPED_NS* | Example Image | CROPPED_NS center crops the image to the specified dimension without any stretching or reducing of the image. If the original was smaller than the requested size in one or both dimensions, it will be padded with white. The result will always be the size requested, regardless of the size of the original. |
| *STRETCHED* | Example Image | STRETCHED makes the image fit exactly within the dimensions requested by stretching. It reduces or enlarges the image by a different ratio vertically vs. horizontally, thus changing the aspect ratio of the image and making it appear stretched. The result will always be the size requested, regardless of the size of the original. |
| *PADDED* | Example Image | PADDED works exactly like BOUNDED except that after resizing, the image is padded with white bars in the dimension where it is lacking until it is the exact dimensions requested. The effect is very much like a letter-box movie if padding is needed in the vertical direction. If padding is needed in the horizontal direction then white bars are on each side rather than top and bottom. If the original is smaller than the requested size in both dimensions, it will be padded in both dimensions. The result will always be the size requested, regardless of the size of the original. |
| *STRETCHED_PADDED* | Example Image | STRETCHED_PADDED works exactly like PADDED except when the image is smaller than the specified dimensions. In this case, the image is stretched until at least one of its dimensions is equal to the requested size, then the opposite dimension is padded with white. The result will always be the size requested, regardless of the size of the original. |
| *STRETCHED_BOUNDED* | Example Image | STRETCHED_BOUNDED works exactly like BOUNDED except when the image is smaller than the specified dimensions. In this case, the image is stretched until at least one of its dimensions is equal to the requested size, maintaining aspect ratio. The result will always be the size requested in one dimension, but will usually be smaller in the other dimension. |
| *FITTED* | Example Image | FITTED is a hybrid technique that attempts to choose an ideal resizing technique dependent upon the original image's size versus the requested size. If the original image is larger than the requested size in both dimensions, then CROPPED is used. If the original is smaller in both dimensions, then STRETCHED_PADDED is used. If the original is larger in one dimension and smaller in the other dimension, then CROPPED_NS is used. |


| Transform Options |
| --- |
Images can also be transformed in many ways. The following table describes each of these ways. These transform types are available in several document field functions including, getContent(...), getThumbnailHTML(...) and getThumbnailURL(...). They are also available with custom buttons using the getButtonURL(...) and getButtonHTML(...) functions. The code must be passed to the function. The name cannot be used and is listed here only make the codes more understandable and memorable.*Techie information:* Image transformation can be applied to any image that is dynamically served by BlueStep. "Dynamically served" images include those generated from scratch such as a button or barcode and those that have permissions applied such as an uploaded file or biometric field image. This is done with a parameter in the query string. The transformation code is specified with a __T parameter (a double underbar and capital T).

| **Name** | **Code** | **Example** | **Description** |
| --- | --- | --- | --- |
| *NONE* | *n* | Example: no transform | NONE does not change the orientation of the image. However, if the image is not a JPEG then specifying the NONE transform will convert it to a JPEG. |
| *RIGHT* | *r* | Example: RIGHT transform | RIGHT rotates the image 90° clockwise. |
| *LEFT* | *l* | Example: LEFT transform | LEFT rotates the image 90° counter-clockwise. |
| *UPSIDEDOWN* | *u* | Example: UPSIDEDOWN transform | UPSIDEDOWN rotates the image 180°. |
| *FLIP* | *f* | Example: FLIP transform | FLIP creates a horizontally mirrored image. |
| *INVERT* | *i* | Example: INVERT transform | INVERT creates a vertically mirrored image. |
| *RIGHT_INVERT* | *ri* | Example: RIGHT_INVERT transform | RIGHT-INVERT creates a vertically mirrored image then rotates it 90° clockwise. |
| *LEFT_INVERT* | *li* | Example: LEFT_INVERT transform | LEFT-INVERT creates a vertically mirrored image then rotates it 90° counter-clockwise. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___7521](/shared/custompage/custompage.jsp?_event=view&_id=445506___7521) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7361](/shared/custompage/custompage.jsp?_event=view&_id=445506___7361)

 
