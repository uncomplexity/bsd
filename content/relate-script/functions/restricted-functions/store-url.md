

- storeURL(...)

---
The storeURL(...) function allows you to save an attached document (from an individual's Document Library) directly to a specified path on the server. A server property is used to configure the actual location.No conversion of any type is performed in the process of extracting and saving the document regardless of the file type. Note that the function overwrites any existing file with same path and filename without warning or throwing an exception.**Syntax:**String result = **storeURL**( ***sourceDocPath**, locationIndexName, filePathName* **)**

| **Parameter** | **Description** |
| --- | --- |
| **sourceDocPath** | The document file source path as stored in the document's permURL property. |
| **baseFolder** | Name of the base folder. |
| **filePathName** | The full destination folder path and filename, which is appended to the base folder name provided above. |
The function returns an empty string when it has completed successfully, or a string containing the error message(s) if an exception occurred.**Example:** userID = name.System.id;
 userName = name.lastName.trim() + "_" + name.firstName.trim();
 userNameID = userName + "~" + userID;

 docSrcPath = testdummy.docLib.permURL;
 outDocName = testdummy.docLib.filename;
 destFilePath = userNameID + "/" + outDocName;
 indexName = 'clientData';

 result = storeURL(docSrcPath, indexName, destFilePath);

If the server is configured to use /store as the location for this function and the base folder is 'clientData' and the organization identity is U111111, then a copy of the document (in this example named 'background-check.pdf') would be created in the following path on the server:**/store/U111111/clientData/DOE_JOHN~1100000_12131212_999999/background-check.pdf** [/shared/custompage/custompage.jsp?_event=view&_id=445506___9421](/shared/custompage/custompage.jsp?_event=view&_id=445506___9421) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7261](/shared/custompage/custompage.jsp?_event=view&_id=445506___7261)

 
