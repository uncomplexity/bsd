

- Text Data: String

---
A String is a sequence of characters or, simply stated, a piece of text. In Relate Script you can create a new String (a string literal) by enclosing it in either single or double quotation marks. For instance:
 "This is a String"
or
 'also a String'There is a third way of representing String literal values. You can use double acute characters (it's on the button above the tab button) to start and end a string. This type of string literal is for multi-line String values. All of the special character sequence stuff that is discussed below does not apply to multi-line String literals. A multi-line String allows most of these special characters without character sequences. A multi-line String literal is particularly handy for representing HTML within Relate Script. Here is an example: ``<div style="float:right">
 <img src="/images/buttons/btn_go.gif" alt="Go" onclick="alert('Go!!!')">
 </div>``

There is one special String, the empty String, and it looks like this "" or like this ''. It is a String with a length of 0. It should not be mistaken for null which is not a String at all, but simply the absence of data. Some very important details on this confusing concept of null vs. the empty-string can be found in the section on Relate text and memo fields.When you create a String in quotes, it cannot contain any line breaks. However, you can put in a line break using a special character sequence called an escape. Below is a list of all possible escapes.

| \n | Newline |
| --- | --- |
| \r | Carriage return |
| \t | Tab |
| \b | Backspace |
| \f | Formfeed. This character is a holdover from 'ancient' computer history when all computer output was printed, so Formfeed was used to start a fresh sheet of paper. |
| \u#### or \U#### | A Unicode character where #### is the character's 4-digit hex code |
| \\ | Backslash. Since all of the escapes begin with backslash, double backslash represents an actual backslash |
| \' | Single quote. This escape allows a single quote to be inside a single-quoted String. |
| \" | Double quote. This escape allows a double quote to be inside a double-quoted String. |
 Strings have only one property and it allows you to find out how many characters are in the String. The property is called length. You would use it like this:
 "abcdefg".length
or for a String variable named x you would write
 x.length
Length cannot be changed via the property, it is read-only.The most common action using Strings is to combine them to form longer Strings. This is called String concatenation and is discussed in the section on operators. The comparative operators also work with Strings.There are also many functions which work with Strings. There are functions for searching within a String, extracting a piece of a String and comparing Strings to see which comes first alphabetically. There are functions for converting Strings between upper and lower case, and between HTML and plain text. There are also functions to convert strings to other types of data such as numbers and dates. The descriptions of these functions are found in the section on functions. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3125](/shared/custompage/custompage.jsp?_event=view&_id=445506___3125) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3138](/shared/custompage/custompage.jsp?_event=view&_id=445506___3138)

 
