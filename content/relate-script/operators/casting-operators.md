

- Casting Operators

---
Casting means to force a data value of one type to be another data type. You can cast a Float to an Integer and vice versa, and you can cast anything to a String. The cast to String is implicit in a String concatenation operation. For instance,
 x = (Float)4;
causes x to be assigned the floating-point value 4.0 instead of the Integer value 4. Also,
 y = (Integer)3.75;
causes y to be assigned the Integer value 3 with the digits after the decimal truncated.

Casting to a String is done the same way. This statement,
 z = (String)3 + 4;
assigns the value "34" instead of 7 to the variable z because converting the 3 to a String also makes the + operator a concatenation instead of an addition. The concatenation implicitly casts the 4 to a String as well. So the actual operation performed is "3" + "4".


**Example: Using Casting to do Rounding**
One thing that can be done with casting is rounding to a certain number of decimal places. However, in practice the round(...) function is better. The formula to round the variable x to 2 places after the decimal is:
 x = ((Integer)(x * 100 + 0.5)) / 100.0;
This formula first shifts the decimal two places to the left, then adds 0.5 to do the rounding. It then truncates any digits after the decimal by casting to Integer. After that the decimal is shifted back two places to the right while simultaniously converting back to a Float by dividing by 100.0. However, there is one problem with this formula: it only works correctly for positive numbers. For negative numbers you need:
 x = ((Integer)(x * 100 - 0.5)) / 100.0;

To work for both positive and negative numbers you could do this:
 if (x > 0) {
 x = ((Integer)(x * 100 + 0.5)) / 100.0;
 } else {
 x = ((Integer)(x * 100 - 0.5)) / 100.0;
 }

Or you can us the conditional operator to do this:
 x = ((Integer)(x * 100 + (x > 0 ? 0.5 : -0.5))) / 100.0; [/shared/custompage/custompage.jsp?_event=view&_id=445506___3156](/shared/custompage/custompage.jsp?_event=view&_id=445506___3156) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3162](/shared/custompage/custompage.jsp?_event=view&_id=445506___3162)

 
