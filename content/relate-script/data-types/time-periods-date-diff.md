

- Time Periods: DateDiff

---
A DateDiff represents a period of time or, as the name implies, the difference between two moments in time. DateDiff values are used heavily in many types of date/time math. You can get a DateDiff as the result of subtracting two Date values, two Time values or two DateTime values. You can also create a DateDiff using the toDateDiff function.DateDiff values are comprised of several fields or parts. All fields can be both read and modified (assuming the entire value of the DateDiff, as a whole, can be modified). They are accessed as dateDiffValue.fieldName. For instance, to get the number of days since date x you would write: (curDate() - x).totalDays

| **Field** | **Data Type** | **Description** |
| --- | --- | --- |
| isNegative | Boolean | Similar to a positive/negative number, dateDiffs can represent a time period going forward or backward in time. Even if isNegative is true, all of the other fields will contain positive values. |
| years | Integer | The number of years in this DateDiff, not including any fractional years |
| months | Integer | The number of months in this DateDiff, not including any full years or fractional months |
| days | Integer | The number of days in this DateDiff, not including any full months/years or any fractional days |
| hours | Integer | The number of hours in this DateDiff, not including any full days/months/years or any fractional hours |
| minutes | Integer | The number of minutes in this DateDiff, not including any full hours/days/months/years or fractional minutes |
| seconds | Integer | The number of seconds in this DateDiff, not including any full minutes/hours/days/months/years or fractional seconds |
| milliseconds | Integer | The number of minutes in this DateDiff, not including any full seconds/minutes/hours/days/months/years |
| totalMillis | Integer | The total number of milliseconds in this DateDiff, including all larger units of time multiplied out into milliseconds |
| totalSeconds | Float | The total number of seconds in this DateDiff including all larger units of time multiplied out into seconds, including fractional seconds |
| totalMinutes | Float | The total number of minutes in this DateDiff including all larger units of time multiplied out into minutes, including fractional minutes |
| totalHours | Float | The total number of hours in this DateDiff including all larger units of time multiplied out into hours, including fractional hours |
| totalDays | Float | The total number of days in this DateDiff including all larger units of time multiplied out into days, including fractional days |
| totalMonths | Float | The total number of months in this DateDiff including all larger units of time multiplied out into months, including fractional months |
| totalYears | Float | The total number of years in this DateDiff, including fractional years |
 It is important to know that when converting months to days and vice-versa, the DateDiff internal logic considers a month to be exactly (365.25 / 12) days long, which is the average lengh of a month in a normal four year period. The internal logic attempts to refrain from doing this conversion, but conversion is sometimes unavoidable. This can result in some rather odd paradoxes. For instance, if you ask how many months and days there are between February 1, 2005 and March 2, 2005. You might consider it more accurate to say 29 days rather than 1 month and 1 day. Exactly which result is returned depends on how the DateDiff is created and which fields you query. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3141](/shared/custompage/custompage.jsp?_event=view&_id=445506___3141) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3143](/shared/custompage/custompage.jsp?_event=view&_id=445506___3143)

 
