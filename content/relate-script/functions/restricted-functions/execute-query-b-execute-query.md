

- executeQuery(...)B.executeQuery

---
The executeQuery(...) function executes a custom SQL query defined in Org Admin->Super. It results in an array of type String[Integer, String]. The first row of the result set is returned at index 1 with the column labels as the second array index and the row values, converted to strings by calling ResultSet.getString(...), as the array value. If an error occurs there will be a message in the array at index [-1, "ERROR"] indicating what went wrong. Because it's a restricted function, it requires the formula or merge report to contain a fixed id.

**Syntax:** **executeQuery(** *id***,** *params...* **)** **id.executeQuery(** *params...* **)**

| **Parameter** | **Description** |
| --- | --- |
| *id* | The id of the custom query to be executed. |
| *params...* | A list of parameters to pass to the custom query. The number of parameters and the types of the parameters are defined by the custom query. Possible parameter types which may be used in a custom query are: BYTE, SHORT, INT, LONG, FLOAT, DOUBLE, VARCHAR, ORACLECLOB, DATE, TIME, TIMESTAMP, BOOLEAN, RAW and SCHEMA. Arguments passed are converted to their SQL specific types via BeanUtil and internal conversions. For instance, TIMESTAMP values are first converted to Calendar values via BeanUtil, then to java.sql.TimeStamp values internally. All parameters have null value logic and are set via PreparedStatement setType() methods (where 'Type' is the actual type name) except RAW and SCHEMA. These two types are set via QueryString by calling setRawString() and setSubject() respectively. The two special types are set beginning from the last occurance and preceeding backward to the first, eliminating the parameters from the list as it goes thus preserving correct indexing. Then remaining parameters are set via PreparedStatement, first to last. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8161](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8161) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9502](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9502)

 
