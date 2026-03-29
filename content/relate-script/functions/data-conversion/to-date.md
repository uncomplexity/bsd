

- toDate(...)

---
The toDate(...) function has four variations, not counting syntax variations. You can convert a String to a Date with optional custom format string. You can also convert a DateTime to a Date with an optional time zone.

**Syntax:** **toDate(** *date-string* **)
toDate(** *date-string***,** *format-string* **)
toDate(** *dateTime* **)
toDate(** *dateTime***,** *timezone-string* **)** *date-string***.toDate()**
*date-string***.toDate(** *format-string* **)**
*dateTime***.toDate()**
*dateTime***.toDate(** *timezone-string* **)**

| **Parameter** | **Description** |
| --- | --- |
| *date-string* | The String value to be converted to a Date value |
| *format-string* | The format string is used to interpret the *date-string*. If omitted the default format is "MM/dd/yyyy" which is a 2-digit month, 2-digit day and 4-digit year separated by slashes. For a description of possible *format-string* values refer to the [Java API documentation for SimpleDateFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/SimpleDateFormat.html). |
| *dateTime* | The DateTime value to be converted to a Date value. |
| *timezone-string* | The time zone string is used to convert the *dateTime* value to a Date. If omitted, the current user's preferred time zone is used. Any time zone identifier supported by Java 5 is allowed. |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7221](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7221) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3168](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3168)

 
