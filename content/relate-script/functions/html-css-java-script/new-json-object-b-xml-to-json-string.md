

- newJSONObject(...)B.xmlToJsonString

---
The newJSONObject(...) function is used to convert data to and from a JSON format. It can also be used to create and access data structures which are more complex than RelateScript can handle natively at this time. JSON stands for [JavaScript Object Notation](http://www.json.org) and is an open standard normally used to transmit data during an AJAX call from a web-browser-based scripting language such as JavaScript. Aside from primative data types of number, string and boolean JSON supports two complex data types: object and array. A JSON object is a collection of key/value pairs where the key is always a String and the value may be of any JSON type. A JSON array is a list of values of any valid JSON type. JSON is designed to be transmitted as UTF-8 string data, so converting from a JSON string to a JSON object and vice-versa is the primary purpose of this function.**Syntax:**
**newJSONObject( )
newJSONObject(** *JSONString* **)
newJSONObject(** *XMLString* **)**
*JSONString***.newJSONObject( )**
*XMLString***.newJSONObject( )**

| Field Name | Type | Description |
| --- | --- | --- |
| JSONString | String | An optional String value containing a JSON string representing a JSON object. The new JSONObject object returned by this function will be initialized with the data from the *JSONString* parameter. |
| XMLString | String | An optional String value containing a XML document or fragment. The new JSONObject object returned by this function will be initialized with the data from the *XMLString* parameter using a transformation similar to the "regular" XML conversion described in the [JSONML wikipedia article](http://en.wikipedia.org/wiki/JsonML). |**JSONObject Object**

| Field Name | Return Type | Description |
| --- | --- | --- |
| put(String key, PrimitiveDataType \| RelateScriptObject value) | JSONObject | Adds a new value to the JSON object with the given key. The *key* is a String value. The *value* may be any RelateScript primative type or object type. Since JSON only supports String, Integer, Float, Boolean, JSONObject and JSONArray all other types of data will be converted to String values with one exception: RelateScript Array values will be converted to JSONObject values which may or may not give the expected result depending on the data type of the array and its indexes. The result of a call to put(...) is the JSONObject itself making chained syntax possible, i.e. myJSONObject.put("first", "Bob").put("last", "Jones"); |
| putAsList(String key, Array value) | JSONObject | Adds a new value to the JSON object with the given key. The *key* is a String value. The *value* must be a RelateScript Array value. The first index of the array will be discarded and the values in the array will be used to form a new JSONArray. The conversion of the values may not give the expected result depending on the data types of the array and any additional indexes. The result of a call to putAsList(...) is the JSONObject itself making chained syntax possible as with put(...). |
| getString(String key) | String | Gets the value associated with the given *key* as a String. This method does not attempt data conversions. If there is no value for the key or the associated value is not a String, the result will be null. |
| getBoolean(String key) | Boolean | Gets the value associated with the given *key* as a Boolean. This method does not attempt data conversions. If there is no value for the key or the associated value is not a Boolean, the result will be null. |
| getInteger(String key) | Integer | Gets the value associated with the given *key* as a Integer. This method does not attempt data conversions. If there is no value for the key or the associated value is not a Integer, the result will be null. |
| getFloat(String key) | Float | Gets the value associated with the given *key* as a Float. This method does not attempt data conversions. If there is no value for the key or the associated value is not a Float, the result will be null. |
| getJSONObject(String key) | JSONObject | Gets the value associated with the given *key* as a JSONObject. This method does not attempt data conversions. If there is no value for the key or the associated value is not a JSONObject, the result will be an empty JSONObject. |
| getJSONArray(String key) | JSONArray | Gets the value associated with the given *key* as a JSONArray. This method does not attempt data conversions. If there is no value for the key or the associated value is not a JSONArray, the result will be an empty JSONArray. |
| getType(String key) | String | Gets the type of the value associated with the given *key*. Possible values are null, "null", "String", "Boolean", "Integer", "Float", "JSONObject" and "JSONArray". If the key is in the JSONObject, but the associated value is null, then the String value "null" will be returned. If there is no such key in the JSONObject then an actual null value will be returned. |
| isString(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a String or false otherwise. |
| isBoolean(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a Boolean or false otherwise. |
| isInteger(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a Integer or false otherwise. |
| isFloat(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a Float or false otherwise. |
| isJSONObject(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a JSONObject or false otherwise. |
| isJSONArray(String key) | Boolean | Results in a Boolean value which is true if the value associated with the *key* is a JSONArray or false otherwise. |
| isNull(String key) | Boolean | Results in a Boolean value which is true if the *key* is associated in the JSONObject, but the associated value is null. Otherwise results in false. |
| remove(String key) | JSONObject | Removes the *key* and any associated value from the JSONObject. The result of a call to remove(...) is the JSONObject itself making chained syntax possible as with put(...). |
| length | Integer | An Integer property which gives the number of key/value pairs contained in the JSONObject. |
| values | JSONArray | A JSONArray property containing all of the values from the key/value pairs contained in the JSONObject. |
| names | JSONArray | A JSONArray property containing all of the keys from the key/value pairs contained in the JSONObject. |
| keys | String[Integer] | A RelateScript array property containing all of the keys from the key/value pairs contained in the JSONObject. |
| toArrayOfString() | String[String] | Creates a RelateScript array containing all of the values which happen to be Strings from the key/value pairs in the JSONObject. |
| toArrayOfInteger() | Integer[String] | Creates a RelateScript array containing all of the values which happen to be Integers from the key/value pairs in the JSONObject. |
| toArrayOfFloat() | Float[String] | Creates a RelateScript array containing all of the values which happen to be Floats from the key/value pairs in the JSONObject. |
| toArrayOfBoolean() | Boolean[String] | Creates a RelateScript array containing all of the values which happen to be Booleanss from the key/value pairs in the JSONObject. |
| errors | String | Many of the functions and fields above can have errors, particularly when attempting to convert data. When an error occurs it is added to this property as a newline delimited list of error messages. |
| resetErrors() | | Clears the errors property to make it easier to determine which operation caused which error in a complex formula sequence. |
| pretty(Integer indent) | String | Converts the JSON object to a String value with newlines and indenting designed to make reading as clear as possible for humans. The optional *indent* parameter determines how large each indent step is. It must be between 0 and 8 and defaults to 2. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8422](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8422) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11602](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11602)

 
