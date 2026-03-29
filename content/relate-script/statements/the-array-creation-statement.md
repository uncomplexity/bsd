

- The Array Creation Statement

---
**Syntax:** *variable-name* **= new** *result-type* *index-type-list*

The index-type-list is a list of one or more type names expressed in either of two syntaxes (or a mix of both, if the mood suits you):**[** *type-name***,** *type-name***,** *type-name* **]**
or **[** *type-name* **][** *type-name* **][** *type-name* **]****Description:**
The array creation statement creates a new empty array. The array has a result type, and one or more index types. Valid types are: String, Integer, Float, Date, DateTime, Time, DateDiff and Boolean. Note that any of these types may be used as an index type. In many languages this would be called a map, dictionary or sparse array. The firstIndex() and lastIndex() functions, as well as the for/in loop, retrieve the values from the array based on the sorted order of the index values, not based on the order they were added.**Example:**
For the following short program:usHistory = new String[Date];
usHistory[toDate("12/15/1791")] = "Bill of Rights Ratified";
usHistory[toDate("07/04/1776")] = "Independence Day";
usHistory[toDate("06/21/1788")] = "U.S. Constitution is Ratified";
usHistory[toDate("10/19/1781")] = "U.S. Wins Revolutionary War";
outStr = "";
for (date in usHistory) {
outStr += date + " - " + usHistory[date] + "\n";
}Alternatively, the last three lines could be written with the more advanced looping syntax like so:for (date, event in usHistory) {
outStr += date + " - " + event + "\n";
}With either looping syntax result in outStr would be:07/04/1776 - Independence Day
10/19/1781 - U.S. Wins Revolutionary War
06/21/1788 - U.S. Constitution is Ratified
12/15/1791 - Bill of Rights Ratified
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3135](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3135) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3164](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3164)

 
