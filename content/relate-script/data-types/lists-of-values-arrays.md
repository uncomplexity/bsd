

- Lists of Values: Arrays

---
Relate Script Arrays are lists of key/value pairs. This type of data is referred to in other languages as a map, dictionary, associative array or sparse array. Relate Script arrays can have multiple indexes (be multi-dimensional) and each index can be of any data type. A new array of String values indexed by Integer values would be created as:
 x = new String[Integer]
You would add elements to the array like this:
 x[1] = "Sunday"
 x[2] = "Monday"
A multi-dimensional array would be created like this:
 x = new String[Integer][Date] OR x = new String[Integer, Date]You can use Array values to model a mathematical set. For a set of String values you would do this:
 mySet = new Boolean[String]
To add to the set, you would write:
 mySet["brown"] = true
To remove, you would say:
 mySet["yellow"] = false OR mySet["yellow"] = null
To test to see if a particular String value is in the set, you would write
 if (mySet["green"] == true) { /* do something */ }Array values work particularly well with [for/in looping statements](/relate-script/statements/the-for-in-loop-statement), which allow you to go through the entries in order by the index. There are also three functions available for Array values: size, firstIndex and lastIndex. These functions are described in the section on functions.Take note that this is not an object: all values must be of the same data type.More information and examples can be found on the page titled *[The Array Creation Statement](/relate-script/statements/the-array-creation-statement)*. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3142](/shared/custompage/custompage.jsp?_event=view&_id=445506___3142) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3126](/shared/custompage/custompage.jsp?_event=view&_id=445506___3126)

 
