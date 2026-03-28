

- Dates and Times

---
In Relate Script, Date, Time and DateTime are three separate and distinct types. A DateTime differs significantly from independent Date and Time values in that it represents an exact moment in time which must be interpreted via a time zone. Without translation into a time zone value, DateTime values have no meaningful or useful function. In other words, a Date has the same day, month and year values regardless of where in the world you are. A Time has the same hour, minute and second values no matter who is looking at it. A DateTime, on the other hand, will have an hour value that is three hours different if users on the U.S. east coast and west coast each check the value. Even the day, month and year can change depending on the time zone of the person asking. For instance 11:00pm New Year's Eve 2005 in Los Angeles is 2:00am New Year's Day 2006 in Orlando.Date, Time and DateTime values are comprised of a number of fields or parts. Except where otherwise noted, all fields are of the Integer type and all fields can be both read and modified (assuming the entire value, as a whole, can be modified). They are accessed as dateValue.fieldName. For instance, to get the current year you would use: curDate().year

| **Field** | **Applies To** | **Description** |
| --- | --- | --- |
| year | Date, DateTime | The 4 digit year |
| month | Date, DateTime | The month of the year, in which January is 0 and December is 11. I know, it's weird. |
| date | Date, DateTime | The day of the month |
| dayOfYear | Date, DateTime | The day of the year. For instance Feb 1 is the 32nd day of the year and Dec 31 is the 365th day of the year except on leap-year when it is the 366th. |
| dayOfWeek | Date, DateTime | The day of the week, assuming Sunday is 1 and Saturday is 7. |
| dayOfWeekInMonth | Date, DateTime | The occurance of the day of the week in the current month. This is used in calculating dates such as the second Thursday of the month or the fourth Saturday of the month. Setting this field to a negative value causes it to count back from the end of the month. So if the day of the week is Saturday and you set dayOfWeekInMonth to -1, the result will be the last Saturday of the month. |
| weekOfYear | Date, DateTime | The week of the year where January 1 is always in the first week, and the second week starts with the first Sunday after January 1 and so forth. |
| weekOfMonth | Date, DateTime | The week number within the current month. This corresponds to the weeks shown on a standard wall calendar where the first row is the first week, the second row is the second week and so on. |
| hour | Time, DateTime | The hour of the morning or afternoon. Midnight and noon are both 0. Other hours of the day are as most people normally think of them. |
| isAM | Time, DateTime | A Boolean field indicating whether it is AM or not. |
| hourOfDay | Time, DateTime | The hour of the day on a 24 hour clock. Midnight is 0 and 11PM is 23. |
| minute | Time, DateTime | The minute within the hour (0-59) |
| second | Time, DateTime | The second within the minute (0-59) |
| millisecond | Time, DateTime | The millisecond within the second (0-999) |
| timeInMillis | DateTime | The number of milliseconds since January 1, 1970 12:00AM GMT. This is useful for certain types of date math. |
| timeZone | DateTime | A String value containing the ID of the timezone used when representing the DateTime value. Any time zone identifier supported by Java 6 is possible. |
To do math with dates, either perform operations on the individual fields or you can use DateDiff values. The operations available are discussed under the arithmetic operators.There are also several functions available for working with dates and times. The functions can be categorized into two groups: 1) those used for getting the current date and/or time and 2) those used to create a date and/or time from another type of data (for instance, from a piece of text containing a date). These functions are discussed in the section on [Functions](/relate-script/functions). [/shared/custompage/custompage.jsp?_event=view&_id=445506___3140](/shared/custompage/custompage.jsp?_event=view&_id=445506___3140) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3142](/shared/custompage/custompage.jsp?_event=view&_id=445506___3142)

 
