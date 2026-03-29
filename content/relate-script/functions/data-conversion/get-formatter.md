

- getFormatter(...)

---
The getFormatter(...) function has two variations, not counting syntax variations. It is used to format and parse multiple values to/from a String value. This is specifically designed for localization, but it has a wide array of other uses. The result of getFormatter(...) is a formatter object, described in the second part of this page.Syntax: **getFormatter(** *format-string* **)
getFormatter(** *format-string***,** *time-zone* **)**
*format-string***.getFormatter()**
*format-string***.getFormatter(** *time-zone* **)**

| Parameter | Description |
| --- | --- |
| format-string | The string containing all of the formatting settings. View Java's [MessageFormat](http://docs.oracle.com/javase/6/docs/api/java/text/MessageFormat.html) documentation for more information. The BlueStep version of this function has the additional format type of 'datetime' in addition to 'date' and 'time'. If the format-string is invalid, a message will be available in the error field of the formatter object. Also, the choice format allows String and Boolean values to be chosen and supports null and default values. |
| time-zone | The time zone identifier as in other date/time functions. This defaults to the current user's preferred time zone. |
 The Formatter Object

| Field/Function | Description |
| --- | --- |
| set(pos, value) | Sets the value of one data placeholders. |
| format(...) | Formats the data values using the format-string given. This method optionally receives a list of values to set starting with position 0 and incrementing with each additional parameter included. This function results in a String value. If the String value is null, then something went wrong. Check the error field to find out what happened. |
| parse(mssg) | Parses data values out of mssg and puts them in the data fields of this formatter. The parse values can be retrieved via the get___(pos) functions listed below. This function results in true if the parse was successful and false if there was a failure. To find out what went wrong, check the error field. |
| getBoolean(pos) | Gets the value at the indicated position as a Boolean. If the value at the indicated position is not a boolean, this function will attempt conversion. |
| getDate(pos) | Gets the value at the indicated position as a Date. If the value at the indicated position is not a date/time, this function will result in null. |
| getTime(pos) | Gets the value at the indicated position as a Time. If the value at the indicated position is not a date/time, this function will result in null. |
| getDateTime(pos) | Gets the value at the indicated position as a DateTime. If the value at the indicated position is not a date/time, this function will result in null. |
| getInteger(pos) | Gets the value at the indicated position as an Integer. If the value at the indicated position is not a number, this function will result in null. |
| getFloat(pos) | Gets the value at the indicated position as a Float. If the value at the indicated position is not a number, this function will result in null. |
| getString(pos) | Gets the value at the indicated position as a String. If the value at the indicated position is not a string, this function will attempt to convert the value to a String. |
| error | This is a read-only String value possibly containing a message if a previous operation failed and the error has not been cleared since. |
| clearError( ) | Clears the error field back to null. This can be useful when you wish to use the same formatter object to attempt another operation following an error. |
Examples:Suppose we need a formula to produce the body of an HTML email reminding the user of an appointment. A formatter can make the job both easier to write and easier to read and maintain: body = getFormatter('<html><body>{0} {1}:<p>This email is to notify you of '
 +'your {2} appointment at {3} on {4}</p></body></html>');
 title = info.isMale ? "Mr." : "Ms.";
 sendEmail(
 userEmail,
 'clientcare@bluestep.net',
 'Appointment Reminder',
 body.format(
 title,
 name.last,
 appointment.type,
 appointment.time.format("h:mma"),
 appointment.time.format("MM/dd/yyyy")),
 true
 )

This example can be simplified by letting the formatter do more of the formatting for you instead of just inserting pre-formatted values. For instance the appointment time can be automatically formatted as a time, then a date. By doing this you can also insert the appointment time into your result twice from the *same input*, but with different formats. Finally, the title can be calculated using a choice formatter. body = getFormatter('<html><body>{0,choice,true#Mr.|false#Ms.} {1}:<p>'
 + 'This email is to notify you of your {2} appointment at {3,time} on {3,date}'
 + '</p></body></html>');
 sendEmail(
 userEmail,
 'clientcare@bluestep.net',
 'Appointment Reminder',
 body.format(info.isMale, name.last, appointment.type, appointment.time),
 true
 )

The next example begins to explore the true power of formatters. The primary purpose of formatters is to be able to change format without changing logic and to change format dynamically without writing separate logic for each format. In the following examples we'll look at displaying a list of data in two ways: once in table layout and once as a list with bullet points. Notice that in the code the ONLY difference is the formatters, but the output is very, very different. The examples assume a medication system with prescribed medications and administration records.

