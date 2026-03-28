

- toDateTime(...)

---The toDateTime(...) function has eight variations, not counting syntax variations. You can convert a String to a DateTime with optional custom format string and optional time zone. You can also convert separate Date and Time values to a DateTime with an optional time zone. Finally, you can convert an Integer to a DateTime. **Syntax:** **toDateTime(** *datetime-string* **)
toDateTime(** *datetime-string***,** *format-string* **)
toDateTime(** *datetime-string***,** *format-string***,** *timezone-string* **)
toDateTime(** *date***,** *time* **)
toDateTime(** *date***,** *time***,** *timezone-string* **)** **toDateTime(** *millis-since-epoch* **)
toDateTime(** *millis-since-epoch***,** *timezone-string* **)
toDateTime(** *datetime-value***,** *timezone-string* **)**
*datetime-string***.toDateTime()**
*datetime-string***.toDateTime(** *format-string* **)**
*datetime-string***.toDateTime(** *format-string***,** *timezone-string* **)**
*date***.toDateTime(** *time* **)**
*date***.toDateTime(** *time***,** *timezone-string* **)**
*millis-since-epoch***.toDateTime()**
*millis-since-epoch***.toDateTime(** *timezone-string* **)**
*datetime-value***.toDateTime(** *timezone-string* **)**

| **Parameter** | **Description** |
| --- | --- |
| *datetime-string* | The String value to be converted to a DateTime value. |
| *format-string* | The format string is used to interpret the *time-string*. If omitted the default format is "MM/dd/yyyy h:mma" which is the 2-digit month, a slash, the 2-digit day, a slash, the 4-digit year, a space, the hour, a colon, the minute and finally either "AM" or "PM". For a description of possible *format-string* values refer to the [Java API documentation for SimpleDateFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/SimpleDateFormat.html). |
| *timezone-string* | The time zone string is used to convert the *dateTime* value to a Time. If omitted, the current user's preferred time zone is used. Any time zone identifier supported by Java 5 is allowed. |
| *date* | The Date value to be converted to a DateTime value. |
| *time* | The Time value to be converted to a DateTime value. |
| *millis-since-epoch* | The Integer value to be converted to a DateTime value. The number should be the exact number of milliseconds since epoch. Epoch for Relate Script is Jan 1, 1970 at midnight GMT. |
| *datetime-value* | The DateTime value to be converted to another DateTime value at the same moment in time but in a different time zone. |


[/shared/custompage/custompage.jsp?_event=view&_id=445506___3168](/shared/custompage/custompage.jsp?_event=view&_id=445506___3168) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3166](/shared/custompage/custompage.jsp?_event=view&_id=445506___3166)

 
