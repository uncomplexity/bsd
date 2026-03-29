

- Help Menu Instructions

---
To create the Help Menu in a Manage Site, a few items are required.

1. The "Help URLs" Form needs to be imported and attached to the Facility/Community record. ([XML](/download/123321_U129801__762537/helpurl.xml))
 - For this to work, the "Help URL" field needs a custom property of "SID=HELPURL
"
 - For this to work, the "Name" field needs a custom property of "SID=HELPURLNAME
"
2. Create the "Help Menu Util" Query
 - Query Name: Help Menu Util
 - Query Description: DO NOT MODIFY THIS QUERY. IT CONTROLS THE HELP MENU.
 - Record Type: Community/Facility
 - Custom Props: SID=HELPMENUQUERY
 - Unit Setting: Unit which the query is displayed
 - Search Criteria: Help URLs -> Deactivate -> Not Equals -> True
 - Display Column: Facility/Community Name
 - Display Column: Help URLs -> Help URL
 - Display Column: Help URLs -> Name
 - Destination: Help URLs
3. For the menu to show, the particular Unit needs at least one active entry (per the queries search criteria)
4. A system can be built using Relate Script to copy entries up and down the unit structure if needed
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11661](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11661) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11861](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11861)

 
