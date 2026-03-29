

- curDateTime(...)

---
The curDateTime(...) function has two variations, not counting syntax variations. It retrieves the current moment in time and represents it with a DateTime using an optional time zone.

**Syntax:**
**curDateTime(****)
curDateTime(** *timezone-string* **)**
*timezone-string***.curDateTime()**

| **Parameter** | **Description** |
| --- | --- |
| *timezone-string* | The time zone string is used to determine how to represent the current moment in time. If omitted, the current user's preferred time zone is used. Any time zone identifier supported by Java 5 is allowed.<br>Note that the current moment-in-time is exactly the same everywhere in the world. We just call that moment a different name depending on where on the planet we are. In other words, if you have a DateTime value of 01/01/2006 9:00AM US/Pacific and you subtract a DateTime value of 01/01/2006 10:00AM US/Mountain you will get a difference of 0 hours even though the dates and times are represented differently. This is because both of these times are actually the same moment in time, just represented using a different time zone.<br>On the flip-side of the same idea, if you have a DateTime value of 01/01/2006 10:00AM US/Pacific and you subtract a DateTime value of 01/01/2006 10:00AM US/Mountain you will NOT get a difference of 0 hours, even though both dates and times have the same name, omitting the time zone. You will, in fact, get a difference of one hour since 10AM US/Pacific occurs one hour after 10AM US/Mountain. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3169](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3169) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3170](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3170)

 
