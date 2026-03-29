

- charCode(...)

---
The charCode(...) function has four variations, not counting syntax variations. It is used to get the character code or codepoint of a character within a String. A character code, or more formally a codepoint, is the numeric value assigned to each character in a charset.

**Syntax:** **charCode(** *source-string* **)
charCode(** *source-string***,** *position* **)** **charCode(** *source-string***,** *position***,** *charset-name* **)
charCode(** *source-string***,** *charset-name* **)**
*source-string***.charCode()**
*source-string***.charCode(** *position* **)**
*source-string***.charCode(** *position***,** *charset-name* **)**
*source-string***.charCode(** *charset-name* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-string* | The String value containing the character from which the character code will be computed. If null or empty, then the result of the function will be null. |
| *position* | The index of the character within the *source-string* from which the character code will be computed. If omitted or null, the first character (at index 0) will be used. If position is negative, the the index will be computed from the end of the String. Thus, -1 is the position of the last character. If position is out-of-bounds, meaning greater than or equal to the length or less than the negative of the length, then the result of the function will be null. |
| *charset-name* | The name of the charset from which to compute the character code or codepoint. If the charset-name is null or omitted, then the default is Unicode. |
 **Error Results**
There are several conditions which can make it impossible to compute a codepoint for a character. In these cases the function results in a negative number. Different negative result values indicate different problems as described below:

| **Result** | **Description** |
| --- | --- |
| *-1* | The character at the position indicated is a high-surrogate and is the last character in the string. String values in Relate script support full 32-bit unicode. However, the actual characters in a String value are 16-bits in size. To make this work, some unicode characters must be represented as a sequence of two 16-bit characters called a surrogate pair. If the 16-bit character indicated by *position* is the first part of a surrogate pair, known as a high-surrogate, and is positioned at the end of the *source-string* then an error code of -1 is returned. |
| *-2* | The character at the position indicated is a high-surrogate and the next character does not complete the surrogate pair. |
| *-3* | The character at the position indicated does not have a character code value in the charset specified. All charsets except unicode have less than 32-bit character codes. Thus they can only represent some subset of the values possible in unicode. If the unicode character chosen is not a part of the subset of characters that can be represented by the charset chosen, then the error code -3 is returned. |
| *-4* | The charset specified is not a valid charset name, or is not a supported charset. [A list of supported character sets can be found in Sun Microsystem's Java documentation.](http://java.sun.com/javase/6/docs/technotes/guides/intl/encoding.doc.html) |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4764](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4764) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7601](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7601)

 
