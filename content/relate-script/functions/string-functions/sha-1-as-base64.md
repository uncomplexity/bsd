

- SHA1AsBase64(...)

---
The SHA1AsBase64(...) function has two variations, not counting syntax variations. It is used to encrypt a String using the standard SHA1 encryption algorithm. The resulting bytes are then converted back into a String using a Base64 encoding with the optional URL safe dictionary. When converting the String into bytes prior to encryption, an optional charset may be specified. The default charset is UTF-8.The URL safe Base64 dictionary uses "." in place of "+" and "-" in place of "/". Also, it does not pad the final output to an even multiple of 4 characters using equal signs.

**Syntax:** **SHA1AsBase64(** *input-string* **)
SHA1AsBase64(** *input-string***,** *charset* **)** *input-string***.SHA1AsBase64()**
*input-string***.SHA1AsBase64(** *charset* **)**

| **Parameter** | **Description** |
| --- | --- |
| *input-string* | The String value to be encrypted. |
| *charset* | The charset to use, prior to encryption, when converting the String value into bytes. The default is UTF-8. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___3741](/shared/custompage/custompage.jsp?_event=view&_id=445506___3741) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8901](/shared/custompage/custompage.jsp?_event=view&_id=445506___8901)

 
