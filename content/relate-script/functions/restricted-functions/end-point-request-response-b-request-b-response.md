

- End Point request/responseB.request,B.response

---
End points have two special values in scope. They are request and response. Each is a special object which gives access to the HttpServletRequest and HttpServletResponse respectively. They have many fields and functions as listed below.request([HttpServletRequest](http://download.oracle.com/javaee/5/api/javax/servlet/http/HttpServletRequest.html) and [ServletRequest](http://download.oracle.com/javaee/5/api/javax/servlet/ServletRequest.html))

| Field/Method | Return Type | Description |
| --- | --- | --- |
| fullUrl | String | |
| queryString | String | |
| method | String | |
| protocol | String | |
| domain | String | |
| isSecure | Boolean | |
| isMultipartMIME | Boolean | |
| readMultipartMIME() | Boolean | |
| getCookie(String name) | String | |
| setCharset(String charset) | Boolean | |
| getContent() | String | |
| getContentHexBin() | String | |
| getCookies() | String[String] | |
| getHeader(String name) | String | |
| getHeaders(String name) | String[String] | |
| getHeaderNames() | String[String] | |
| getParameter(String name) | String | Returns the value of a request parameter as a String, or null if the parameter does not exist. You should only use this method when you are sure the parameter has only one value. If the parameter might have more than one value, use `getParameterValues()`. |
| encodedParam(String name) | String | Same as `getParameter` but it HTML encodes the parameter. This should probably be used on all user inputted data to protect against XSS attacks. |
| getParameterValues(String name) | String[String] | Returns an array of String objects containing all of the values the given request parameter has, or null if the parameter does not exist. If the parameter has a single value, the array has a length of 1. |
| getParameterNames() | String[String] | |
response([HttpServletResponse](http://download.oracle.com/javaee/5/api/javax/servlet/http/HttpServletResponse.html) and [ServletResponse](http://download.oracle.com/javaee/5/api/javax/servlet/ServletResponse.html))

| Field/Method | Return Type | Description |
| --- | --- | --- |
| contentType | String | Writable |
| charSet | String | Writable |
| status | Integer | Writable |
| addHeader(String name, String \| Integer \| DateTime value) | Boolean | |
| setHeader(String name, String \| Integer \| DateTime value) | Boolean | |
| hasHeader(String name) | Boolean | |
| addCookie(String name, String value) | Boolean | |
| write(String content) | Boolean | |
| writeByte(Integer byte) | Boolean | |
| writeHexBix(String hexBin) | Boolean | |
| writeFromURL(String url) | Boolean | |
| redirect(String url) | Boolean | A URL to redirect the user to. Note, this does not stop the execution of the End Point. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8381](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8381) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7983](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7983)

 
