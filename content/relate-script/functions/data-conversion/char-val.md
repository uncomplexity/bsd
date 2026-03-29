

- charVal(...)

---
The charVal(...) function has two variations, not counting syntax variations. It is used to get a character given a character code or codepoint value. A character code, or more formally a codepoint, is the numeric value assigned to each character in a charset.

**Syntax:** **charVal(** *character-code* **)
charVal(** *character-code***,** *charset-name* **)** *character-code***.charVal()**
*character-code***.charVal(** *charset-name* **)**

| **Parameter** | **Description** |
| --- | --- |
| *character-code* | The integer value containing the character code or codepoint of the character to be computed. If *character-code* is null, the result of the function will be null. |
| *charset-name* | The name of the charset from which to compute the character value. If the charset-name is null or omitted, then the default is Unicode. |
 **Error Results**
There are several conditions which can make it impossible to compute a character value from a character code. In these cases the function result is a message indicating what problem occured.

| **Result** | **Description** |
| --- | --- |
| *"INVALID_CHARACTER"* | The character code given does not represent a valid character in the charset chosen. For instance, negative numbers and numbers greater than the size of the charset will have this result. |
| *"INVALID_CODEPOINT"* | The character code given does not represent a valid character in Unicode. Certain ranges of codepoints are marked unused in the Unicode specification. Also negative numbers and numbers greater than the maximum value of a unsigned 32-bit integer will have this result when no charset is chosen. |
| *"INVALID_CHARSET"* | The charset specified is not a valid charset name, or is not a supported charset. [A list of supported character sets can be found in Sun Microsystem's Java documentation.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html) |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7581](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7581) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3822](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3822)

 
