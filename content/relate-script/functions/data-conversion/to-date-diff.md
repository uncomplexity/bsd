

- toDateDiff(...)

---

- The toDateDiff(...) function has two variations, not counting syntax variations. You can convert a String to a DateDiff. You can also convert an Integer to a DateDiff.

**Syntax:** **toDateDiff(** *datediff-string* **)**
**toDateDiff(** *number-of-millis* **)** *datediff-string***.toDateDiff()**
*number-of-millis***.toDateDiff()**

| **Parameter** | **Description** |
| --- | --- |
| *datediff-string* | The String value to be converted to a DateDiff value. DateDiffs have a simple, but flexible String format. The String representation for a DateDiff is the [ISO 8601] extended format "P#Y#M#DT#H#M#S", where "P" means time-period, #Y represents the number of years, #M the number of months, #D the number of days, "T" is the date/time separator, #H the number of hours, #M the number of minutes and #S the number of seconds. The number of seconds can include up to 3 fractional digits representing milliseconds. The String may optionally be preceeded by a minus sign for negative DateDiff values. Also, any of the time units may be omitted entirely. If hours, minutes and seconds are all omitted then the "T" date/time separator may be omitted. Some examples are given in the table below. |
| *number-of-millis* | An Integer whose value is the total number of milliseconds to be included in the new DateDiff value. |

| **DateDiff String Value** | **Description** |
| --- | --- |
| "P12M" | 12 months. This will be normalized to 1 year. |
| "-P6DT24H" | Negative 6 days and 24 hours. This will be normalized to negative 7 days. |
| "PT27.50S" | 27.5 seconds. This will be represented as 27 seconds and 500 milliseconds. |
| "P12MT90M" | 12 months and 90 minutes. This will be normalized to 1 year, 1 hour and 30 minutes. |
| "P90D" | 90 days. The days will not be converted to months since the conversion would not be precise. |
| "P1Y2M3DT4H5M6.007S" | 1 year, 2 months, 3 days, 4 hours, 5 minutes, 6 seconds and 7 milliseconds. |

[/shared/custompage/custompage.jsp?_event=view&_id=445506___3165](/shared/custompage/custompage.jsp?_event=view&_id=445506___3165) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3481](/shared/custompage/custompage.jsp?_event=view&_id=445506___3481)

 
