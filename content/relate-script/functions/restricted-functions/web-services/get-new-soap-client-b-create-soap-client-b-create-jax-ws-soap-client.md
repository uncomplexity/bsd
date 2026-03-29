

- getNewSoapClient(...)B.createSoapClient, B.createJaxWsSoapClient

---
The getNewSoapClient(...) function retrieves a SoapClient to initialize it. The result of this function is a SoapClientCustomObject object.**Syntax:** **getNewSoapClient( String url** **)**
*url***.getNewSoapClient();**

| **Parameter** | **Description** |
| --- | --- |
| *url* | A String value containing url for the soap client's webservices. |


| The Soap Client Object |
| --- |
| |


| **Method** | **Description** |
| --- | --- |
| *getNewSoapCustomObject(String classPath)* | This function results in a SoapCustomObject containing the Class of the classPath passed to it. |
| *soapCall(String nameSpace, String method)* | This function results in a Map always in case the soap call returns a Map of items, however, it is used to make webservice calls to a soap client. |
| *soapCall(String nameSpace, String method, String arg)* | This function results in a Map always in case the soap call returns a Map of items, however, it is used to make webservice calls to a soap object. |
| *soapCall(String nameSpace, String method, String[Integer] paramTypes , paramValues)* | This function results in a Map always in case the soap call returns a Map of items, however, it is used to make webservice calls to a soap object.<br>paramTypes - "String", "Boolean", "Integer", "Long", "Long[]" are implemented.<br>paramValues - is a variable-count, variable-type argument list which must correspond to the types passed. |
 [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7261](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7261) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7281](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7281)

 
