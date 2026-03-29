

- getRecordNav(...)

---
The getRecordNav(...) function is used to get information about the current record's navigation. Specifically, it gives you an object from which you can traverse the record navigation tree to access information about all of the navigable elements available to the record. The result of getRecordNav(...) is a navigation element object, described below. **IMPORTANT:** This is a costly function to execute. Each time it is executed the system must build the record navigation tree which requires loading and processing the *entire* Relate structure and potentially loading/processing many of the fields on each form as well. In a large Relate configuration this can literally involve over 100,000 operations and add more than a second to the load time of the page. On an un-cached organization this function can take over 30 seconds to execute (although, to be fair, record navigation will eventually need to be loaded anyway). Avoid calling this function when possible. Also you might organize your code so the function only needs to be called once, then all navigation elements utilized in one go.Syntax:
**getRecordNav(** *relateObject* **)**
**getRecordNav(** *relateObject***,** *options* **)**
*relateObject***.getRecordNav( )**
*relateObject***.getRecordNav(** *options* **)**

| **Parameter** | **Description** |
| --- | --- |
| *relateObject* | This must be a Relate field, form entry or multi-entry list belonging to the record for which navigation will be generated. |
| *options* | The options parameter is a String value containing a list of single-character codes which determine what portion of navigation will be accessed. If omitted, the navigation data will be the same as it would be in the current context. For example, if the current user is in HQ, then the function retrieves the full record navigation that is visible in HQ and that the current user has permission to. The codes are as follows: <br>w -- Exclude all wizardsf -- Exclude all formsr -- Exclude all merge-reports_ -- Exclude all folders (flatten the navigation structure)R -- Get navigation as it appears in Relate/HQ.C -- Get navigation as it appears in a Connect site.A -- Get all navigable elements that apply to the currect record regardless of whether they are visible in Relate/HQ, Connect or none of the above.! -- Get navigation without checking permissions.<br>The most common options will probably be "wf_A!" meaning, get all of the merge reports available to this record regardless of whether they show in navigation or the current user has permission to them.<br>**Notes:** Record navigation is, of course, drawn from Relate Structure, so the result of this function will always be sorted and organized the same as in Relate Structure. However, not everything in Relate Structure will apply to the current record. Also, merge-reports with a primary form that is multi-entry cannot be retrieved by this function since they cannot be navigated to without knowing which specific form entry to use. |**Navigation Element Object**

| **Field/Function** | **Description** |
| --- | --- |
| *typeName* | A String value indicating the type of Relate element represented by this object. |
| *icon* | A String value containing the URL of the standard BlueStep icon corresponding to the type of element. |
| *iconHTML* | A String value containing an HTML img tag which will display the standard BlueStep icon corresponding to the type of element. |
| *url* | A String value containing the URL of the Relate element represented by this object. |
| *id* | A String value containing the internal id of the Relate element represented by this object. |
| *label* | A String value containing the name/label of the Relate element represented by this object. |
| *level* | An Integer value indicating the level of the element within the navigation tree. Top level elements are at level 1. Children of these navigation items are level 2. Children of level 2 are level 3 and so forth. |
| *index* | An Integer value containing the index of the current object in its parent's list of children. |
| *childCount* | An Integer value indicating the number of child objects available from this object. |
| *isRoot* | A Boolean value indicating whether this is the root element. The root element is a folder named "root", is at level 0, and has no parent. The root is available even if folders are excluded. |
| *isLeaf* | A Boolean value indicating whether this element is childless. Said another way, this value is false for folders and true for everything else. |
| *parent* | This property is another navigation element object representing the parent object of this object. |
| *children* | This property is an array of navigation element objects indexed by Integers starting at 0 and representing the child objects of this object. |
| *customProps* | An array value of type String[String] containing the custom look-up properties of the current element. |
| *findByLabel(label)*findByLabel(label, type)**findByLabel(label, searchAll)**findByLabel(label, type, searchAll)** | This function finds a child element with a specific label. The type parameter is a single character String value indicating what type of element to look for. The possibilities are "f" for form, "r" for merge-report, "w" for wizard and "_" for folder. If the seachAll parameter is true, then the function also searches the children of the children, and their children until all sub-elements of the current object have been searched. It does this via a depth traversal, meaning that if two elements have the label that is being searched for, it will choose an element with a smaller 'level' value over an element with a higher 'level' value. If the elements are at the same level, it will choose the one that comes first. |
| *findByName(name)*findByName(name, type)**findByName(name, searchAll)**findByName(name, type, searchAll)** | This function works precisely like findByLabel but searches by name instead of label. |
| *lookupFolder(name, value) lookupForm(name, value) lookupMergeReport(name, value) lookupWizard(name, value)* | This function works much like the findByLabel and findByName functions but searches for a custom look-up property instead. There are, of course, four different functions for searching for different types of elements. Assuming you are searching for a property with a name that does not begin with an under-bar, there is at most, one possible result. If searching for a property with a name beginning with an under-bar, the property does not have to be unique. The first element found will be returned as determined by a depth traversal of the navigation tree. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8481](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8481) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8781](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8781)

 
