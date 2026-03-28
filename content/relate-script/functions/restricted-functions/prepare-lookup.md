

- prepareLookup(...)

---
The prepareLookup(...) function assists in creating a searchable column to be used with lookup services. Although the prepareLookup(...) function is not actually a restricted function, its sole purpose is to assist in composing SQL queries. Thus it is useless without the executeQuery(...) method which is, obviously, a restricted function. The function receives a String to be formatted, and optionally a boolean value which indicates whether the search column is being populated (insert query) vs. searched (like clause of a select query). Mostly, the function just capitalizes the letters and removes punctuation. However, it also expands certain common abbreviations: The ampersand (&) character is expanded to "AND". Also "w/" is expanded to "WITH" and "w/o" is expanded to "WITHOUT". Finally, "lt side" and "rt side" are expanded to "LEFT SIDE" and "RIGHT SIDE" respectively. More expansions will be added as needed. If preparing a searchable value, words are separated with spaces. If preparing a 'like' clause words are separated with a percent character, and additional percent characters are prepended and appended to form a "contains" query. **Syntax:** **prepareSearch(** *searchStr* **)
prepareSearch(** *searchStr***,** *prepareLike* **)**
*searchStr***.prepareSearch( )**
*searchStr***.prepareSearch(** *prepareLike* **)**

| **Parameter** | **Description** |
| --- | --- |
| *searchStr* | The string value to be formatted. |
| *prepareLike* | The optional boolean indicating whether the value will be used in a SQL 'like' clause. If any value other than "true" the function prepares a value to insert into the table column. |
**Example:** [/shared/custompage/custompage.jsp?_event=view&_id=445506___7321](/shared/custompage/custompage.jsp?_event=view&_id=445506___7321) [/shared/custompage/custompage.jsp?_event=view&_id=445506___11901](/shared/custompage/custompage.jsp?_event=view&_id=445506___11901)

 
