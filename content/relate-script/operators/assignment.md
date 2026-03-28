

- Assignment

---
There are nine assignment operators. Some of them have multiple uses depending on the datatypes to which they apply. They are described below in order of most common usage.**Simple Assignment:** =
The most basic type of assignment takes the value to the right side of the equal sign and assigns it to the variable or field named on the left of the equal sign. If the variable name on the left of the equals does not exist (is not defined), then assigning it a value for the first time creates/defines the variable. For instance,
 x = 4;
assigns the value 4 to the variable x. If x is not already defined, then a new variable, x, is created and given a type of Integer before being assigned the value 4. You cannot normally create a new variable with a value of null, because null does not have a data type so the new variable cannot be fully defined. However, there are some ways that a new variable can be assigned null. It is possible to cast null to be one of the data types that allow casting. Also, you can assign the result of an expression to a new variable and the expression may evaluate to null.

The result of an assignment (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment.**Assignment with concatenate:** +=
Assignment with concatenation is by far the most common use of the += operator. Assignment with concatenation essentially directs appending of a new value to the end of a current piece of text. When building large pieces of text, such as when constructing the body of an e-mail message, it is usually necessary to build up a String piece-by-piece, since doing it in a single operation would be extraordinarily long and complex. So, the following is an example of a fairly common logic sequence:
 fullName = lastName;
 if (lastName != null && firstName != null) fullName += ", ";
 fullName += firstName;
This code snippet creates a full name value, but only puts a comma between the last and first names if both have a value. If either the first or last name is empty, then the comma is omitted.Assignment with concatenation requires a String variable or field on the left side, but can have any type of data on the right side. If a non-String value is concatenated to a String, it is first converted to a String using its normal formatting rules, then appended to the String value.

The result of an assignment with concatenation (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment. **Assignment with add:** +=
Assignment with add retrieves the value on the left of the operator, adds the value on the right, then assigns the result back into the variable or field on the left. It is essentially a shortcut operation which could be written in longer format. For example,
 x += 4;
is equivalent to
 x = x + 4;Assignment with add works for Integer and Float values. It also works for Date, Time and DateTime values when adding a DateDiff. Finally, it can be used to add two DateDiff values.Assign with add works slightly differently with Date, Time and DateTime fields because the result may differ from the result of a normal add. For instance, if you have a date variable, d, and you add 60 to the month field like this:
 d.month += 60;
You will not actually change the month of the year. Instead this will add 5 to the year field since 60 months is equal to 5 years.The result of an assignment with add (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment.**Assignment with subtract:** -=
Assignment with subtract works identically to assignment with add, except it subtracts instead of adding.**Assignment with divide:** /=
Assignment with divide retrieves the value on the left of the operator, divides it by the value on the right, then assigns the result back into the variable or field on the left. It is essentially a shortcut operation which could be written in longer format. For example,
 x /= 4;
is equivalent to
 x = x / 4;Assignment with divide works for a Float value divided by either an Integer or Float. It works for an Integer divided by an Integer, in which case the remainder is discarded. It also works for DateDiff values when divided by an Integer or Float value.The result of an assignment with divide (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment.**Assignment with multiply:** *=
Assignment with multiply works essentially the same as assignment with divide, except it multiplies instead of dividing.**Assignment with mod:** %=
Assignment with mod works essentially the same as assignment with divide, except it only works with Float and Integer values and stores the remainder of the division rather than the quotient.**Assignment with AND:** &=
Assignment with AND retrieves the value on the left of the operator, performs a bitwise or logical AND with the value on the right, then assigns the result back into the variable or field on the left. It is essentially a shortcut operation which could be written in longer format. For example,
 x &= 4;
is equivalent to
 x = x & 4;Assignment with AND works only on Integer and boolean values.The result of an assignment with AND (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment.**Assignment with OR:** |=
Assignment with OR works essentially the same as assignment with AND, except it performs a bitwise or logical OR instead of an AND operation.**Assignment with XOR:** ^=
Assignment with XOR works essentially the same as assignment with AND, except it performs a bitwise or logical XOR instead of an AND operation.**Assignment with left-shift:** <<=
Assignment with left-shift retrieves the value on the left of the operator, left-shifts it by the number of bits specified by the value on the right (filling the empty low bits with 0), then assigns the result back into the variable or field on the left. It is essentially a shortcut operation which could be written in longer format. For example,
 x <<= 4;
is equivalent to
 x = x << 4;Assignment with right-shift works only on Integers.The result of an assignment with left-shift (in the rare case it is used as part of a larger expression) is the value of the variable or field after the assignment.**Assignment with right-shift:** >>=
Assignment with right-shift works essentially the same as assignment with left-shift, except it shifts to the right and propagates the sign-bit.**Assignment with unsigned right-shift:** >>>=
Assignment with unsigned right-shift works essentially the same as assignment with left-shift, except it shifts to the right and fills the empty high bits with 0. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3127](/shared/custompage/custompage.jsp?_event=view&_id=445506___3127) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3163](/shared/custompage/custompage.jsp?_event=view&_id=445506___3163)

 
