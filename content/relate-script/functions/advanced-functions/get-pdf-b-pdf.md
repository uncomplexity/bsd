

- getPDF(...)B.pdf

---
The getPDF(...) function retrieves a PDF document given its URL. If the document at URL is not a PDF then getPDF(...) will try to convert it to a PDF. The resulting PDF object can be used to inspect and modify the PDF. Currently only form field values within the PDF can be inspected and modified. The result of the getPDF(...) function is a PDF custom object which is described below.**Syntax:** **getPDF(** *url* **)** *url***.getPDF()**

| **Parameter** | **Description** |
| --- | --- |
| *url* | A String value containing the URL of the PDF. If a relative URL is specified (no protocol or domain, just the path and querystring. i.e. starts with a slash) then an attempt will be made to retrieve the PDF using the current user's credentials. This way non-public PDFs which require authentication to view can be retrieved. |
PDF Custom Object

| **Field/Method** | **Description** |
| --- | --- |
| *fields* | An array of form fields within the PDF document. This array is indexed by the names of the fields and the values are PDF Field Custom Objects. |
| *flatten* | A boolean value indicating whether the form fields should be 'flattened' when the PDF is saved. The default is false. If set to true then all form fields will be eliminated and the field values will be written into the PDF as text. This gives the visual appearance when displayed or printed that the form has been filled out, but the fields can no longer be easily accessed and changed programatically. Also, a flattened form cannot be modified by re-filling it out with the PDF viewer. It is a method of locking the form results. |
| *errors* | A read-only String value containing a newline delimited list of error messages. If you are experiencing problems working with PDFs check this field's value to see if an error occured and for help in diagnosing what went wrong. Multiple errors are possible with one error message per line, separated by newline characters. |
| *resetErrors( )* | This function simply resets the *errors* field to null. This allows logic which attempts to correct error conditions to more easily determine if additional errors have occured since the last error was handled. |
| *setFieldValue(...)* | This method or function sets the value of a field within a PDF form. It receives either 2 or 3 String values. The first String value is the name of the field to set. The second String is the value to assign to the field. The third, optional String value is the display value if it should be different from the actual value. For field types such as radio buttons or a drop-down list which have a fixed list of values, the second parameter MUST match one of the existing options unless a display value is also specified. If an incorrect value is received, an error message will be added to the *errors* field. If both the value and display value are specified, then the value/display are added as a possible option. |
| *getFieldValue(...)* | This method retrieves the value assigned to a form field as a String value. It receives as a parameter the name of the field to retrieve. |
| *write(...)* | Writes the modified PDF to a temporary file. The function receives an optional String parameter indicating the filename of the new PDF. If no name is given, then the original name is used. The result of this function is a String value containing the URL of the temporary file. This url may be use to generate a link to the new PDF or it may be passed to the setContentFromURL function of a document field. Of course, you can also pass the temporary URL back to the getPDF function, but this would not be very useful. |
| *append(...)* | Appends the modified PDF to a temporary file. The function receives an optional String parameter indicating the url of the new PDF. If no url is given, then the original url from getPDF() is used. |
PDF Field Custom Object

| **Field/Method** | **Description** |
| --- | --- |
| *value* | A writable String value containing the value in the field. If this field is of a type that has a predefined list of possible values and you attempt to assign a value not in the list, the assignment will be unsuccessful and an error message will be added to the *errors* field of the PDF custom object which this PDF field belongs to. |
| **type** | A read-only String value indicating the type of this field. Possible values are: "Checkbox", "Combobox", "List", "None", "Pushbutton", "Radiobutton", "Signature" and "Text". |
| *possibleValues* | A read-only array value containing the possible values which may be assigned to this field. The indexes of the array are Strings indicating the display value of the matching internal value. If this array contains any entries, the value field will be contrained to hold only null or one of these values. Although, technically, it is possible to have multiple, identical display values with different actual values, this situation is not supported at this time. However, it is not as uncommon to have multiple display values translate to the same actual value, and this situation is supported. |
| *setValue(...)* | This method or function sets the value and display value of the field. It receives 2 Strings. The first String value is the value to assign to the field. The second String value is the display value. If you wish to assign a value to a field with a non-empty *possibleValues* array and the value you wish to assign is not contained in the *possibleValues* array, then you must use this function [or the 3 parameter version of setFieldValue(...) on the PDF custom object] instead of simply assigning a new value to the *value* field. |


| **Field Type** | **Possible Values** |
| --- | --- |
| Text | Any String |
| Checkbox | {Yes or 1} Will only take yes or 1 for checked (yes or 1 depends on the checkbox field used). The opposite would be to not set the field at all. |
| Radio | Any Number {0,1,6,12} (There is no regular sequence. You have to printout possibleValues.) |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11641](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11641) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8741](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8741)

 
