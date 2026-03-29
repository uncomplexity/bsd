

- formatElapsedTime(...)

---
The formatElapsedTime(...) function has four variations, not counting syntax variations, corresponding to the two types of data that it can format plus a short/long format option. The format function converts Integer values and DateDiff values into String values indicating elapsed time.Syntax: **formatElapsedTime(** *integer-value* **)
formatElapsedTime(** *datediff-value* **)
formatElapsedTime(** *integer-value***,** *abbrev* **)
formatElapsedTime(** *datediff-value***,** *abbrev* **)**
*integer-value***.formatElapsedTime( )**
*datediff-value***.formatElapsedTime( )**
*integer-value***.formatElapsedTime(** *abbrev* **)**
*datediff-value***.formatElapsedTime(** *abbrev* **)**

| **Parameter** | **Description** |
| --- | --- |
| *integer-value* | An Integer value representing elapsed milliseconds to be formatted and converted to a String value. |
| *datediff-value* | The DateDiff value to be formatted and converted to a String value. |
| *abbrev* | A boolean value indicating whether abbreviated units of measure should be used. The default is true. |
**Example:** To display the time elapsed since a particular timestamp use: formatElapsedTime(curDateTime() - timestamp);


[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3822](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3822) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8341](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8341)

 
