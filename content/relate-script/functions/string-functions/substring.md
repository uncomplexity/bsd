

- substring(...)

---
The substring(...) function has two variations, not counting syntax variations. It copies a part of a String value into a new String value. The substring(..) function results in null if any of the following conditions is met:

1. *source-string* is null
2. *start-index* is null
3. The absolute value of *start-index* is greater than the length of *source-string*
4. The position indicated by *end-index* is less than the position indicated by *start-index*
5. The *end-index* is negative and has a greater magnitude than the length of *source-string*
**Syntax:**
**substring(** *source-string***,** *start-index* **)**
**substring(** *source-string***,** *start-index***,** *end-index* **)**
*source-string***.substring(** *start-index* **)**
*source-string***.substring(** *start-index***,** *end-index* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-string* | The String from which to copy. |
| *start-index* | The position where copying will begin. If *start-index* is negative, then it is counted backward from the end of *source-string*. Therefore, -1 is the last character, -2 is the next-to-last and so forth. |
| *end-index* | The position where copying will end. If *end-index* is negative then it is counted backward from the end of *source-string*. Therefore, -1 is the last character, -2 is the next-to-last and so forth. The character at end-index will not be copied into the new String. In other words, copying includes the character at the *start-index* but not the character at the *end-index*. If *end-index* is omitted, is null or is greater than the length of the *source-string*, then copying will continue through the end of the *source-string*. |

| **Example Code** | **Description** |
| --- | --- |
| strVal.substring(0, 5) | Get the first 5 characters of strVal. |
| strVal.substring(-5) | Get the last 5 characters of strVal. |
| strVal.substring(2) | Get all of strVal except the first 2 characters. |
| strVal.substring(0, -2) | Get all of strVal except the last 2 characters. |
| strVal.substring(2, -2) | Get all of strVal except the first 2 characters and the last 2 characters. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___8901](/shared/custompage/custompage.jsp?_event=view&_id=445506___8901) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3207](/shared/custompage/custompage.jsp?_event=view&_id=445506___3207)

 
