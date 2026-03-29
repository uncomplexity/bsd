

- getCurrentNav(...)

---
The getCurrentNav(...) function is used to get information about the current site's navigation. Specifically, it gives you an object representing the currently navigated page, from which you can traverse the site structure tree to access information about all of the pages available through the site's navigation. Pages which the currently logged in user does not have permission to and pages which are marked to not show in navigation are not accessible through this function. The result of getCurrentNav(...) is a navigation node object, described below.**Syntax:** **getCurrentNav( )
getCurrentNav(** *startAtRoot* **)**
**getCurrentNav(** *startAtRoot***,** *includeHidden* **)** *startAtRoot***.getCurrentNav(** **)**
*startAtRoot***.getCurrentNav(** *includeHidden* **)**

| **Parameter** | **Description** |
| --- | --- |
| *startAtRoot* | A Boolean value indicating whether the initial navigation node return should be the currently navigated page or the root page (the site). The default is false. |
| *includeHidden* | A Boolean value indicating whether to include pages that are marked 'hidden in navigation' in the navigation tree returned by this function. The default is false. |**Navigation Node Object**

| **Field/Function** | **Description** |
| --- | --- |
| *typeName* | A String value indicating the type of page represented by this node. |
| *icon* | A String value containing the URL of the standard BlueStep icon corresponding to the type of page. |
| *iconHTML* | A String value containing an HTML img tag which will display the standard BlueStep icon corresponding to the type of page. |
| *bigIcon* | A String value containing the URL of a larger BlueStep icon corresponding to the type of page. |
| *bigIconHTML* | A String value containing an HTML img tag which will display a larger BlueStep icon corresponding to the type of page. |
| *url* | A String value containing the URL of the page represented by this node. |
| *description* | A String value containing the description of the page represented by this node. |
| *id* | A String value containing the internal id of the page represented by this node. |
| *label* | A String value containing the name/label of the page represented by this node. |
| *level* | An Integer value indicating the level of the page within the navigation tree. Primary navigation is level 1. Children of these navigation items are level 2, or secondary navigation. Children of level 2 are level 3 and so forth. |
| *index* | An Integer value containing the index of the current node in its parent's list of children. |
| *childCount* | An Integer value indicating the number of child pages available from this node. |
| *finalSelected* | A Boolean value indicating whether this node represents the currently navigated page. |
| *selected* | A Boolean value indicating whether this node represents the currently navigated page or one of its parent pages. |
| *isRoot* | A Boolean value indicating whether this is the root node. The root node represents the site itself, is at level 0, and has no parent. |
| *isLeaf* | A Boolean value indicating whether this node is childless. |
| *parent* | This property is another navigation node object representing the parent node of this node. |
| *children* | This property is an array of navigation node objects indexed by Integers starting at 0 and representing the child nodes of this node. |
| *customProps* | An array value of type String[String] containing the custom look-up properties of the current page. |
| *findByLabel(label) findByLabel(label, searchAll)* | This function finds a child page with a specific label. If the seachAll parameter is true, then it also searches the children of the children, and their children until all sub-pages of the current page have been searched. It does this via a depth traversal, meaning that if two children have the label that is being searched for, it will choose a page with a smaller 'level' value over a page with a higher 'level' value. If the pages are at the same level, it will choose the one that comes first. |
| *lookup(name, value)* | The function works much like the findByLabel() function. It searches the entire navigation tree, at or below the current node, for a page with a matching custom look-up property. Since pages of different types can have the same property, and pages of the same type can have the same property if the name of the property begins with an under-bar, there is no guarentee that only one page will have the given property. In this case the first such page will be returned as determined by a depth traversal of the navigation tree. |
[B.siteNavigation()](/jslib/docs/B/classes/bluestep.b.html#sitenavigation "B.siteNavigation()") [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9382](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9382) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8362](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8362)

 
