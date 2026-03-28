

- format(...)

---
The format(...) function has five variations, not counting syntax variations, corresponding to the five types of data that it can format. The format function converts numeric values and date/time values into String values using a specific format.

**Syntax:** **format(** *integer-value***,** *numeric-format-string* **)**
**format(** *float-value***,** *numeric-format-string* **)** **format(** *date-value***,** *datetime-format-string* **)
format(** *time-value***,** *datetime-format-string* **)
format(** *dateTime-value***,** *datetime-format-string* **)**
*integer-value***.format(** *numeric-format-string* **)**
*float-value***.format(** *numeric-format-string* **)**
*date-value***.format(** *datetime-format-string* **)**
*time-value***.format(** *datetime-format-string* **)**
*dateTime-value***.format(** *datetime-format-string* **)**

| **Parameter** | **Description** |
| --- | --- |
| *integer-value* | The Integer value to be formatted and converted to a String value. |
| *float-value* | The Float value to be formatted and converted to a String value. |
| *numeric-format-string* | The format string for Integer and Float values determines the format of the result. For a description of possible values refer to the [Java API documentation for DecimalFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/DecimalFormat.html). |
| *date-value* | The Date value to be formatted and converted to a String value. |
| *time-value* | The Time value to be formatted and converted to a String value. |
| *dateTime-value* | The DateTime value to be formatted and converted to a String value. |
| *datetime-format-string* | The format string for Date, Time and DateTime values determines the format of the result. For a description of possible values refer to the [Java API documentation for SimpleDateFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/SimpleDateFormat.html). |
**Example:** To format a float as a currency, displaying negative numbers like $(45.50),
use the format string "$#,##0.00;$(#,##0.00)".


[/shared/custompage/custompage.jsp?_event=view&_id=445506___7601](/shared/custompage/custompage.jsp?_event=view&_id=445506___7601) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8861](/shared/custompage/custompage.jsp?_event=view&_id=445506___8861)

 
