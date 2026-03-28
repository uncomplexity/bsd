

- getUserData(...)B.sessionData,User.userData

---
The getUserData(...) function is used to store and retrieve information in a user's account preferences or in the current session. Only the data added by formula can be retrieved or stored by formula. In other words, this will not allow access to any session or user data stored and used by the BlueStep platform software. Only String data may be stored. String values are stored by name. Multiple values can be stored under the same name in a list. Special functions are provided to allow each list of Strings to be used as a stack, queue or standard list. Special functions are also provided for storing and retrieving a single value when a list is not needed.Syntax:
**getUserData( )
getUserData(** *userData* **)**
**getUserData(** *userName* **)**
*userData***.getUserData( )**
*userName***.getUserData( )**

| **Parameter** | **Description** |
| --- | --- |
| *userData* | If false retrieves the http session data (Expires when http session expires). If true, null or omitted retrieves the current user's state data which is saved periodically to the database. |
| *userName* | The username of the user who's data will be retrieved. |**User Data Object**

| **Field/Function** | **Description** |
| --- | --- |
| *get(name) getFirst(name)* | Gets the first value stored for the given name. |
| *getLast(name)* | Gets the last value stored for the given name. |
| *removeFirst(name)* | Gets the first value stored for the given name and removes it from the list. |
| *removeLast(name)* | Gets the last value stored for the given name and removes it from the list. |
| *clear(name)* | Removes all values stored for the given name and results in true if this caused a change to the values stored. |
| *isEmpty(name)* | Results in true if there are no values stored for the given name |
| *removeIndex(name, index)* | Removes the a value at the given index from the list of values stored for the name given. The result of this function is the value removed. |
| *remove(name, value)* | Removes the value given from the list of values stored for the name given. The result of this function is true if the value was found and removed successfully. |
| *add(name, value, expire)* | Adds a value to the listed stored for the given name. The expire parameter is an optional DateTime value which determines when the list of values stored under the given name will expire. If no expiration is given and no values have been previously stored under the name, then the default expiration is one week from the current date/time. The result of this function is true if the value is successfully stored. |
| *set(name, values, expire)* | Clears any currently stored values and replaces them with a new list of values. The values parameter must be an array of String values with a single index of any type. The String values will be added to the list in the order defined by the index values, but the index values themselves will be discarded. The expire parameter is an optional DateTime value which determines when the list of values stored under the given name will expire. If no expiration is given and no values have been previously stored under the name, then the default expiration is one week from the current date/time. The result of this function is true if the values are successfully stored. |
| *set(name, value, expire)* | Clears any currently stored values and replaces them with a single new String value. The expire parameter is an optional DateTime value which determines when the list of values stored under the given name will expire. If no expiration is given and no values have been previously stored under the name, then the default expiration is one week from the current date/time. The result of this function is true if the value is successfully stored. |
| *expireOnLogout(name)* | Sets the expiration of the value(s) connected to *name* to the time when the user next logs out or is automatically logged out by session timeout. |
| *getAll(name)* | Gets the list of values stored under the given name as an array of type String[Integer]. Changes to the resulting array will not be reflected in the stored values. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___4782](/shared/custompage/custompage.jsp?_event=view&_id=445506___4782) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8401](/shared/custompage/custompage.jsp?_event=view&_id=445506___8401)

 
