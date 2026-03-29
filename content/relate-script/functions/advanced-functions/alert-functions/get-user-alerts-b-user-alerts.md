

- getUserAlerts(...)B.User.alerts

---
The getUserAlerts(...) function is used to get all the alerts sent to a particular user which were active within a specified period of time. Specifically, it gets all of the alerts, sent to the user, which have a start time prior to *endDate* and an end time after the *startDate*. If no *startDate* or *endDate* is passed (not even null), then only the user's current alerts, which are not marked complete, will be returned. The result of this function is an array of alert objects.**Syntax:** **getUserAlerts(** *username* **)** **getUserAlerts(** *username, startDate, endDate* **)**
*username***.getUserAlerts(** **)**
*username***.getUserAlerts(** *startDate, endDate* **)**

| **Parameter** | **Description** |
| --- | --- |
| *username* | A String value containing the username for the alert recipient. |
| *startDate* | A DateTime value containing the start date of the alert notifications. If null or not passed, the default is the current date and time. |
| *endDate* | A DateTime value containing the end date of the alert notifications. If null or not passed, the default is the current date and time. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4761](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___4761) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11761](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11761)

 
