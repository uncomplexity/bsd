

- SoapObject

---

| **Method** | **Description** |
| --- | --- |
| *soapCall(String nameSpace, String method)* | This function results in a Map always in case the soap call returns a Map of items, however, it is used to make webservice calls to a soap object. |
| *soapSetString(String method, String value)* | This function results in a Boolean value containing the success of the operation. This method sets a String to a Parent Soap Custom Object. |
| *soapSetBoolean(String method, Boolean value)* | This function results in a Boolean value containing the success of the operation. This method sets a Boolean to a Parent Soap Custom Object. |
| *soapSetInteger(String method, Integer value)* | This function results in a Boolean value containing the success of the operation. This method sets a Integer to a Parent Soap Custom Object. |
| *soapSetDateTime(String method, DateTime value)* | This function results in a Boolean value containing the success of the operation. This method sets a DateTime to a Parent Soap Custom Object. |
| *soapResetMap(String getmethod, Map newvalues)* | This function results in a Boolean value containing the success of the operation. This method sets a Map to a Parent Soap Custom Object based on a method that returns the map to reset. |
| *soapSetMap(String method, Map value)* | This function results in a Boolean value containing the success of the operation. This method sets a Map to a Parent Soap Custom Object. This method is only used if they provided a setter. Else soapResetMap should be used. |
| *soapSetList(String method, Map value)* | This function results in a Boolean value containing the success of the operation. This method sets a List to a Parent Soap Custom Object. This method is only used if they provided a setter. Else soapResetMap should be used. |
| *soapSetSet(String method, Map values)* | This function results in a Boolean value containing the success of the operation. This method sets a Set to a Parent Soap Custom Object. This method is only used if they provided a setter. Else soapResetMap should be used. |
| *soapSetArray(String method, Map values)* | This function results in a Boolean value containing the success of the operation. This method sets an Array to a Parent Soap Custom Object. This method is only used if they provided a setter. Else soapResetMap should be used. |
| *soapSetCustomObject(String method, SoapCustomObject value)* | This function results in a Boolean value containing the success of the operation. This method sets a SoapCustomObject to a parent SoapCustomObject. |
| *soapSetEnum(String method, String value)* | This function results in a Boolean value containing the success of the operation. This method sets an Enum to a parent SoapCustomObject. |
| *soapSetBytes(String method, String value)* | This function results in a Boolean value containing the success of the operation. This method sets a byte[] to a parent SoapCustomObject. |
| *soapGetString(String method)* | This function results in a String value. This method gets a String from a parent SoapCustomObject. |
| *soapGetBoolean(String method)* | This function results in a Boolean value. This method gets a Boolean from a parent SoapCustomObject. |
| *soapGetInteger(String method)* | This function results in a Integer value. This method gets a Integer from a parent SoapCustomObject. |
| *soapGetDateTime(String method)* | This function results in a DateTime value. This method gets a DateTime from a parent SoapCustomObject. |
| *soapGetMapOfString(String method)* | This function results in a Map<String, String>. This method gets a Map from a parent SoapCustomObject. |
| *soapGetMapOfCustomObject(String method)* | This function results in a Map<String, CustomObject>. This method gets a Map from a parent SoapCustomObject. |
| *soapGetCustomObject(String method)* | This function results in a SoapCustomObject value. This method gets a SoapCustomObject from a parent SoapCustomObject. |
| *soapGetEnum(String method)* | This function results in a Enum value. This method gets an Enum from a parent SoapCustomObject. |
| *soapGetBytes(String method)* | This function results in a String value. This method gets a byte[] from a parent SoapCustomObject. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7262](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7262) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7301](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7301)

 
