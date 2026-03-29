

- getDefaultPath(...)

---
The getDefaultPath(...) function has two variations, not counting syntax variations. When the default path includes a date-dependent part an option date can be passed in, corresponding to the five types of data that it can format. The format function converts numeric values and date/time values into String values using a specific format.

**Syntax:**
**getDefaultPath(** *document-field* **)
getDefaultPath(** *document-field***,** *date* **)**
*document-field***.getDefaultPath(** **)**
*document-field***.getDefaultPath(** *date* **)**

| **Parameter** | **Description** |
| --- | --- |
| *document-field* | The document field from which to retrieve the default path. |
| *date* | A DateTime or Date value indicating for what date the default path should be generated. If the date is null or omitted, creation timestamp of the currently referenced document is used. If there is no document referenced by the document field, then the current date and time is used. This parameter will only have effect if the default path settings defined in the document field configuration include a date-specific rule. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7401](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7401) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7441](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7441)

 
