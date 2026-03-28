

- split(...)

---
The split(...) function has eight variations, not counting syntax variations. It splits a string value into an array of string values. This is done by identifying separating characters, such as commas, and breaking the text into pieces where ever a separator is found. The result is an array of String indexed by Integer. The split parts will be arranged in the array in the same order they were found in the original string. The index values begin at zero, and increment by 1 at a time until all parts are matched.

**Syntax:** **split(** *source-string* **)** **split(** *source-string***,** *separator-pattern* **)
split(** *source-string***,** *separator-mode* **)
split(** *source-string***,** *max-parts* **)
split(** *source-string***,** *separator-pattern, separator-mode* **)
split(** *source-string***,** *separator-pattern,* *max-parts* **)
split(** *source-string***,** *separator-mode***,** *max-parts* **)
split(** *source-string***,** *separator-pattern, separator-mode***,** *max-parts* **)**
*source-string***.split(** **)**
*source-string***.split(** *separator-pattern* **)**
*source-string***.split(** *separator-mode* **)**
*source-string***.split(** *max-parts* **)**
*source-string***.split(** *separator-pattern, separator-mode* **)**
*source-string***.split(** *separator-pattern,* *max-parts* **)**
*source-string***.split(** *separator-mode***,** *max-parts* **)**
*source-string***.split(** *separator-pattern, separator-mode***,** *max-parts* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-string* | The original String which will be split. If the source-string is null, the result of the split function will also be null. |
| *separator-pattern* | A regular expression identifying the separators. If null or omitted, the default separator-pattern is ",". The variation of the regular expression language used is provided by Java and is documented under [Sun Microsystem's Pattern class](http://java.sun.com/j2se/1.5.0/docs/api/java/util/regex/Pattern.html). If the separator-pattern has incorrect syntax, the result of the split function will be null. If the separator pattern is not found in the source string, then the result will be an array of one element with the source-string at index zero. |
| *separator-mode* | The separator-mode parameter determines what happens to the separators. If the separator-mode is omitted, or null then the separator characters will be included at the end of the split-part that preceeded them. Therefore, each of the strings in result array, except the last, will end with a separator. If the separator-mode is false, the separators will be entirely omitted from the result array. Only the text between the separators will be included. If the separator-mode is true, the separators will be included as separate values in the result array. Therefore, the array will consist of a split-part, then a separator, then a split-part, then a separator, etc. and finally ending in a split-part. Another way of thinking of it is that the split-parts will be at even indexes beginning with 0, and the separators will be at odd indexes beginning at 1. |
| *max-parts* | The max-parts parameter determines the maximum number of parts which the source string will be split into, not counting separators. If max-parts is a negative number, zero, omitted or null then there is no limit and the string will be split until no more separators are found. If max-parts is zero, omitted or null then the last split-part will be omitted if it is empty. In other words, if the source-string ends with a sparator, the final empty-string after that separator will not be included in the result. If max-parts is a positive number then the source-string will be split into, at most, that many parts beginning from the start of the source-string. When sufficient parts have been found, any remaining parts will be included, as is and including any additional separators, in the final part. In this case, if the separator-mode is anything other than true, the length of the result array will be less than or equal to max-parts. If the separator-mode is true, the length of the result array will be less than or equal to max-parts + max-parts - 1. |
 **Example:** The [getUsernames()](/relate-script/functions/advanced-functions/get-security-group-b-find-security-group) function of a security group object returms a new-line delimited list of usernames. To get the individual usernames of the members of a security group with an id of "myStaff" you could write: userNameList = getSecurityGroup("myStaff").getUsernames().split("\n", false);

It is then quite easy to loop through the list and [send each an individual alert](/relate-script/functions/advanced-functions/alert-functions/get-new-alert-b-create-alert), for instance:
 for (i in userNameList) {
 getNewAlert(userNameList[i], "signature", "Just a friendly alert to say hello!", curDateTime() + toDateDiff("P1D"));
 }

[/shared/custompage/custompage.jsp?_event=view&_id=445506___8561](/shared/custompage/custompage.jsp?_event=view&_id=445506___8561) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3165](/shared/custompage/custompage.jsp?_event=view&_id=445506___3165)

 
