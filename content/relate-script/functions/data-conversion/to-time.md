

- toTime(...)

---
The toTime(...) function has four variations, not counting syntax variations. You can convert a String to a Time with optional custom format string. You can also convert a DateTime to a Time with an optional time zone.

**Syntax:** **toTime(** *time-string* **)
toTime(** *time-string***,** *format-string* **)
toTime(** *dateTime* **)
toTime(** *dateTime***,** *timezone-string* **)** *time-string***.toTime()**
*time-string***.toTime(** *format-string* **)**
*dateTime***.toTime()**
*dateTime***.toTime(** *timezone-string* **)**

| **Parameter** | **Description** |
| --- | --- |
| *time-string* | The String value to be converted to a Time value |
| *format-string* | The format string is used to interpret the *time-string*. If omitted the default format is "h:mma" which is the hour then a colon, then the minute, then either "AM" or "PM". For a description of possible *format-string* values refer to the [Java API documentation for SimpleDateFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/SimpleDateFormat.html). |
| *dateTime* | The DateTime value to be converted to a Time value |
| *timezone-string* | The time zone string is used to convert the *dateTime* value to a Time. If omitted, the current user's preferred time zone is used. Any time zone identifier supported by Java is allowed. |


[/shared/custompage/custompage.jsp?_event=view&_id=445506___3481](/shared/custompage/custompage.jsp?_event=view&_id=445506___3481) [/shared/custompage/custompage.jsp?_event=view&_id=445506___4765](/shared/custompage/custompage.jsp?_event=view&_id=445506___4765)

 
