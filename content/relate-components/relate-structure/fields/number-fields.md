

- Number Fields

---
Number fields hold either a whole or rational number (integer or floating point in geek-speak). These are distict data types in Relate Script, so changing the format can actually break formulas. Number fields may also be formatted a US dollar amount, but internally they are still just a floating point number. Most of the settings for number fields are generic settings that apply to many field types. The only real differences are in the format and related options and in the default value.FormatA number field may have three different formats. The maximum and minimum allowable values may also be restricted.

| **Format/Setting** | **Description** |
| --- | --- |
| Whole Number | Allows a whole or integer number. This is a number with nothing after the decimal point. |
| Decimal | Allows a rational, floating point or decimal number. This is a number which can have digits after the decimal point. |
| Currency | Allows a decimal number with up to 2 digits after the decimal point. The number will be displayed as a U.S. dollar amount. |
| Maximum | The highest allowable value that may be entered. |
| Maximum | The lowest allowable value that may be entered. |
DefaultThe default value may be specified or be populated automatically with a unique value.

| **Setting** | **Description** |
| --- | --- |
| Specific Value | The default is a set value. |
| Unique ID Number | The system will provide an integer value that is guarenteed to be unique. Each number provided will be greater than the previous number. They are not generally sequential and frequently skip one or more numbers. The uniqueness of the number is not just for a single number field, but for all fields configured with a unique id default value. Also, the field will be read-only and cannot be made editable so long as the default value is configured to this option. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8283](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8283) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8285](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8285)

 
