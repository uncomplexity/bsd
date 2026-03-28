

- Errors and Solutions*

---
UNDER CONSTRUCTION. Feel free to contribute, even if it's just putting the error without a solution.General Error Reduction

- **Only make one change at a time when possible.** That way when something goes wrong, you'll know exactly what you altered to elicit the error.
- **Avoid repeating code.** If you have to make a single change in multiple spots, you're more likely to spawn errors.
- **Make self-commenting code.** Code should be easy to read. You'll have a much easier time finding errors if all your variables are of the style `incidentReportText` rather than `incRep`.
- **Check spelling.** Although abasing, can be amazing. Copy paste is suggested.
*Encyclopedia Errorum*Do not consider the Solutions column comprehensive. Your problem could very well require a solution that no one else has implemented before.

| **Error** | **Solutions** |
| --- | --- |
| Cannot find field with matching name for `[DATA-TYPE]` data type. | If you're trying to reference a form formula ID, ensure that you've actually added the form.<br>If the error's landing on a field, look back to where you first define the variable and make sure it's the right one. E.g. you might have for (i, entry in query.get(0).form2) { field1 = entry.field1; ... } <br>And it pops the error because you accidentally put `form2` instead of `form1` and `form2` doesn't contain `field1`. Also dangerous, `form2` contains `field1`. Then it won't throw an error, but you'll be getting the wrong data.<br>**Don't always trust the data type it says.** Example: there are two different `addSearch()` methods, one for Queries/Reports (that takes 4 args) and one for Forms (that takes 3 args). Consider the following two lines: clients.get(0).addSearch(noteType, date, ">=", startDate.toDate()); clients.addSearch(noteType, date, ">=", startDate.toDate()); <br>The first, and not the second, line will give an error, **even though they are both of data type `RecordObject_clients.`** In this case the "solution" is that you can't pass 4 args into the Form `addSearch()` function. |
| Expecting comma or closing parenthesis.<br>Expected literal, identifier, or parenthesized expression. | The unfortunate thing with these is that they don't always reference the relevant line. Nor do they specify what exactly is missing. The thing you can be assured of is that you dropped the punctuation on or before that line. Maybe 200 lines before, but before nevertheless.<br>I'd say the trick here is only changing one thing at a time, so you know exactly where you probably dropped the mark. Another idea is to look in the change history (the colored square in the upper right corner of the inspector). It shows specific line changes between versions. If that's not an option because you haven't saved yet, use another online text comparer (just google "compare text"). Paste your current version and the previous version. |
| Operation cannot work with an undefined variable identifier. | |
| Operation requires assignment-compatible values. Target type `[TYPE1]` actual type is `[TYPE2]`. | You're trying to set an integer as a string. Or a string as a bool. Or worse, some random Relate data type as some other random type. Verify what the data types of the variables involved are. If you can't see an issue on the cited line, do a search for the variable(s) and find where they were declared. |
| Parse failure at line `[LINE]` character `[CHAR]`. | This is often due to a dropped grouping mark. For example, if you opened a multi-line string with two backticks (`html = ``[STRING]`), you might have forgotten to close it. Relate doesn't have built-in errors for all grouper marks (`[], {}, <>, /**/, '', "", ````, etc.`), so it gives a generic parse failure in these cases. You most likely need to look before the cited line. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___11401](/shared/custompage/custompage.jsp?_event=view&_id=445506___11401) [/shared/custompage/custompage.jsp?_event=view&_id=445506___11781](/shared/custompage/custompage.jsp?_event=view&_id=445506___11781)

 
