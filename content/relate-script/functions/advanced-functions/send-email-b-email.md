

- sendEmail(...)B.email

---
The sendEmail(...) function has twelve variations, not counting syntax variations. The function does as its name says: it sends an email message. The result of sendEmail(...) is a Boolean value which indicates whether the e-mail was successfully added to the e-mail queue maintained internally by the BlueStep platform. The sendEmail(...) function provides a faster-to-type but less powerful set of features compared to the newEmail(...) function. However, in many cases either method may be used with equal success.

**Syntax:** **sendEmail(** *to***,** *from***,** *subject***,** *message* **)** **sendEmail(** *to***,** *from***,** *subject***,** **message***,** *priority* **)***
**sendEmail(** *to***,** *from***,** *subject***,** **message***,** *isHTML* **)***
**sendEmail(** *to***,** *from***,** *subject***,** **message***,** *priority**,** *isHTML** **)***
**sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc* **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *priority** **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *isHTML** **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *priority**,** *isHTML*** **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc* **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority* **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** isHTML* **)
sendEmail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority**,** isHTML* **)**
*to***.sendEmail(** *from***,** *subject***,** *message* **)**
*to***.sendEmail(** *from***,** *subject***,** *message**,** *priority** **)**
*to***.sendEmail(** *from***,** *subject***,** *message**,** *isHTML** **)**
*to***.sendEmail(** *from***,** *subject***,** *message**,** *priority**,** *isHTML*** **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc**,** priority* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc**,** isHTML* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc**,** priority**,** isHTML* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc***,** *bcc* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** isHTML* **)**
*to***.sendEmail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority**,** isHTML* **)**

| **Parameter** | **Description** |
| --- | --- |
| *to* | A String value containing a comma delimited list of email address that are the primary recipients of the message. |
| *from* | A String value containing the e-mail address of the sender of the message. |
| *subject* | A String value containing the subject line of the message. |
| *message* | A String value containing the body of the message. |
| *cc* | A String value containing a comma delimited list of email address that are the secondary recipients of the message. |
| *bcc* | A String value containing a comma delimited list of email address that are the secondary recipients who's email addresses will not appear in the email transmission sent to other recipients of the message. |
| *priority* | An Integer value indicating the priority of the message. A positive number will send the message high priority. A negative number will send the message low priority. A zero or null value or omitting the priority will send the message normal priority. The system attempts to send high-priority messages within a few seconds of being queued. Normal and low priority message should be sent within a few minutes. |
| *isHTML* | A boolean value indicating whether the message body is an HTML document. If true the message will be sent with a MIME type of text/html. Otherwise the message will be sent with a MIME type of text/plain. If you select to send an HTML document as the body of the message, it must be a proper document with enclosing <html> and <body> tags. |
[B.email()](/jslib/docs/B/classes/bluestep.b.html#email "B.email()") [/shared/custompage/custompage.jsp?_event=view&_id=445506___8841](/shared/custompage/custompage.jsp?_event=view&_id=445506___8841) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3730](/shared/custompage/custompage.jsp?_event=view&_id=445506___3730)

 
