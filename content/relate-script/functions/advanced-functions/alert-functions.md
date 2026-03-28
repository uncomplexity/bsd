

- Alert Functions

---
An alert is a message which is sent to a user's browser while they are visiting a BlueStep website. The alert will be received within 30 seconds of being sent, provided the recipient is currently using the site. Alerts can be used for many purposes where sending an e-mail or intramail is too slow. **IMPORTANT: Alerts must be enabled by your BlueStep account representative. If they are not enabled you can still send an alert, but it cannot be received.**The functions that work with alert objects are:

 [getNewAlert(...) B.createAlert](/shared/custompage/custompage.jsp?_event=view&_id=445506___4763)
[getAlert(...) B.findAlert](/shared/custompage/custompage.jsp?_event=view&_id=445506___4761)
[getUserAlerts(...) B.User.alerts](/shared/custompage/custompage.jsp?_event=view&_id=445506___4781)All of the alert functions work with Alert objects. Below is a description of the properties of these Alert objects.

| The Alert Object |
| --- |
| |

| **Field/Function Name** | **Description** |
| --- | --- |
| type | This is a read-only String value containing the type of the alert. It is one of three values: "percent", "signature" or "auto". The percent type allows the recipient to set the status of the alert to a percent value between 0 and 100 in increments of 10 percent. The signature type allows the status to be set to 100 by checking a box. The auto type does not allow the recipient to set the status. |
| message | This is a read-only String value containing the message sent in the alert. |
| startDate | This is a read-only DateTime value indicating when the alert was sent or is to be sent, if in the future. |
| endDate | This is a DateTime value indicating when the alert expires. This value may be changed to cause the alert to expire earlier than originally scheduled or to extend the expiration time. |
| userAssignedID | This is a String value containing an identifying value that can be used to retrieve this alert. It cannot be the same as any other alert ever sent. If an attempt is made to set this value to one that is already used by another alert, any changes to this alert will fail to save, which may cause the alert to never be sent. |
| linkURL | This is a read-only String value containing the url to which the message will be hyperlinked when viewed by the recipient. |
| soundURL | This is a String value containing the URL of a internet-ready sound file which is played repeatedly to get the attention of the recipient of the alert. |
| soundDelay | This is an Integer field containing the delay in milliseconds between each repeat of playing the sound. |
| priority | This is an Integer value containing the priority of the alert. The priority may be set to a new value in the range 1-10 where 1 is the highest priority. If any other value is set, it will be ignored. |
| snoozeDelay | This is an Integer value indicating the snoozeDelay in milliseconds. Each time the user views an alert it is snoozed for the specified time period. This means that it will stop playing any sound and the blinking alert indicator will turn off. |
| usersToString | This is a read-only String value containing the newline delimited list of usernames of the alert's recipients. |
| status | This is a Integer value containing the current status of the alert. It may be set to any value from 0 to 100. Attempts to set the field to any other value will be ignored and the original value will be retained. |
| statusTimestamp | This is a read-only DateTime value containing the exact time the status field was last changed. |
| statusUsername | This is a read-only String value containing username of the user who last changed the status. |
| statusFirstName | This is a read-only String value containing first name of the user who last changed the status. |
| statusLastName | This is a read-only String value containing last name of the user who last changed the status. |
| statusEmail | This is a read-only String value containing email address of the user who last changed the status. |
| getUserStatuses() | This function retrieves the statuses of the individuals recipients as an array of AlertUserStatus objects indexed by username. The AlertUserStatus object is described below. |
| cancel() | This function does one of two things. If executed before the startDate, it deletes the alert thus leaving no record it was ever sent. If executed after the startDate, it sets the endDate to the current date and time. |
| done() | This function is simply a shortcut to set the status to 100. |
| setSoundName() | This function sets the soundURL to one of the default sounds and sets the soundDelay to 5000 milliseconds. The default sound names are: "bark", "bong", "chime", "error", "info", "knock", "phaser" and "vibrate". |

| The AlertUserStatus Object |
| --- |
| |

| **Field/Function Name** | **Description** |
| --- | --- |
| firstName | This is a read-only String value containing the first name of the recipient. |
| lastName | This is a read-only String value containing the last name of the recipient. |
| email | This is a read-only String value containing the email address of the recipient. |
| firstView | This is a read-only DateTime value containing the time the recipient first viewed the alert message. |
| lastView | This is a read-only DateTime value containing the time the recipient last viewed the alert message. |
| numViews | This is a read-only Integer value containing the the number of times the recipient has viewed the alert. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___4768](/shared/custompage/custompage.jsp?_event=view&_id=445506___4768) [/shared/custompage/custompage.jsp?_event=view&_id=445506___4763](/shared/custompage/custompage.jsp?_event=view&_id=445506___4763)

 
