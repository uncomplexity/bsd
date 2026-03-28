

- Logical Operators

---
The logical operators do simple boolean operations. They work with Boolean input values and always have a Boolean result. The logical operators are to Boolean values what the arithmetic operators are to number values.**The AND Operator:** &
The AND operation receives two Boolean input values and results in true only if both inputs are true. If either input is null, the result is null. Otherwise the result is false. The following table illustrates:

- **AND** **Input 1**
- **true** **false** **null**
- **Input 2** **true** true false null
- **false** false false null
- **null** null null null
**The OR Operator:** |
The OR operation receives two Boolean input values and results in true if either input is true and the other is not null. If either input is null, the result is null. Otherwise the result is false. The following table illustrates:

- **OR** **Input 1**
- **true** **false** **null**
- **Input 2** **true** true true null
- **false** true false null
- **null** null null null
**The XOR Operator:** ^
The XOR operation receives two Boolean input values and results in true only if one input is true and the other is false. If either input is null, the result is null. If both inputs are true or both inputs are false the result is false. The following table illustrates:

- **XOR** **Input 1**
- **true** **false** **null**
- **Input 2** **true** false true null
- **false** true false null
- **null** null null null
**The Conditional AND Operator:** &&
The Conditional AND operation receives two Boolean input values. If the first input is true, the result is the second input. If the first input is false or null, the first input is the result and the second input is not evaluated. This can noticably reduce computation time if a formula is being executed repeatedly. In the following table please note the small, but very significant change from the standard AND operation:

- **Conditional
AND** **Input 1**
- **true** **false** **null**
- **Input 2** **true** true false null
- **false** false false null
- **null** null false null

**The Conditional OR Operator:** ||
The Conditional OR operation receives two Boolean input values. If the first input is false, the result is the second input. If the first input is true or null, the first input is the result and the second input is not evaluated. This can noticably reduce computation time if a formula is being executed repeatedly. In the following table please note the small, but very significant change from the standard OR operation:

- **Conditional
OR** **Input 1**
- **true** **false** **null**
- **Input 2** **true** true true null
- **false** true false null
- **null** true null null
**The NOT Operator:** !
The NOT operation receives only one Boolean input and returns its opposite. So !true results in false, and !false results in true. If the input is null, then the result is null also. This operation is equivalent to negation for a number value. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3159](/shared/custompage/custompage.jsp?_event=view&_id=445506___3159) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3158](/shared/custompage/custompage.jsp?_event=view&_id=445506___3158)

 
