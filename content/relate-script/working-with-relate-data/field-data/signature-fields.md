

- Signature Fields

---
Signature fields are represented using a custom data type. In some Relate Script system messages, the type will be referred to by the generic data type name, Object. Some messages will refer to the more specific data type name, Signature. A Signature value is never null; however, it may be empty. This condition can be determined via its custom fields. When a Signature value is cast to String it results in the standard date/time and name value you are accustomed to seeing in reports. Of course, if the field is not signed, casting it to String results in null. A Signature value has six fields and two custom functions detailed below.

| **Field/Function Name** | **Description** |
| --- | --- |
| *timestamp* | This is a DateTime field containing the exact date and time the signature field was signed. It is represented in the current user's preferred time zone. If the Signature is not signed, this field is null. This is a read-only field. |
| *name* | This is a String field containing the name of the person who signed the field. If the Signature is not signed, this field is null. This is a read-only field. |
| *userId* | This is a String field containing the id of the record type form belonging to the record of the person who signed the field. If the Signature is not signed or was signed using a BlueStep employee's administrative account, this field is null. This is a read-only field. |
| *username* | This is a String field containing the username of the person who signed the field. If the Signature is not signed, this field is null. This is a read-only field. |
| *email* | This is a String field containing the email address of the person who signed the field. If the Signature is not signed, this field is null. This is a read-only field. |
| *justSigned* | This is a Boolean field indicating whether the field was signed during the current edit process. This is a read-only field. |
| *credential* | This is a String field indicating professional credentials of the person who signed the field. Credentials are stored on a special form which may not be available in all organizations. Talk to your BlueStep representative if you need this feature enabled. This is a read-only field. |
| reset() | This method unsigns a signature field which is currently signed. Its result is a Boolean value which is true if the field actually was signed prior to executing the function. The usual two syntax variations are allowed: with the Signature value preceding the function name (and separated by a period), or with the Signature value inside the parentheses. |
| sign(*timestamp*) | This method signs a signature field which is currently unsigned. Its result is a Boolean value which is true if the signing is successful. To succeed the form entry for this signature field must have a pending-unlock status. Also, the *timestamp* DateTime value must be greater than the lock creation time and less than the current time. Finally, the lock creator must be the currently logged in user. If any of these conditions are not met, the field will not be signed and the function will result in false. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3151](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3151) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7341](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7341)

 
