

- replace(...)

---
The replace(...) function has two variations, not counting syntax variations. It creates a copy of a source string with all occurrences of one sub-string replaced with another sub-string. It may either use traditional, literal search-and-replace or do regular expression search-and-replace.

**Syntax:** **replace(** *source-string***,** *target-string***,** *replacement-string* **)** **replace(** *source-string***,** *target-string***,** *replacement-string***,** *useRegEx* **)**
*source-string***.replace(** *target-string***,** *replacement-string* **)**
*source-string***.replace(** *target-string***,** *replacement-string***,** *useRegEx* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-string* | The original String which will be copied and within which the search will take place. |
| *target-string* | The String for which to search. |
| *replacement-string* | The String which will replace any matches found. |
| *useRegEx* | A boolean value which, if true, causes the replacement to use regular expression search and replace instead of searching for literal values. The variation of the regular expression language used is provided by Java and is documented under [Sun Microsystem's Pattern class](http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html). Note that by using regular expressions, capture groups may be used in the replacement-string. These are denoted by a $ followed by a number. When using regular expressions, if either the target-string or replacement-string has incorrect syntax, the result of the function will be null. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7561](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7561) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3741](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3741)

 
