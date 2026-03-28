

- Date/Time Fields

---
Date/time fields hold a date, a time or both. These are three distict data types in Relate Script, so changing the format can actually break formulas. Most of the settings for date/time fields are generic settings that apply to many field types. The only real differences are in the format and related options.FormatA date/time field may have three different formats. The maximum allowable value may also be restricted to prior-to-now.

| **Format/Setting** | **Description** |
| --- | --- |
| Date | The field will store a date. Dates do not have time zone and are display the same for all users. |
| Time | The field will store a time. Times do not have time zone and are display the same for all users. |
| Date/Time | The field will store a date and a time. Date/time values do have time zone awareness. They will display differently for users with different time zone settings. Date/time values are always stored internally in Mountain Standard Time which does not observe daylight saving time. This allows any point in time to be accurately recorded, even the extra hour that is repeated in the middle of the night when daylight saving time ends. However, actually specifying which 1am-to-2am is recorded requires Relate Script. |
| Maximum | There is only one allowable maximum: the current date/time. The maximum may be applied by checking the box. It should be noted that this doesn't work well for time-only fields, but it does function. The big problem is that time, isolated from the date, is cyclic. If an entry is made late in the day using the current time, then edited the following morning the user will be unable to save without changing the time to an earlier time. This is because "current" time during the edit is much earlier that the "current" time during creation. With dates and date/time values this is not a problem because they alway progress forward without cycling (excluding the hour after daylight saving time ends). Athough individual components of dates and date/times do cycle, the date or date/time as a whole does not cycle. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___8282](/shared/custompage/custompage.jsp?_event=view&_id=445506___8282) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8284](/shared/custompage/custompage.jsp?_event=view&_id=445506___8284)

 
