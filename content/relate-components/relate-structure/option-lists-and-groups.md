

- Option Lists and Groups

---
An option list is a very simple concept: a list of options. A list of options is used by a field on a form to present a list of options to the user. Options can also be grouped to organize them for easier selection. None of the settings of an option list are functional: They just identify and classify the option list, but do not affect behavior. The power and function of option lists is found in the options contained within the list and in the fields which use the option list. The Settings and interface elements available when creating and editing option lists are described below.

| **Setting/Button** | **Description** |
| --- | --- |
| Name | The name of the list of options. This is used to identify the list in Relate Structure and when configuring form fields. |
| Description | A description of the list for the benefit of Relate administrators when viewing Relate Structure and editing the option list. |
| Folder Location | The folder within Relate Structure where the option list will reside. |
| Bundle Settings | Option lists may belong to bundles, assuming bundles have been created. These settings are complex and virtually identical for all Relate components. They are described in the [article on bundles](/relate-components/other-elements-and-functions/bundles). |
| Fixed Id/Frozen | These settings are available only to BlueStep staff and are used to identify and lock option lists that are used by the underlying platform logic. By convention, positive numbers are reserved for use by the Java development team. Negative numbers can be used for other purposes. |
| Custom Lookup Properties | This setting is used to add additional identifying attributes as a part of the underlying platform logic. They work exactly the same as in other components, except there is currently no way to used them for anything outside the platform logic. For this reason the setting is hidden except from BlueStep staff. |
| Reorder Button | Reorders the display order of the list of options and groups of the option list. Option may also have a sort order, independent of display order. |
| Add Button | The add button adds a single option to the end of the list. It allows setting all properties of the option during its creation. |
| Add Multiple Button | The add multiple button allows many options to be created at once by typing or pasting their names into a multi-line memo box. The disadvantage to this technique is that only the name can be set during creation. However, the "edit all options" button makes setting all remaining settings a snap. |
| Add Group Button | The add group button creates a new grouping of options. Organizing options into groups can make lists of options easier to use. Groups are described in more detail below. |
| Edit All Options | Allows editing the properties of all options on a single edit screen in a table format with a row for each option and a column for each setting. |
| Display Column | The "Display" column header in the list of options is clickable. Clicking the column header arranges the options and option groups in display order. |
| Sort Column | The "Sort" column header is also clickable. Clicking the column header arranges the options in sort order with groups hidden. |
| Set sort order alphabetically | This link, at the bottom of the list of options, instantly sets the sort order of all options to alphabetical order. |
| Set sort order to display order | This link, at the bottom of the list of options, instantly sets the sort order of all options to match the display order. |
| Auto-compute styles from labels | This link, at the bottom of the list of options, is used to convert legacy configuration to new-and-improved configuration. Namely, option items did not have CSS style and class settings in the past. The style information was encoded into the labels of the option items using HTML. Clicking the auto-compute styles attempts to extract style information from option labels and put it in the appropriate CSS setting. Then all HTML is stripped out of the label leaving a plain-text label. Additionally, HTML comments were sometimes added as prefixes to options to create a sort order, which previously was always alphabetical. Using the "set sort order alphabetically" function prior to clicking the auto-compute styles link correctly resolves this issue. |
Option GroupsOption groups are groupings or sub-groupings of options within an option list. Grouping options within large option lists can aid users in quickly locating and identifying options. Sub-groups are allowed to be created. However, more than one layer of grouping is not supported by any existing browsers *within select lists*. For this reason, if you need sub-groups you should only display the option list using radio or checkbox option fields. Groups and sub-groups are not really compatible with lookup-style option fields. With lookup-style select fields the group name is displayed as hover-text during selection of the option but groups are otherwise not used.When a option group is deleted, the options and/or sub-groups within the group are not deleted. They just move up to the parent group or option list.

| **Setting/Button** | **Description** |
| --- | --- |
| Name | The name of the group. |
| Group | The group that this group will belong to. This setting is only available if other groups exist. |
| CSS Style | The CSS Style to be applied to the group name when displayed. If displayed in a select list, only minor font changes, such as color, are allowed by most browsers. Firefox supports much broader styling of option groups. If displayed in a radio or checkbox group, full CSS applies. |
| CSS Class | The CSS Class to be applied to the group name when displayed. As with CSS styles, there are significant limitations in most browsers select-list styling capabilities. |
| Bundle Settings | Option groups may belong to bundles, assuming bundles have been created. These settings are complex and virtually identical for all Relate components. They are described in the [article on bundles](/relate-components/other-elements-and-functions/bundles). |
| Custom Lookup Properties | This setting is used to add additional identifying attributes as a part of the underlying platform logic. They work exactly the same as in other components, except there is currently no way to used them for anything outside the platform logic. For this reason the setting is hidden except from BlueStep staff. |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8521](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8521) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9121](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___9121)

 
