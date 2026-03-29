

- join(...)

---
The join(...) function has three variations, not counting syntax variations. It joins the elements of a single-index array into a String value. It may join just the values in the array, or the indexes and values.

**Syntax:** **join(** *source-array* **)** **join(** *source-array***,** *value-separator* **)
join(** *source-array***,** *value-separator, index-separator* **)**
*source-array***.join(** **)**
*source-array***.join(** *value-separator* **)**
*source-array***.join(** *value-separator, index-separator* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-array* | The original Array value who's elements will be joined If the array is null, the result will be null. |
| *value-separator* | The separator character or characters which will be placed between the values in the source-array. If null or omitted, a comma will be used. It must be noted that the empty-string is a valid separator. |
| *index-separator* | The separator character or characters which will join the index and value of an array element, prior to joining the values using the value-separator. If the index-separator is null or omitted then the index values will not be included in the result. |
 **Example:**
The article titled "[The Array Creation Statement](/relate-script/statements/the-array-creation-statement)" includes an example where dates and events are put into an array and retrieved in sorted order. The for loop in that example could be simplified to a single line by using the join(...) function in place of the for loop. The final 4 lines of that example could be re-written as: outStr = usHistory.join("\n", " - ");

It is also possible to do more complicated joins. For instance, the data from the same example could be joined to form an HTML, bulleted list with bold dates by writing
 outStr = "<ul><li><b>"
 + join(usHistory, "</li><li><b>", "</b> ")
 + "</li></ul>";




[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8341](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8341) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4182](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4182)

 
