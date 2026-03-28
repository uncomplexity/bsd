

- Single Entry Forms

---
In formulas that can access fields from multiple forms (all formulas except field formulas) the field's formula id alone is not sufficient to uniquely identify the data in the fields. The fields are accessed by specifying the form identifier, then a period, then the field identifier. So, if the form identifier is "myForm" and the field identifier is "myField", then the field would be accessed as myForm.myField for either reading from or writing to the field. Where do those identifiers come from? The form identifiers are defined on the same page as the formula. The field identifiers are defined when editing the form and its fields. As a help in remembering the field identifiers when editing a formula, the field identifiers are automatically listed adjacent to where the form identifiers are defined.**Example:** Imagine you want to copy a date from one single entry form to another. In the formula you have defined the first form's identifier as "formA" and the second form's identifier as "formB". In both forms the date field has a formula id of "date". To copy the date from formA to formB you would write:formB.date = formA.date; [/shared/custompage/custompage.jsp?_event=view&_id=445506___3843](/shared/custompage/custompage.jsp?_event=view&_id=445506___3843) [/shared/custompage/custompage.jsp?_event=view&_id=445506___6721](/shared/custompage/custompage.jsp?_event=view&_id=445506___6721)

 
