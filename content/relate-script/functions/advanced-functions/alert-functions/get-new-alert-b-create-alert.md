

- getNewAlert(...)B.createAlert

---
The getNewAlert(...) function is used to send an alert notification. The result of the function is an alert object. Because of the large number of optional parameters, there are a full 24 variations of this method. The "object oriented" variations have been left off the list for brevity.

**Syntax:** **getNewAlert(** *to, type***,** *message, endDate* **)****getNewAlert(** *to, type***,** *message, endDate, priority* **)****getNewAlert(** *to, type***,** *message, endDate, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, priority* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL, priority* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL, soundName* **)** **getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL, soundName, priority* **)
getNewAlert(** *to, type***,** *message, endDate, userAssignedID, linkURL, soundName, priority, snoozeDelay* **)**
**getNewAlert(** *to, type***,** *message, startDate, endDate* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, priority* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, priority* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL, priority* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL, priority, snoozeDelay* **)****getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL, soundName* **)
getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL, soundName, priority* **)** **getNewAlert(** *to, type***,** *message, startDate, endDate, userAssignedID, linkURL, soundName, priority, snoozeDelay* **)**

| **Parameter** | **Description** |
| --- | --- |
| *to* | A String value containing a newline delimited list of usernames that are the recipients of the alert notification. If no recipients are specified, no alert will be sent. |
| *type* | A String value containing the type of alert notification. There are three possible types: "percent", "signature" and "auto". If any other value is used, the type will default to signature. For a description of the differences between these types, read the article titled, "Alert Functions." |
| *message* | A String value containing the body of the message. The message should be short and may not contain any HTML formatting. If the message is null or empty, then no alert will be sent. |
| *startDate* | A DateTime value containing the start date of the alert notification. If no value is passed, the default is the current date and time. |
| *endDate* | A DateTime value containing the end date of the alert notification. If no value is passed, the default is the startDate plus 1 day. |
| *userAssignedID* | A String value containing a unique identifier that is used to lookup the alert later via the getAlert() method. The identifier MUST be unique among all alerts ever sent. If the identifier is passed which has be previously used, then no alert will be sent. |
| *linkURL* | A String value containing the link to a specified URL. If a URL is specified, it will be used to hyperlink the message. |
| *soundName* | A String value containing the name of a default sound setting. The default sound names are: "bark", "bong", "chime", "error", "info", "knock", "phaser" and "vibrate". To specifiy a custom sound or sound delay, they must be set after creating the Alert. If multiple alerts with sounds are recieved simultaneously, the alert with the highest priority will play its sound. If the alerts are of the same priority, one will be chosen at random. |
| *priority* | An Integer value indicating the priority of the message. The value must be between 1 and 10. A value 1-3 will show a high priority icon, 4-7 will show a normal priority icon and 8-10 will show a low priority icon. A null value or out-of-range value will set the priority to 5. |
| *snoozeDelay* | An Integer value indicating the milli-seconds delay between announcements of the alert notification. When a recipient views an alert, any sound stops and the blinking alert light turns off for the duration specified. |
 [/shared/custompage/custompage.jsp?_event=view&_id=445506___4784](/shared/custompage/custompage.jsp?_event=view&_id=445506___4784) [/shared/custompage/custompage.jsp?_event=view&_id=445506___4761](/shared/custompage/custompage.jsp?_event=view&_id=445506___4761)

 
