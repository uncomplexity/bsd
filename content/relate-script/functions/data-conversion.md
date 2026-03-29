

- Data Conversion

---
Data conversion functions convert one type of data into another type of data. They are as follows:

 [charCode(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7581)
[charVal(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7601)
[format(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3822)
[formatElapsedTime(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8861)
[getFormatter(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8341)
[join(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7241)
[parseFloat(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4182)
[parseInteger(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4181)
[readCSV(...)/readCSVRows(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8561)
[split(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7221)
[toDate(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3165)
[toDateDiff(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3168)
[toDateTime(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3481)
[toTime(...)](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3166)

---
There are many data types in Relate, and Relate will not implicitly convert between them. For example, let's say you have the client define which form you're working with. The options are **Meds**, **Interventions**, and **Surgeries**. You want to put the chosen form into a variable so you can do searching on it. You might think you can do something like formType = // string taken from a user-selected list value
 chosenForm = meds
 if (formType == 'interventions') chosenForm = interventions
 if (formType == 'surgeries') chosenForm = surgeries
 chosenForm.addSearch("date", "<=", curDate())

**This will throw an error because the forms are of different data types.** If Meds had an ID of '123' and Surgeries an ID of '456', their data types would be `ReadOnlyFormEntry_123[Integer]` and `ReadOnlyFormEntry_456[Integer]` respectively. [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3164](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3164) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7581](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7581)

 
