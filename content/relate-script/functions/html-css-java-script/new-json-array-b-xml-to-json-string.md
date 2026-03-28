

- newJSONArray(...)B.xmlToJsonString

---
The newJSONArray(...) function is used convert data to and from a JSON format. It can also be used to create and access data structures which are more complex than RelateScript can handle natively at this time. JSON stands for [JavaScript Object Notation](http://www.json.org) and is an open standard normally used to transmit data during an AJAX call from a web-browser-based scripting language such as JavaScript. Aside from primative data types of number, string and boolean JSON supports two complex data types: object and array. A JSON object is a collection of key/value pairs where the key is always a String and the value may be of any JSON type. A JSON array is a list of values of any valid JSON type. JSON is designed to be transmitted as UTF-8 string data, so converting from a JSON string to a JSON object and vice-versa is the primary purpose of this function.**Syntax:**
**newJSONArray( )
newJSONArray(** *JSONString* **)
newJSONArray(** *XMLString* **)**
*JSONString***.newJSONArray()**
*XMLString***.newJSONArray()**

| **Parameter** | **Description** |
| --- | --- |
| *JSONString* | An optional String value containing a JSON string representing a JSON array. The new JSONArray object returned by this function will be initialized with the data from the *JSONString* parameter. |
| *XMLString* | An optional String value containing an XML document or fragment of XML. The new JSONArray object returned by this function will be initialized with the data from the *XMLString* parameter using a JSONML data transformation. JSONML is a standard, two-way method for converting between XML and JSON. The toXML() function converts a JSONArray back into XML. More information can be found on [Wikipedia](http://en.wikipedia.org/wiki/JsonML) and at [jsonml.org](http://www.jsonml.org/). |**JSONObject Object**

| **Field/Function** | **Description** |
| --- | --- |
| *put(index, value) put(value)* | Adds a new value to the JSON array. It may optionally put the new value at a specific index or simply append the value to the end of the array. The *index* is an Integer value. The *value* may be any RelateScript primative type or object type. Since JSON only supports String, Integer, Float, Boolean, JSONObject and JSONArray all other types of data will be converted to String values with one exception: RelateScript Array values will be converted to JSONObject values which may or may not give the expected result depending on the data type of the array and its indexes. The result of a call to put(...) is the JSONArray itself making chained syntax possible, i.e. myJSONArray.put("Bob").put("Bill"); |
| *putAsList(index, value) putAsList(value)* | Adds a new value to the JSON array. It may optionally put the new value at a specific index or simply append the value to the end of the array. The *index* is an Integer value. The *value* must be a RelateScript Array value. The first index of the array will be discarded and the values in the array will be used to form a new JSONArray. The conversion of the values may not give the expected result depending on the data types of the array and any additional indexes. The result of a call to putAsList(...) is the JSONArray itself making chained syntax possible as with put(...). |
| *getString(index)* | Gets the value associated with the given *index* as a String. This method does not attempt data conversions. If there is no value at the index or the associated value is not a String, the result will be null. |
| *getBoolean(index)* | Gets the value associated with the given *index* as a Boolean. This method does not attempt data conversions. If there is no value at the index or the associated value is not a Boolean, the result will be null. |
| *getInteger(index)* | Gets the value associated with the given *index* as a Integer. This method does not attempt data conversions. If there is no value at the index or the associated value is not a Integer, the result will be null. |
| *getFloat(index)* | Gets the value associated with the given *index* as a Float. This method does not attempt data conversions. If there is no value at the index or the associated value is not a Float, the result will be null. |
| *getJSONObject(index)* | Gets the value associated with the given *index* as a JSONObject. This method does not attempt data conversions. If there is no value at the index or the associated value is not a JSONObject, the result will be an empty JSONObject. |
| *getJSONArray(index)* | Gets the value associated with the given *index* as a JSONArray. This method does not attempt data conversions. If there is no value at the index or the associated value is not a JSONArray, the result will be an empty JSONArray. |
| *getType(index)* | Gets the type of the value associated with the given *index*. Possible values are null, "null", "String", "Boolean", "Integer", "Float", "JSONObject" and "JSONArray". If the index is in the JSONArray, but the associated value is null, then the String value "null" will be returned. If there is no such index in the JSONArray then an actual null value will be returned. |
| *isString(index)* | Results in a Boolean value which is true if the value associated with the *index* is a String or false otherwise. |
| *isBoolean(index)* | Results in a Boolean value which is true if the value associated with the *index* is a Boolean or false otherwise. |
| *isInteger(index)* | Results in a Boolean value which is true if the value associated with the *index* is a Integer or false otherwise. |
| *isFloat(index)* | Results in a Boolean value which is true if the value associated with the *index* is a Float or false otherwise. |
| *isJSONObject(index)* | Results in a Boolean value which is true if the value associated with the *index* is a JSONObject or false otherwise. |
| *isJSONArray(index)* | Results in a Boolean value which is true if the value associated with the *index* is a JSONArray or false otherwise. |
| *isNull(index)* | Results in a Boolean value which is true if the *index* is in the JSONArray, but the associated value is null. Otherwise results in false. |
| *remove(index)* | Removes the *index* and associated value from the JSONArray. The indexes of subsequent values in the array will be renumbered to close the hole in the numbering sequence. The result of a call to remove(...) is the JSONArray itself making chained syntax possible as with put(...). |
| *length* | An Integer property which gives the number of values contained in the JSONArray. |
| *toJSONObject(JSONArray)* | Combines two JSONArrays into one JSONObject. Uses the first JSONArray as values and the second JSONArray as keys in the resulting JSONObject. |
| *join(separator)* | Joins together all of the values in the JSONArray into a single String value using an optional separator. The separator defaults to a comma if not given. |
| *toArrayOfString()* | Creates a RelateScript array containing all of the values which happen to be Strings from the values in the JSONArray. |
| *toArrayOfInteger()* | Creates a RelateScript array containing all of the values which happen to be Integers from the values in the JSONArray. |
| *toArrayOfFloat()* | Creates a RelateScript array containing all of the values which happen to be Floats from the values in the JSONArray. |
| *toArrayOfBoolean()* | Creates a RelateScript array containing all of the values which happen to be Booleanss from the values in the JSONArray. |
| *toXML()* | Create a String value containing an XML representation of the JSON Array using a JSONML data transformation. Not all JSON arrays are suitable for conversion to XML and calling this function with such arrays will not have reliable results. More information can be found on [Wikipedia](http://en.wikipedia.org/wiki/JsonML) and at [jsonml.org](http://www.jsonml.org/). |
| *errors* | Many of the functions and fields above can have errors, particularly when attempting to convert data. When an error occurs it is added to this property as a newline delimited list of error messages. |
| *resetErrors()* | Clears the errors property to make it easier to determine which operation caused which error in a complex formula sequence. |
| *pretty(indent)* | Converts the JSON array to a String value with newlines and indenting designed to make reading as clear as possible for humans. The optional *indent* parameter determines how large each indent step is. It must be between 0 and 8 and defaults to 2. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___8701](/shared/custompage/custompage.jsp?_event=view&_id=445506___8701) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8421](/shared/custompage/custompage.jsp?_event=view&_id=445506___8421)

 
