

- getSecurityGroup(...)B.findSecurityGroup

---
The getSecurityGroup(...) function is used to retrieve a security group using its formula id which is defined on the security group edit screen. Looking up a security group allows a formula to send an email, an intramail or an alert to a dynamic list of recipients. This is especially useful in a multi-unit organization where staff in each unit need to receive messages only about their records. The result of this function is a SecurityGroup object, which is described in the lower section.

**Syntax:** **getSecurityGroup(** *securityGroupID* **)** *securityGroupID.***getSecurityGroup( )**

| **Parameter** | **Description** |
| --- | --- |
| *securityGroupID* | A String value which contains the formula id of the security group to be retrieved. |


| The SecurityGroup Object |
| --- |
| |


| **Field** | **Description** |
| --- | --- |
| *name* | This is a read-only String value containing the name of the security group. |
| *getEmailAddresses()* | This function results in a String value containing a comma delimited list of email addresses of all of the members of the security group. |
| *getEmailAddresses(systemObject)* | This function results in a String value containing a comma delimited list of email addresses of those members of the security group who may potentially have access to the Relate data represented by the System object according to the unit security settings of the security group. Note that the email addresses listed may not represent users who actually have access to the data, only those who could potentially have access according to the unit security rules. |
| *getUsernames()* | This function results in a String value containing a newline delimited list of usernames of all of the members of the security group. |
| *getUsernames(systemObject)* | This function results in a String value containing a newline delimited list of usernames of those members of the security group who may potentially have access to the Relate data represented by the System object according to the unit security settings of the security group. Note that the usernames listed may not represent users who actually have access to the data, only those who could potentially have access according to the unit security rules. |
 [/shared/custompage/custompage.jsp?_event=view&_id=445506___8741](/shared/custompage/custompage.jsp?_event=view&_id=445506___8741) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8162](/shared/custompage/custompage.jsp?_event=view&_id=445506___8162)

 