- **Example A: table layout** **Possible result:**
- blockFormat = getFormatter('<table><tr>'
 + '<td><b>Med</b></td>'
 + '<td><b>Schedule</b></td>'
 + '<td><b>By</b></td>'
 + '<td><b>Time</b></td></tr>{0}</table>')
 rowFormat = getFormatter('<tr>'
 + '<td>{0}</td>'
 + '<td>{1}</td>'
 + '<td>{2}</td>'
 + '<td>{3,datetime}</td></tr>');

 rows = new String[Integer];
 for (i, mar in mars) {
 med = meds.getById(mar.medId);
 if (mar.adminSig.timestamp != null) {
 rows[i] = rowFormat.format(
 med.name,
 mar.schedAdmin.selectedName,
 mar.adminSig.name,
 mar.adminSig.timestamp
 );
 }
 }
 result = blockFormat.format(rows.join("\n")); | **Med** | **Schedule** | **By** | **Time** |
| --- | --- | --- | --- |
| Enalapril | 8:00AM | Betty Roberts | ﻿﻿12/29/2011 08:05AM |
| Prevacid | 8:00AM | Betty Roberts | 12/29/2011 08:05AM |
| Niaspan | Bedtime | Helen Childs | 12/29/2011 10:27PM |
| Acetaminophen | PRN | Patrick Smith | 12/29/2011 04:42PM |
- **Example B: bullet list layout** **Possible result:**
- blockFormat = getFormatter('<ul>{0}</ul>')
 rowFormat = getFormatter('<li><b>{1} {0}</b> by: {2} ({3,time})</li>');

 rows = new String[Integer];
 for (i, mar in mars) {
 med = meds.getById(mar.medId);
 if (mar.adminSig.timestamp != null) {
 rows[i] = rowFormat.format(
 med.name,
 mar.schedAdmin.selectedName,
 mar.adminSig.name,
 mar.adminSig.timestamp
 );
 }
 }
 result = blockFormat.format(rows.join("\n")); - **8:00AM Enalapril** by: Betty Roberts (08:05AM)
- **8:00AM Prevacid** by: Betty Roberts (08:05AM)
- **Bedtime Niaspan** by: Helen Childs (10:27PM)
- **PRN Acetaminophen** by: Patrick Smith (04:42PM)
- **Example C:** either layout based on user preference
- blockStr = '<ul>{0}</ul>'
 rowStr = '<li><b>{1} {0}</b> by: {2} ({3,time})</li>';
 if (user.prefs.likesTables) {
 blockStr = '<table><tr>'
 + '<td><b>Med</b></td>'
 + '<td><b>Schedule</b></td>'
 + '<td><b>By</b></td>'
 + '<td><b>Time</b></td></tr>{0}</table>'
 rowStr = '<tr>'
 + '<td>{0}</td>'
 + '<td>{1}</td>'
 + '<td>{2}</td>'
 + '<td>{3,datetime}</td></tr>';
 }
 blockFormat = getFormatter(blockStr)
 rowFormat = getFormatter(rowStr);

 rows = new String[Integer];
 for (i, mar in mars) {
 med = meds.getById(mar.medId);
 if (mar.adminSig.timestamp != null) {
 rows[i] = rowFormat.format(
 med.name,
 mar.schedAdmin.selectedName,
 mar.adminSig.name,
 mar.adminSig.timestamp
 );
 }
 }
 result = blockFormat.format(rows.join("\n"));When using formatters with Javascript, there are several issues that may arise with embedded brace characters or single-quotes. Since Javascript generally contains braces and braces are also used to designate data markers within the format string, you need to quote the parts of your static string that contain braces using single-quotes. Anything in single-quotes is automatically treated as literal and no data markers will be detected. The single-quotes are removed during formatting. So this leads to the second problem, what if you really wanted a single-quote? A single-quote is written as a double single-quote. During formatting one of the quotes is removed leaving a single single-quote. The doubling rule applies whether the single-quote is within a quoted literal section or outside a quoted literal section. In the following example, javascript is used inside a format string with some embedded data markers, and of course single-quotes. Also, this example uses the multi-line string syntax with double acute characters to begin/end the String. reportScript = scriptTag(``'
 function doAJAX(hideWait) {
 if (!hideWait) $(''#nursingSummary'').html("Working... Please Wait<br>&nbsp;");
 $.post("/data/tarreport", {careGroup: this.get(), nav: '"{0}", unit: "{2}"'}, function(data) {
 $("#nursingSummary").html(data);
 doTimer();
 }, "html");
 return false;}
 '``);

The sections highlighted in yellow are the quoted literals containing brace characters that are a part of the JavaScript, not the format string. On line three the first embedded JavaScript string uses single-quotes and therefore must have double single-quote characters (''#nursingSummary'') when used within a format string.

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8861](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8861) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7241](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7241)

 
