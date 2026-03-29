

- sleep(...)

---
Causes the currently executing thread to sleep for the specified number of milliseconds. Similar to `Thread.sleep()` in Java.Syntax`sleep(millis time)`ExamplesYou need to run a request every 10 seconds. req = getHTTPRequester(url);
 keepTesting = true;
 while (keepTesting) {
 req.doRequest();
 keepTesting = req.contentLength == 0;
 if (keepTesting) sleep(10000);
 }
 content = req.getContent();

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8361](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8361) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7982](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7982)

 
