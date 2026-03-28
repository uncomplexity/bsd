

- storeString(...)

---
The storeString(...) function allows you to write the contents of a String directly to a file on the server. A server property is used to configure the actual location.Note that the file is created using the UTF-8 character set, and overwrites any existing file with same path and filename without warning or throwing an exception.**Syntax:**String result = **storeString**( *contentStr, locationIndexName, filePathName* **)**

| **Parameter** | **Description** |
| --- | --- |
| **contentStr** | The string value to be saved to a file. |
| ****baseFolder**** | Name of the base folder. |
| **filePathName** | The full destination folder path and filename, which is appended to the base folder name provided above. |
The function returns an empty string when it has completed successfully, or a string containing the error message(s) if an exception occurred.**Example:** outXMLStr = ``
 <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
 <clientContactInfo>
 <address1>23 Skidoo Street</address1>
 <address2>Suite 42</address2>
 <city>Yourtown</city>
 <state_province>AnyState</state_province>
 <zip_locator>54321</zip_locator>
 <phone_home>801-987-6543</phone_home>
 <phone_mobile>801-987-1234</phone_mobile>
 <clientContactInfo>
 ``;

 destFilePath = '/client_name~client_id/general/contact.xml';
 indexName = 'clientData';

 result = storeString(outXMLStr, indexName, destFilePath);

If the server is configured to use /store as the location for this function and the base folder is 'clientData' and the organization identity is U111111 then the file 'contact.xml' will be created in the following path on the server:**/store/U111111/clientData/client_name~client_id/general/contact.xml**which contains the content stored in variable 'outXMLStr'. [/shared/custompage/custompage.jsp?_event=view&_id=445506___11901](/shared/custompage/custompage.jsp?_event=view&_id=445506___11901) [/shared/custompage/custompage.jsp?_event=view&_id=445506___9441](/shared/custompage/custompage.jsp?_event=view&_id=445506___9441)

 
