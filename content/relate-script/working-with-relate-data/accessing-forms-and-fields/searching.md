

- Searching

---
When accessing Relate data from a multi-entry form or from a query or report, it is often difficult to locate the exact rows to be acted upon by the formula. Using the searching and sorting features can make this both simpler and tremendously more efficient. Below is a list of the types of searches available using the `addSearch(...)` functions of multi-entry data, queries and reports. It is organized by Relate field type, then operator. All operators have an alternate value which may be used.For more info on `addSearch()` see [Queries and Reports](/relate-script/working-with-relate-data/accessing-forms-and-fields/queries-and-reports) and [Multi-Entry Forms](/relate-script/working-with-relate-data/accessing-forms-and-fields/multi-entry-forms).

- **Field Type** **Operator** **Alternate** **Description**
- Text "Starts With" "STARTS" When searching a text field, the value you are searching for should be either a String or null.**Example:** To search for a user with a username of "nancynurse" you would do something like this: users.addSearch("onlineProfile", "username", "=", "nancynurse");The example assumes you have defined a formula id, "users", for the All Users query. It also assumes that you have defined a formula id for the Online Profile form, "onlineProfile" and that the Username field has a formula id of "username". On a side note, defining a formula id for the Username field can only be done by BlueStep support staff.
- "Contains" "CONTAINS"
- "Ends With" "ENDS"
- "Sounds Like" "SOUNDX"
- "Equals" "="
- "Not Equals" "<>"
- "Greater Than" ">"
- "Less Than" "<"
- "Greater Than or Equals" ">="
- "Less Than or Equals" "<="
- Memo "Starts With" "STARTS" When searching a memo field with a starts/contains/ends search, the value you are searching for should be a String.
- "Contains" "CONTAINS"
- "Ends With" "ENDS"
- "NOT Starts With" "!STARTS"
- "NOT Contains" "!CONTAINS"
- "Not Ends With" "!ENDS"
- "Length =" "l=" When searching the length of the content of a memo field, the value you are search for should be an Integer greater than or equal to 0.
- "Length Not =" "l<>"
- "Length >" "l>"
- "Length <" "l<"
- Date/Time "Equals" "=" When searching a date/time field, the value you are searching for should be a Date, a Time, a DateTime, a String or null. You should use the same type of value for searching as the type of the field. Although you may search a time-only field using a Date value, you will probably not get the results you want. If searching for a String value, it MUST be formatted exactly as it would be formatted when editing a value in the field.
- "Not Equals" "<>"
- "After" ">"
- "Before" "<"
- "After or Equals" ">="
- "Before or Equals" "<="
- Number "Equals" "=" When searching a number field, the value you are searching for should be an Integer, a Float, a String or null. You should use the same type of value for searching as the type of the field, although you will get pretty good results either way. If searching for a String, any value will work, but only String values containing a well formatted number will give useful results.
- "Not Equals" "<>"
- "Greater Than" ">"
- "Less Than" "<"
- "Greater Than or Equals" ">="
- "Less Than or Equals" "<="
- Boolean "Equals" "=" When searching a boolean field, the value you are searching for should be a Boolean, a String or null. If searching for a String, any value will work, but any value other than "true" (case insensitive) will be equivalent to false.
- "Not Equals" "!="
- Single Select List "Is Any Of" "=" When searching single or multi select fields using any of the mathematical set operators, the value you are searching for should be a String, an Integer, an Array or null. If searching using a String, the string should be a comma delimited list of index values, or a newline delimited list of labels or export values. If an export value is the same as a label, the option with the label will be found. The label or export values must match exactly including spaces, punctuation and letter-case. If searching using an Integer value it will search for the option with the matching index.If searching using an Array value, two options are available. You may use a 'set' of Integer values defined as Boolean[Integer]. Also, you may use a 'list' of labels or export values defined as String[Integer]. In the case of a list of labels or export values, the indexes do not have to correspond to the indexes in the option list, nor do they have to be sequential.**Example:** Suppose you wish to search the state field of the contact information form to see if the first state, "AL", or the second state, "AK", is selected. There are at least four ways to do this with many other varitions possible: contactInfo.addSearch("state", "=", "AL\nAK")

contactInfo.addSearch("state", "=", "0,1")

searchSet = new Boolean[Integer];
searchSet[0] = true;
searchSet[1] = true;
contactInfo.addSearch("state", "=", searchSet)

searchList = new String[Integer];
searchList[1] = 'AL';
searchList[9] = 'AK';
contactInfo.addSearch("state", "=", searchList)

If searching for only one item, "AL" in this example, a fifth option is available: contactInfo.addSearch("state", "=", 0)
- "Is None Of" "NONE"
- Multi Select List "Has Any Of" "="
- "Has All Of" "ALL"
- "Has None Of" "NONE"
- "Has Not All Of" "NOT_ALL"
- "Exactly Equals" "EQUALS"
- "Does Not Equal" "<>"
- "# Selected =" "#=" When searching in a multi Select List field using any of the count operators, the value you are searching for should be an Integer or a String value. These are the only operators where searching for null is not allowed. If searching using a String value, the value should only contain digit characters.
- "# Selected Not =" "#<>"
- "# Selected >" "#>"
- "# Selected <" "#<"
- Signature & Biometric "Date Equals" "d=" The signature and biometric date search operators work exactly like the date/time search operators. They just have different names. When searching for a date string, it should take the following format: "MM/dd/yyyy h:mma" (e.g. 01/01/2000 12:00AM). When using curDate(), curDateTime(), timestamp, or other date fields in either the Date or DateTime format, no further formatting is necessary.
- "Date Not Equals" "d<>"
- "Date After" "d>"
- "Date Before" "d<"
- "Date After or Equals" "d>="
- "Date Before or Equals" "d<="
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___6722](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___6722) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11241](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11241)

 
