

- Data Conversion

---
Data conversion functions convert one type of data into another type of data. They are as follows:

 [charCode(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___7581)
[charVal(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___7601)
[format(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___3822)
[formatElapsedTime(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___8861)
[getFormatter(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___8341)
[join(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___7241)
[parseFloat(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___4182)
[parseInteger(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___4181)
[readCSV(...)/readCSVRows(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___8561)
[split(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___7221)
[toDate(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___3165)
[toDateDiff(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___3168)
[toDateTime(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___3481)
[toTime(...)](/shared/custompage/custompage.jsp?_event=view&_id=445506___3166)

---
There are many data types in Relate, and Relate will not implicitly convert between them. For example, let's say you have the client define which form you're working with. The options are **Meds**, **Interventions**, and **Surgeries**. You want to put the chosen form into a variable so you can do searching on it. You might think you can do something like formType = // string taken from a user-selected list value
 chosenForm = meds
 if (formType == 'interventions') chosenForm = interventions
 if (formType == 'surgeries') chosenForm = surgeries
 chosenForm.addSearch("date", "<=", curDate())

**This will throw an error because the forms are of different data types.** If Meds had an ID of '123' and Surgeries an ID of '456', their data types would be `ReadOnlyFormEntry_123[Integer]` and `ReadOnlyFormEntry_456[Integer]` respectively. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3164](/shared/custompage/custompage.jsp?_event=view&_id=445506___3164) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7581](/shared/custompage/custompage.jsp?_event=view&_id=445506___7581)

 
