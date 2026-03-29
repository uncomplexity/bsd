

- The for/in Loop Statement

---
**Syntax:** **for (** *variable-name* **in** *array-value* **)** body-*statement*
**for (** *variable-name* **,** *variable-name2* **in** *array-value* **)** body-*statement*In the above syntax description, the single body-statement may be replaced with multiple statements by enclosing those statements in a statement block using braces:**{** *statement1***;** *statement2***;** *statement3***;** **}**The variable-name may be the name of an existing variable, or a new variable name.**Description:**
The for/in statement repeatedly executes the body-statement once for each item in the array-value. Before each execution, the first loop variable is assigned the next index value of the array beginning with the first index value and going through all subsequent index values until the last index value is reached. If a second loop variable is given then it is assigned the value in the array corresponding to the index of the first loop variable. Note that the body-statement may never be executed if the array-value is empty. If the array-value has multiple indexes, the first index is used and the second variable is assigned the sub-array. More information, including an example, can be found under [The Array Creation Statement](/relate-script/statements/the-array-creation-statement). Note: the for/in loop is the only looping statement that allows more than 10,000 iterations without using nested loops. [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3132](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3132) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3134](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3134)

 
