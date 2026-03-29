

- getHTTPRequester(...)B.fetch

---
The getHTTPRequester(...) function is used to make an HTTP request to the current site or another site. It is capable of doing most types of HTTP requests and can theoretically retrieve almost any information on the internet. The result of the function is an HTTP requester object which has settings and functions to customize the request parameters and to get the result of the request. Please see the note for "responseHeaders" for important information regarding local requests.**Syntax:**
`
getHTTPRequester()

getHTTPRequester(url)

url.getHTTPRequester()
`

| Field/Method Name | Type | Description |
| --- | --- | --- |
| url | String | The initial url that is planned to be requested. This can also be changed later. |**HTTP Requester Object**

| Field/Method Name | Return Type | Description |
| --- | --- | --- |
| url | String | A changable String value indicating the Uniform Resource Locator (URL) to request. |
| method | String | A changable String value indicating the HTTP request method. Valid values are "GET", "POST", "HEAD", "PUT", "OPTIONS", "DELETE" and "TRACE". "GET" and "POST" are the most common with "HEAD" in a distant third and the others only used in fairly exotic senarios. The default is "GET". |
| setContent(String body[, String charset]) | Boolean | Sets the body of the HTTP request. This function receives one or two parameters, both String values. The first String value is the body of the request. The second, optional String value is the name of the charset to encode the string when it is converted from a String to bytes. The default charset encoding is UTF-8. The request body may be cleared by passing null. The function returns a boolean value which is true unless an invalid charset name is given. |
| addParam(String key[, String value]) | | Adds parameters to the body and URI encodes them. Only works with "POST" method. |
| connectTimeout | Integer | Sets the connection timeout. This is the amount of time, in milliseconds, to wait for a connection to the remote server. By default the timeout is 60 seconds (60000). A value of null or zero means no timeout. Negative values are ignored. |
| readTimeout | Integer | This is the amount of time to wait, after a connection is established, for data to be recieved. By default the timeout is 60 seconds (60000). A value of null or zero means no timeout. Negative values are ignored. |
| followRedirects | Boolean | A Boolean value which determines whether redirects will be followed automatically. The default is true. |
| requestHeaders | String[String] | A read-only array value (String[String]) containing the current request headers. |
| setHeader(String name, String value) | | A function which sets a request header. The function receives two additional parameters, both Strings. The first is the name of the header. The second is the value of the header. |
| addHeader(String name, String value) | | A function which adds a request header. The function receives two additional parameters, both Strings. The first is the name of the header. The second is the value of the header. |
| doRequest() | Boolean | This function receives no additional parameters. It causes the request to actually be initiated/sent. It should be called after all request parameters have been configured. The result of the function is true if a request is successfully made or false if there is an error or timeout. |
| error | String | A read-only String containing an error message if an error has occured. |
| clearError() | | This function recieves no additional parameters. It clears the error field in preparation for making additional requests. |
| getContent([String charset]) | String | A function to get the response body. The function recieves one optional additional parameter, the name of the charset used to decode the bytes into a String value. This function also sends the request if doRequest() has not already been called. Do not call this function for binary or potentially large responses without checking the content length and mime type. |
| getContentURL() | String | When a response is particularly large it is written to a temporary file on the BlueStep server. This file can be retrieved using the url returned by this function. This is also used with binary files which need to be stored in the document library or with images that need to be scaled, rotated, etc. |
| mimeType | String | A read-only String value indicating the mime type of the response. |
| filename | String | A read-only String value indicating the filename of the response. Usually this corresponds to the file name in the URL, but occationally a separate filename is specified in the response headers. |
| contentLength | Integer | A read-only Integer value containing the length of the response body. |
| responseCode | Integer | A read-only Integer value containing the response code as defined in the HTTP specification |
| responseMessage | String | A read-only String value containing the human readable response code as defined in the HTTP specification. |
| responseHeaders | String[String] | A read-only array value (String[String]) containing the response headers. Headers with multiple values are combined with a newline separator. If requesting a local URL (it begins with a "/") the system may choose to retrieve the requested content directly without making a normal HTTP request. This has the advantage of greater efficiency and preservation of the current user's login credentials. However, it also means that no actual HTTP headers will be generated. |
| basicAuthentication(String username, String password) | | Takes two parameters, username and password that will be passed using HTTP Basic Authentication. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7981](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7981) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11641](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11641)

 
