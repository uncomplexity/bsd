

- getRecentRecords(...)B.optRecentRecords,BaseRecord.optRecentRecords,User.recentRecords

---
The getRecentRecords(...) function allows a user's recent records list to be inspected and modified. When inspecting recent records it is possible to get each record's name, id, unit, record type and current categories. Recent records can be read and manipulated for the current user or for any other user of the system by providing the username or an id from the desired user. The result of the getRecentRecords(...) function is a RecentRecordsList object as described in the second section.**Syntax:** **getRecentRecords( )
getRecentRecords(** *identifier* **)**
*identifier***.getPopInScript( )**

| **Parameter** | **Description** |
| --- | --- |
| *identifier* | The optional identifier is either the username or an id from the user (any form entry belonging to the user) whose recent records will be worked with. If omitted or null the current user's recent records are retrieved. Even anonomous users can have recent records, although they are discarded when the session ends. |
RecentRecordsList Object Properties

| **Field/Method** | **Description** |
| --- | --- |
| *get( index )* | Gets an individual recent record by index in the recent records list. The most recent record is at index 0. The oldest recent record is at size() - 1. The result of this function is a RecentRecord object as described in the next section. |
| **size( )** | A function to get the number of records in the recent records list. The result of this function is an integer value that may be 0 if the list is empty or null if an invalid user identifier was specified when calling getRecentRecords(...). |
| *isEmpty( )* | A function to determine if there are any recent records in the list. The result of this function is a boolean value that is true if the list is empty, false if there are records in the list or null if an invalid user identifier was specified when calling getRecentRecords(...). |
| *add( id )* | This function adds a record to the recent records list given the id of the record or any form entry belonging to the record. The result of the function is true if the given id belongs to an actual record, or null if the id is invalid or if an invalid user identifier was specified when calling getRecentRecords(...). |
| *remove( id )* | This function removes a record from the recent records list given the id of the record or any form entry belonging to the record. The result of the function is true if a matching record was found, false if no record in the list matched the given id, or null if an invalid user identifier was specified when calling getRecentRecords(...). |
| *clear( )* | Removes all recent records from the recent records list. The result of this function is a boolean value that is true if there were records to clear, false if there weren't any, or null if an invalid user identifier was specified when calling getRecentRecords(...). |
RecentRecord Object Properties

| **Field/Method** | **Description** |
| --- | --- |
| *name* | A String value containing the name of the record |
| **unit** | A String value containing the name of the unit where the record resides. |
| *id* | The system id of the record type form entry of the record. |
| *type* | The name of the record type of the record. |
| *categories* | An array value of type Boolean[String] where the index is the name of a category and the boolean value indicates if the record belongs to that category. The list only contains categories that the record is a part of, so the value of any valid index is always true. |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8041](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8041) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4782](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4782)

 
