

- sendMessage(...)B.sendMessage

---

- The sendMessage(...) function has two variations, not counting syntax variations. It causes a message to display for the current user who is making the current edit. It can also cause the current edit to be aborted and any changes caused by the current edit to revert back to their former state.

**Syntax:** **sendMessage(** *message-string* **)**
**sendMessage(** *message-string, abort* **)** *message-string***.sendMessage()**
*message-string***.sendMessage(** *abort* **)**

| **Parameter** | **Description** |
| --- | --- |
| *message-string* | The message-string contains the message to be displayed for the user. Typically this message will be displayed in red text at the top of the page. |
| *abort* | The abort parameter is a Boolean value. If abort is true, then all changes associated with the current edit will be cancelled. Also, if the current operation is a standard Relate edit, then the user will be returned to the edit screen and be given the opportunity to revise their changes and try again.<br>Things which will be cancelled include changes made by the user, changes made by this and other formulas, and email and intramail messages sent by formulas. In technical terms, sending an abort causes a database rollback to occur for the current transaction.<br>If an abort is sent during the execution of a scheduled formula (either by the scheduled formula itself or by another formula triggered by the scheduled formula), only changes to the current record will be cancelled. Changes to other records will still be completed and stored.<br>If an abort is sent during an import, the entire import will fail and the message-string will be displayed as an import error. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3730](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3730) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8361](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8361)

 
