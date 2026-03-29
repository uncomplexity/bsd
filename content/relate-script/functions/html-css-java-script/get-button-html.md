

- getButtonHTML(...)

---
The getButtonHTML(...) function has only three variations, not counting syntax variations. It generates a snippet of HTML, namely an image tag, which will display a dynamically generated button with any text you'd like and one of many predefined styles. It can also optionally rotate the button to make vertical text. The generated image tag will include the button label in the alt attribute and the correct height and width of the button.

**Syntax:** **getButtonHTML(** *label* **)
getButtonHTML(** *label***,** *style* **)
getButtonHTML(** *label***,** *style***,** *transform-type* **)**
*label***.getButtonHTML( )**
*label***.getButtonHTML(** *style* **)**
*label***.getButtonHTML(** *style***,** *transform-type* **)**

| **Parameter** | **Description** |
| --- | --- |
| *label* | The String to use as the label. This may also be a BlueStep id. If so, the name of the object corresponding to the BlueStep id will be used as the button label in place of the id. |
| *style* | The button style to use. Examples of each button type are listed here with the style name on the button face: default, dropdown, nopaddingdropdown, leftArrow, rightArrow, inactive, leftArrowInactive, rightArrowInactive, orange_sq, orange_sq_sm, blueSquareDropdown, BW10pt, BW10ptBold, BW12pt, BW12ptBold, BW14pt, BW14ptBold |
| *transform-type* | An optional transform type which allows for rotated buttons and other types of transforms described in the article titled [Image Transformations](/relate-script/working-with-relate-data/field-data/document-fields/image-transformations). |
[B.buttonHtml()](/jslib/docs/B/classes/bluestep.b.html#buttonhtml "B.buttonHtml()") [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8081](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8081) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8083](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8083)

 
