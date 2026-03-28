

- parseInteger(...)

---The parseInteger(...) function has three variations, not counting syntax variations. It is used to convert a String to an Integer with an optional custom format string or radix.
**Syntax:** **parseInteger(** *number-string* **)
parseInteger(** *number-string***,** *format-string* **)** **parseInteger(** *number-string***,** *radix* **)**
*number-string***.parseInteger()**
*number-string***.parseInteger(** *format-string* **)**
*number-string***.parseInteger(** *radix* **)**

| **Parameter** | **Description** |
| --- | --- |
| *number-string* | The String value to be converted to a Integer value |
| *format-string* | The format string is used to interpret the *number-string*. If omitted, the function expects a String value containing only digits. If the *number-string* value is null, empty or does not match the format string, the result will be null. For a description of possible *format-string* values refer to the [Java API documentation for DecimalFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/DecimalFormat.html). |
| *radix* | The radix, or base, is used when converting numbers expressed in a different base, such as hexidecimal (base 16), octal (base 8) or binary (base 2) format. If omitted, the default is base 10. For digits in bases beyond 10, the letters of the Roman alphabet are used (case-insensitive). If the *number-string* value is null, empty or contains characters which are not valid digits under the given radix, the result will be null. |

Note: radix does not default to base 10. [/shared/custompage/custompage.jsp?_event=view&_id=445506___4182](/shared/custompage/custompage.jsp?_event=view&_id=445506___4182) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8561](/shared/custompage/custompage.jsp?_event=view&_id=445506___8561)

 
