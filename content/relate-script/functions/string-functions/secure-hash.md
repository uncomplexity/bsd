

- secureHash(...)

---
The secureHash(...) function has only one variation, not counting syntax variations. It receives any String value and computes a hash value, which is also of type String. The hash String value will be a relatively short value computed via a secure encryption process. This process will cause the result to change if any part of the original String changes. This is known in technical terms as a message authentication code or MAC. For those interested in the details, the specific encryption process used is called SHA1. The purpose is to determine if data has changed. For instance, imagine a form with ten fields. Let's imagine that four of the fields are critical and the remaining six are less important. What if someone wanted to be notified when any of the four critical fields change, but doesn't want to be bothered when a change only effects the six less important fields. How can the changed fields be identified, since Relate does not provide any way of knowing? The answer is the secureHash(...) function. Here is how it is done: First, create another text field on the form and use the "Field Locking and Hiding" features to make it hidden on the form. Then write a formula that combines the values from each of the four critical fields into a single large String value. Since any type of data can be converted to a String this will work with any type of field. Have the formula compute a secureHash(...) from the combined values and store it into the new hidden text field. Now, whenever the form is saved, the formula can re-compute the combined String value and the secure hash value and, before storing the new result into the text field, the formula can compare the new hash to the previous hash. If the hash values are different then the formula should send the notification. If they are the same, then none of the critical fields have been changed.**Syntax:**
**secureHash(** **string-value** **)**
*string-value***.secureHash()**

| **Parameter** | **Description** |
| --- | --- |
| *string-value* | The String value used to compute the secure hash value or MAC. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3172](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3172) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8921](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8921)

 
