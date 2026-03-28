

- sendIntramail(...)

---
The sendIntramail(...) function is almost identical to the sendEmail(...) function. The only real difference is that the addresses in the to, from, cc and bcc fields are usernames instead of email addresses, and when there are multiple addresses they are separated with the newline character, "\n", instead of a comma. Like sendEmail(...), setIntramail(...) has twelve variations, not counting syntax variations. The function does as its name says: it sends an intramail message. The result of sendIntramail(...) is a Boolean value which indicates whether the intramail was successfully sent.

**Syntax:**
**sendIntramail(** *to***,** *from***,** *subject***,** *message* **)**
**sendIntramail(** *to***,** *from***,** *subject***,** **message***,** *priority* **)***
**sendIntramail(** *to***,** *from***,** *subject***,** **message***,** *isHTML* **)***
**sendIntramail(** *to***,** *from***,** *subject***,** **message***,** *priority**,** *isHTML** **)***
**sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc* **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *priority** **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *isHTML** **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc**,** *priority**,** *isHTML*** **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc* **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority* **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** isHTML* **)
sendIntramail(** *to***,** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority**,** isHTML* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message**,** *priority** **)**
*to***.sendIntramail(** *from***,** *subject***,** *message**,** *isHTML** **)**
*to***.sendIntramail(** *from***,** *subject***,** *message**,** *priority**,** *isHTML*** **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc**,** priority* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc**,** isHTML* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc**,** priority**,** isHTML* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc***,** *bcc* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** isHTML* **)**
*to***.sendIntramail(** *from***,** *subject***,** *message***,** *cc***,** *bcc**,** priority**,** isHTML* **)**

| **Parameter** | **Description** |
| --- | --- |
| *to* | A String value containing a newline delimited list of usernames that are the primary recipients of the message. |
| *from* | A String value containing the username of the sender of the message. |
| *subject* | A String value containing the subject line of the message. |
| *message* | A String value containing the body of the message. |
| *cc* | A String value containing a newline delimited list of usernames that are the secondary recipients of the message. |
| *bcc* | A String value containing a newline delimited list of usernames that are the secondary recipients who's names will not appear in the email transmission sent to other recipients of the message. |
| *priority* | An Integer value indicating the priority of the message. A positive number will send the message high priority. A negative number will send the message low priority. A zero or null value or omitting the priority will send the message normal priority. The system attempts to send high-priority messages within a few seconds of being queued. Normal and low priority message should be sent within a few minutes. |
| *isHTML* | A boolean value indicating whether the message body is an HTML document. If true the message will be sent with a MIME type of text/html. Otherwise the message will be sent with a MIME type of text/plain. If you select to send an HTML document as the body of the message, it must be a proper document with enclosing <html> and <body> tags. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___3186](/shared/custompage/custompage.jsp?_event=view&_id=445506___3186) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3739](/shared/custompage/custompage.jsp?_event=view&_id=445506___3739)

 
