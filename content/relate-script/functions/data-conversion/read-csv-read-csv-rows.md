

- readCSV(...)/readCSVRows(...)

---
The readCSV(...) and readCSVRows(...) functions are used read data in a "comma separated values" format (CSV) or other related format such as tab delimited values. These data formats are used to represent data in rows and columns such as a spread sheet or a single database table. The readCSV(...) function returns the rows index numerically and the columns index by names derived from the first row. Therefore, the data type of the result would be String[Integer, String]. The readCSVRows(...) function treats the first row like all the others and indexes both the rows and columns numerically. The data type of the result would be instead String[Integer, Integer]. Examples are given at the bottom of this article. **Syntax:**
**readCSV(** *input* **)**
**readCSV(** *input***,** *charset* **)**
**readCSV(** *input***,** *charset***,** *fieldDelimiter* **)**
**readCSV(** *input***,** *charset***,** *fieldDelimiter***,** *textDelimiter* **)**
*input***.readCSV( )**
*input***.readCSV(** *charset* **)**
*input***.readCSV(** *charset***,** *fieldDelimiter* **)**
*input***.readCSV(** *charset***,** *fieldDelimiter***,** *textDelimiter* **)**
**readCSVRows(** *input* **)**
**readCSVRows(** *input***,** *charset* **)**
**readCSVRows(** *input***,** *charset***,** *fieldDelimiter* **)**
**readCSVRows(** *input***,** *charset***,** *fieldDelimiter***,** *textDelimiter* **)**
*input***.readCSVRows( )**
*input***.readCSVRows(** *charset* **)**
*input***.readCSVRows(** *charset***,** *fieldDelimiter* **)**
*input***.readCSVRows(** *charset***,** *fieldDelimiter***,** *textDelimiter* **)**

| **Parameter** | **Description** |
| --- | --- |
| *input* | A String value containing either the URL of a file or the full CSV document. If the input value does not contain a newline character, it is treated as a URL. If it does contain a newline, it is treated as a CSV document. |
| *charset* | An optional String value containing the name of a charset. Any standard charset suppported by Java is allowed. If this parameter is omitted or null, the system will assume some form of unicode charset and will attempt to figure out if it is UTF-8 or UTF-16 by looking for a BOM (byte order mark) or a pattern of alternating zero bytes which hint at a 16 bit charset. If you are only using standard English language characters and puctuation then this parameter will seldom be useful since nearly all charsets treat these characters identically. |
| *fieldDelimiter* | An optional String value containing the field delimiter for CSV this is a comma for tab delimited files this is a tab. Other delimiters are possible but rare. The default is a comma if this parameter is omitted, null or empty. If a String with more than one character is given, the first character is used. |
| *textDelimiter* | An optional String value containing the text delimiter. CSV and related formats generally use a double-quote character. Any values which need to include special characters such as the field delimiter (comma, tab, etc.) or the line delimiter (always a newline) must be quoted by including the text delimiter at the beginning and end of the value. GEEK NOTE: If the text delimiter itself needs to be included in a quoted value, then it is simply repeated. So, for instance, with standard CSV delimiters an English sentence with a quote in it might be encoded in CSV as "When she exclaimed, ""Geeks rule!,"" all my registers jumped to max-int.". (Hey, I warned you this was a geek note.) |
**Example:**
Assume a CSV file exported from a spreadsheet like this one:

| First | Last | Birthday |
| --- | --- | --- |
| Betsy | Ross | 01 - Jan - 1735 |
| Alexander | Hamilton | 11 - Jan - 1755 |
| Benjamin | Franklin | 17 - Jan - 1706 |
| Daniel | Webster | 18 - Jan - 1782 |
If we assume the CSV document is available on the internet at http://somedomain.com/birthdays.csv and we want to read it and convert it to a list on an html page we could write: rows = readCSV("http://somedomain.com/birthdays.csv");
 out = "<ul>";
 for (i, cols in rows) {
 out += "<li>" + cols["First"] + " " + cols["Last"] + ": " + cols["Birthday"] + "</li>";
 }
 out += "</ul>";

The out variable now contains an HTML snippet that looks like this:

- Betsy Ross: 01 - Jan - 1735
- Alexander Hamilton: 11 - Jan - 1755
- Benjamin Franklin: 17 - Jan - 1706
- Daniel Webster: 18 - Jan - 1782
The same data could be read with the readCSVRows(...) as follows: rows = readCSVRows("http://somedomain.com/birthdays.csv");
 out = "<ul>";
 for (i, cols in rows) {
 out += "<li>" + cols[0] + " " + cols[1] + ": " + cols[2] + "</li>";
 }
 out += "</ul>";

The out variable now contains an HTML snippet that looks like this:

- First Last: Birthday
- Betsy Ross: 01 - Jan - 1735
- Alexander Hamilton: 11 - Jan - 1755
- Benjamin Franklin: 17 - Jan - 1706
- Daniel Webster: 18 - Jan - 1782


[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4181](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4181) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7221](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7221)

 
