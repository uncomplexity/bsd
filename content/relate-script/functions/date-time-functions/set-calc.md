

- set(...)/calc(...)

---
The set(...) and calc(...) functions each have three variations, not counting syntax variations. They apply one or more modifiers in sequence to a Date, Time or DateTime value. This provides a fast and compact format for doing most types of date/time math. Two types of operations are supported at each step: setting the individual fields and adding/subtracting a period of time.The set(...) function *modifies the original* date/time value and also returns as its result the newly computed value. The calc(...) function *copies the date/time value* before doing its work and results in the newly computed value. The set(...) function and calc(...) function behave identically when working with a read-only date/time value.**Syntax:**
**calc(** *date-value***,** *modifiers* **)
calc(** *time-value***,** *modifiers* **)
calc(** *datetime-value***,** *modifiers* **)**
*date-value***.calc(** *modifiers* **)**
*time-value***.calc(** *modifiers* **)**
*datetime-value***.calc(** *modifiers* **)** **set(** *date-value***,** *modifiers* **)
set(** *time-value***,** *modifiers* **)
set(** *datetime-value***,** *modifiers* **)**
*date-value***.set(** *modifiers* **)**
*time-value***.set(** *modifiers* **)**
*datetime-value***.set(** *modifiers* **)**

| **Parameter** | **Description** |
| --- | --- |
| *date-value* | The Date value to be modified |
| *time-value* | The Time value to be modified |
| *datetime-value* | The DateTime value to be modified |
| *modifiers* | A String value containing a sequence of one or more codes which define the modifications to apply. The codes are separated by white-space of any kind (newline, tab, space, etc.). Each code in the sequence may be one of three types: a "set" code, a "period" code or an "easter" code.<br>The word "EASTER" is a valid code. It sets the date to Easter of the year already stored. The Easter code is not case-sensitive, does not work for years prior to the adoption of the Gregorian calendar, and uses the western/Christian calculation.A "period" code has the same format as the String representation of a DateDiff value. This format is fully described in the [toDateDiff(...)](/relate-script/functions/data-conversion/to-date-diff) function.A "set" code has a similar format. It follows the form "S#Y#M#D#O#W#w#E#dT#H#h#A#M#S#m". A better description is: "set" codes begin with a capital S followed by zero or more set-date codes optionally followed by a capital T and one or more set-time codes. Each set-date or set-time code consists of a numeric value followed by a letter-code which indicates what date/time field to set. For instance, the letter code to set the year is Y. A full 'set' code for setting the year to 2000 is "S2000Y". To set the time portion of a DateTime value to exactly midnight you would use the set code "ST0H0M0S0m" which sets the hour-of-day, minute, second and millisecond to zero. The letter-codes for the other date/time fields are listed in a table below. |


- **Letter-Code** **Date Field** **Letter-Code** **Time Field**
- Y Year H Hour of Day--0 is midnight and 23 is 11PM.
- M Month--0 is January, 11 is December h Hour--0 is either midnight or noon. 11 is either 11AM or 11PM.
- D Day of Month--Negative values are counted from the end of the month: -1 is the last day of the month, -2 is next to last, etc. A AM/PM--0 is AM, 1 is PM
- O Day of Week In Month--For the second Tuesday of the month this would be set to 2. Negative values are counted from the end of the month: -1 is the last occurrence of the day of week, -2 is the next to last, etc. M Minute--0 to 59
- W Week of Month--The first week of the month ends with the first Saturday. This works exactly like on a wall calendar: the first row is the first week, the second row is the second week, etc. S Second--0 to 59
- w Week of Year--The first week of the year ends with the first Saturday. The second week begins the day after the first Saturday and goes to the following Saturday. m Millisecond--0 to 999
- E Day of Week--Sunday is 1, Saturday is 7.
- d Day of Year--January 1st is 1. December 31st is 365, or 366 on leap year.
 **Examples:**

| **modifier Value** | **Description** |
| --- | --- |
| "S0M1D" | January 1st (New Year's Day) |
| "S0M3O2E" | The third Monday in January (Martin Luther King Day) |
| "S1M3O2E" | The third Monday in February (Washington's Birthday) |
| "S4M3O7E" | The third Saturday in May (Armed Forces Day) |
| "S4M-1O2E" | The last Monday in May (Memorial Day) |
| "S5M14D" | June 14th (Flag Day) |
| "S6M4D" | July 4th (U.S. Independence Day) |
| "S8M1O2E" | The first Monday in September (Labor Day) |
| "S9M2O2E" | The second Monday in October (Columbus Day) |
| "S10M11D" | November 11th (Veterans Day) |
| "S10M4O5E" | The fourth Thursday in November (U.S. Thanksgiving Day) |
| "S10M4O5E P1D" | The day after the fourth Thursday in November (Day after U.S. Thanksgiving) |
| "S11M25D -P1D" | The day before December 25th (Christmas Eve) |
| "S11M25D" | December 25th (Christmas Day) |
| "S11M-1D" | The last day in December (New Year's Eve) |
| "ST0H0M0S0m" | Midnight |
| "ST11h1A59M59S999m" | Last millisecond of the current day |
| "ST0H0M0S0m -PT0.001S" | Last millisecond of the previous day |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___3170](/shared/custompage/custompage.jsp?_event=view&_id=445506___3170) [/shared/custompage/custompage.jsp?_event=view&_id=445506___4767](/shared/custompage/custompage.jsp?_event=view&_id=445506___4767)

 
