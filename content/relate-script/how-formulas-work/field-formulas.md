

- Field Formulas

---
Field formulas have a number of unique properties which deserve attention. Field formulas have read and write access to all the other fields on the same form. Even if they are on a multi-entry form, they have access to only one entry during any given execution. The upside to this is that field formula always work in a predictable manner on a predictable set of data. Field formulas execute the same way on every entry in every record.Also, field formulas can be told to run immediately on all existing records. This can be handy when adding a new calculated value to an existing form. When running field formulas on all existing forms, the normal [8 step edit process](/relate-script/how-formulas-work/the-8-step-edit-process) is not applied, so only only the field formulas run.Field formulas are unique in the way they access data. Because there is always exactly one form and one entry, no form id is required. Therefore, fields values are accessed using their formula id alone with no extra coding required.In field formulas only, a special rule applies for very simple formulas with three or less statements: if the field where the formula is defined is not assigned a value by the formula, then the result of the final statement will be assigned to the field if that result is of the appropriate type. So for a field with a formula identifier of x
 x = 3.1415 * 4 * 4
is equvalent to simply
3.1415 * 4 * 4 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3844](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3844) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8621](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8621)

 
