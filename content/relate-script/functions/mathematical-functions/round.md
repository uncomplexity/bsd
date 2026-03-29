

- round(...)

---
The round(...) function has two variations, not counting syntax variations. It rounds a number to the nearest whole number or to the nearest multiple of another number. If the roundTo value is an Integer, or if it is omitted, the result is an Integer, otherwise the result is a Float value. If the number being rounded is null the result is null.**Syntax:**
**round(** *number* **)**
**round(** *number***,** *roundTo* **)**
*number***.round(****)**
*number***.round(** *roundTo* **)**

| **Parameter** | **Description** |
| --- | --- |
| *number* | The number to be rounded. |
| *roundTo* | The number which the result should be an even multiple of. If omitted, roundTo defaults to 1, or in otherwords, round to the nearest whole number. For instance if *roundTo* is 100 the result will be an Integer value rounded to the hundreds place. If *roundTo* is 0.01 then the result will be a Float value rounded to 2 places after the decimal. |
**Example:**
Suppose you are writing a timecard formula. You might use the round(...) function to compute the hours worked to the nearest quarter hour like so: hours = (endTime - startTime).totalHours.round(0.25);To compute the pay for that time period, rounded to the nearest penny, you might use: pay = round(hours * hourlyPay, 0.01); [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7541](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7541) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3179](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3179)

 
