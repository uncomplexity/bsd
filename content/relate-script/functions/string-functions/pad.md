

- pad(...)

---
The pad(...) function has two variations, not counting syntax variations. It makes a copy of a String value with zero or more characters appended to or prefixing the source-string to produce a value with a specified minimum length.

**Syntax:**
**pad(** *source-string***,** *pad-character***,** *length* **)**
**pad(** *source-string***,** *pad-character***,** *length***,** *prefix* **)**
*source-string***.pad(** *pad-character***,** *length* **)**
*source-string***.pad(** *pad-character***,** *length***,** *prefix* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-string* | The String from which to copy. |
| *pad-character* | The pad character which will be added repeatedly until the desired length is achieved. The pad-character parameter is actually a String value. If a null or empty String value is given then the result is the unaltered *source-string*. If the length of the pad-character String is greater than one then the first charcter in the String is used. |
| *length* | The minimum desired length of the result String. |
| *prefix* | If prefix is true, then the function adds characters at the beginning of the source-string instead of the end. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4183](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4183) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3172](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3172)

 
