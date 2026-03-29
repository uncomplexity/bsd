

- compareToIgnoreCase(...)

---
The compareToIgnoreCase(...) function has only one variation, not counting syntax variations. It compares two String values, ignoring case. If *stringA* is greater than *stringB* the result will be a positive number. The function will have a negative result if *stringA* is less than *stringB*. If *stringA* is equals to *stringB* ignoring case then the result will be 0.When simply comparing two Strings using the normal comparative operators, they are compared using character-code order, which means upper-case letters are "less than" lower-case letters. This function allows users to compare pieces of text more like humans usually do, where capital letters are equivalent to non-capital letters.

**Syntax:**
**compareToIgnoreCase(** *stringA***,** *stringB* **)**
*stringA***.compareToIgnoreCase(** *stringB* **)**

| **Parameter** | **Description** |
| --- | --- |
| *stringA* | The first String value to be compared. |
| *stringB* | The second String value to be compared |

| **Example Code** | **Description** |
| --- | --- |
| strA.compareToIgnoreCase(strB) == 0 | Results in true if strA is equal to strB ignoring case. |
| strA.compareToIgnoreCase(strB) != 0 | Results in true if strA is not equal to strB ignoring case. |
| strA.compareToIgnoreCase(strB) > 0 | Results in true if strA is greater than strB ignoring case. |
| strA.compareToIgnoreCase(strB) < 0 | Results in true if strA is less than strB ignoring case. |
| strA.compareToIgnoreCase(strB) >= 0 | Results in true if strA is greater than or equal to strB ignoring case. |
| strA.compareToIgnoreCase(strB) <= 0 | Results in true if strA is less than or equal to strB ignoring case. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4765](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4765) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11801](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11801)

 
