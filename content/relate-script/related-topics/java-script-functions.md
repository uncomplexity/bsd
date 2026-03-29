

- JavaScript Functions

---
Most if not all pages in BlueStep have JavaScript on the page.`common.js``common.js` has lots of constants about the page and organization. The constants are set dynamically from the database.

| APP_ID | The ID of the current site. |
| --- | --- |
| APP_ROOT | Currently not used. |
| BASE_STATIC_RESOURCE | The URL to get static content. |
| IMG_ROOT | The URL to get images from, like SVGs. |
| MEDIA_LIBRARY_KEY | The ID of the media library. |
| HELP_MEDIA_LIBRARY_KEY | |
| PAGE_OBJECT_ID | The ID of the current page. |
| USE_GLOBAL_IDS | Indicates whether or not you're on a global/config org. |
| CURRENT_LAYOUT_TYPE | The two BlueStep layouts are HQ and Manage. Currently this value will either be `"MANAGE"` or `null` |
| isLayoutType(string type) | A function to tell you whether the type you pass in is equal to `CURRENT_LAYOUT_TYPE` |
| | |
| PRIMARY_COLOR | |
| PRIMARY_COLOR_HIGH | |
| PRIMARY_COLOR_LOW | |
| SECONDARY_COLOR | |
| SECONDARY_COLOR_HIGH | |
| SECONDARY_COLOR_LOW | |
| ACCENT_1_COLOR | |
| ACCENT_2_COLOR | |
| BODY_COLOR | |
| TIME_OFFSET | |
| sysMillis() | Returns the System time in millis since epoch. |
| currentDateTime() | |
`dom.js``dom.js` contains some helper functions for working with the DOM.

| fixAllSVG([HTMLImageElement[] images]) | Changes any image elements to SVGs, so long as they come from the BlueStep server. This is called on page load, but can be called anytime you add a new SVG in an img tag to the page. The <code>images</code> parameter is optional. |
| --- | --- |
| debounce(Function fn, number time) | Only allows the function to be executed if at least `time` milliseconds has passed since it was last called. E.g., you have an autosuggest on an input field, but it's expensive to process for every letter, so you say only process if they haven't typed for at least 300ms. |
| throttle(Function fn, number time) | Only allows the function to be executed once every `time` milliseconds. E.g., you only want someone to be able to press submit at most once per 500ms. |
`errorreporter.js`Much of the frontend was made before JS methods like `document.querySelector` and even before JQuery. Therefore, there are a lot of custom methods in the system for getting and working with Relate data on the page, most of which are contained in `errorreporter.js`.

| getElementObj(string name) | Returns a `FormElementWrapper` object when looked up by the `name` attribute. |
| --- | --- |
| getValue(string name) | Returns the value of the field. The same as `FormElementWrapper.get()`. |
| setValue(string name, Any value) | Sets the value of the field. The same as `FormElementWrapper.set(value)`. |
| submitForm(string name, string event, string url) | |
| FormValidator (aka form object) | |
| childElements | Object of all the child `FormElementWrapper` objects |
| invalidCount | The number of invalid fields. Form won't submit unless this equals 0. |
| setValidation(string elementName, Function validationFn, boolean required) | Sets an element's validation function. |
| validate() | Validates the form. |
| FormElementWrapper (aka field object) | |
| formObj | The field's `FormValidator` object. |
| setRequired(boolean required) | Set the element as required for when the validator runs. |
| get() | Returns the field's value. The same as `document.querySelector(name).value` |
| reset() | Sets the element to its default value (or checked state if a checkbox). |
| set(Any value) | Sets the field's value. The same as `document.querySelector(name).value = value` |
| setValidation(Function validationFn, boolean required[, boolean alwaysValidate]) | Sets the element's validation function. Examples can be found in `validatebasicnumeric.js`. |
`popup.js``popup.js` has code relating to popups, much of which is old, so the functions aren't included here. If you need a custom popup, the preferred method is to use SweetAlert2 (see below).

| closeWait([boolean refresh]) | Closes the popup. Takes an optional boolean to refresh the page. |
| --- | --- |
| popupWait([string message, string templateHTML, number width, number height]) | Opens a Please Wait popup over the page. All parameters are optional. |
`sweetalert.js``sweetalert.js` is a third party tool that we use for popups on the Manage template. Brief examples are included. See [the documentation](https://sweetalert2.github.io/) for in-depth explanations.

| Swal.fire( 'Just wondering...', 'Where have all the flowers gone?', 'question' ) | Using the title, text, type pattern. |
| --- | --- |
| Swal.fire({ type: 'error', title: 'Oops...', text: 'Something went wrong!', footer: '[Why do I have this issue?](https://bluestepplatformsupport.bluestep.net/shared/admin/sites/)' }) | Using the object constructor. |
| Swal.fire({ title: 'Are you sure?', text: "You won't be able to revert this!", type: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => { if (result.value) { Swal.fire( 'Deleted!', 'Your file has been deleted.', 'success' ) } }) | Using `.then()` to chain Swal modals together. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11781](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11781)

 
