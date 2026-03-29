

- The transaction Object

---
Certain formula types may initiate an edit sequence as opposed to responding to an edit already in progress. These types are scheduled formulas, on-demand formulas and end point formulas. Because these formulas initiate edits, they can also complete the edit sequence, store the results so far, and begin another edit sequence. A group of edits, the associated triggered formula results and other data changes is called a transaction. This includes: All Relate data created, modified or deleted by the initiating formula; all Relate data created, modified or deleted by formulas triggered by the initial formula (which can then trigger more formulas, then more...); and all system-level data created or modified by these same formulas such as document content created or modified, alerts created/cancelled/completed, email messages queued, on-demand formulas scheduled, etc.ALL data created, modified or deleted anywhere in the BlueStep platform by a single process during a transaction is either stored altogether or cancelled altogether...no half way. Data modified by other processes running on the same server or other servers is not affected. If the changes are successfully and permenantly stored we say that the transaction has been committed. If the changes are not successful we say that the transaction has been rolled back. A transaction roll back may be initiated by an error in the BlueStep system or by a RelateScript formula calling sendMessage(...) and passing true as the second parameter.For the three types of formulas listed at the beginning, scheduled, on-demand and end-point, there is a special object that is automatically available to the formula called transaction. This special object has a few available functions to manipulate the transaction initiated by the formula. These functions are described below.**The transaction Object**

| **Function** | **Description** |
| --- | --- |
| *commit()* | The commit function attempts to commit all changes made so far. If the commit is successful, this function results in true. If the commit is unsuccessful, the result is false. If there are no known changes that need to be committed, the result is null. Executing the commit() function causes any secondary formulas to be triggered such as pre-save, post-save, pre-delete and field formulas. If all of these secondary formulas complete without error and without explicitly requesting a roll back via the sendMessage(...) function, then the data is stored. A new transaction is then started, system data caches are cleared of any data which may have changed (data stored in RelateScript variables of the initiating formula will not be cleared), and the process then returns to completing the remainder of the initiating formula. Note that when the initiating formula completes any further changes will be commited in the same fashion described here. |
| *getMessages()* | The getMessages() function can be executed after commit(). The result of the function is an array indexed by Integer (sequential, starting at 0) and containing TransactionMessage objects described below. |**TransactionMessage Object**

| **Field** | **Description** |
| --- | --- |
| *rollback* | A read-only Boolean value which is true if this message was the cause of the rollback. |
| *message* | A read-only String containing the message text. This is the same text the end-user sees in red at the top of the next screen. |
| *fieldId* | A read-only String value containing the id of the field causing this message. Currently only certain system generated errors use this value. |
| *formId* | A read-only String value containing the id of the form causing this message. Currently only certain system generated errors use this value. |
| *entryId* | A read-only String value containing the id of the form-entry causing this message. Currently only certain system generated errors use this value. |
| *recordId* | A read-only String value containing the id of the field causing this message. Currently only certain system generated errors use this value. |
| *entryTempId* | A read-only String value containing the temporary id of the an entry which had an error prior to the first save of that entry. Currently only certain system generated errors use this value. |
| *action* | A read-only String value containing the name of the action that was being performed on the Relate record. Currently only certain system generated errors use this value. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8602](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8602) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___6661](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___6661)

 
