

- Multi-Entry Reports

---
Multi-entry reports are a table-based report with rows and columns. They work with the entries of a single multi-entry form for a single record at at time. The result of a multi-entry report is always a list of form entries of a single form and showing various fields from that form in columns. Multi-entry reports can replace the default all-entries/summary-fields view of a multi-entry form in record navigation. They can filter the list of entries or change the displayed columns. Multi-entry reports can also be displayed within a merge report and can be utilized by formulas. Multi-entry reports are created and edit with a multi-step wizard style interface. The properties and settings of multi-entry reports are listed below and grouped by wizard step.

| **Step 1 - Name & Description** | **Description** |
| --- | --- |
| *Report Name* | The name of the multi-entry report as seen by Relate administrators. |
| *Report Label* | The name of the multi-entry report as seen on end user interface pages, especially when replacing the default listing of a multi-entry form. |
| *Description* | The description of the report as seen by Relate administrators on the relate structure and while editing the multi-entry report. |
| *Folder Location* | The folder in Relate structure where the multi-entry report resides. |
| *Primary Form* | The multi-entry form that this multi-entry report works with. The primary form can only be set during creation of a new multi-entry report. It is read-only when editing a report. |
| *Default report* | The default report setting is a checkbox which, if checked, causes the default listing of form entries for the multi-entry form to be replaced by this report. If the default listing has previously been replaced by another multi-entry report, checking this box causes it to be unchecked on the prior default multi-entry report. |
| *Bundle Settings* | Multi-entry reports may belong to bundles, assuming bundles have been created. These settings are complex and virtually identical for all Relate components. They are described in the [article on bundles](/relate-components/other-elements-and-functions/bundles). |
| *Fixed Id/Frozen* | These settings are available only to BlueStep staff and are used to identify and lock multi-entry reports that are used by the underlying platform logic. By convention, positive numbers are reserved for use by the Java development team. Negative numbers can be used for other purposes. |
| *Custom Lookup Properties* | This setting is used to add additional identifying attributes as a part of the underlying platform logic. They work exactly the same as in other components, except there is currently no way to used them for anything outside the platform logic. For this reason the setting is hidden except from BlueStep staff. |
| *SQL Hint* | Allows an Oracle SQL hint to be added to the underlying SQL query to assist in optimizing the query plan. This setting is only available to BlueStep staff. |
| **Step 2 - Search Criteria** | **Description** |
| *Criteria join directive* | The first setting determines how the search criteria will be interpreted and combined. Three options are available: ALL, ANY and NONE. The ALL option requires all of the search criteria to be met by each entry shown. The ANY option requires that one or more of the criteria be met by each entry shown. The NONE option reverses the ANY option and shows only entries that meet none of the search criteria. |
| *Field Name* | Each search criteria begins with a field to which the search criteria applies. All of the searchable fields are potential candidates for searching. Some fields are not searchable either because the do not store data (spacer, header, merge-report fields) or because the data is not in a searchable format (memo, biometric, document, relationship fields). |
| *Operator* | The list of available operations that can be used to search. Different field types have different operators. For instance, text fields have starts with, contains, etc. while multi-select fields have all-of, none-of, etc. A full list of operators for each field type can be found in a [sub-article under the queries and report article](/relate-components/other-elements-and-functions/queries-reports/searching). |
| *Value* | The value being searched for. Again, this is highly dependent on the field type. The various search values that are possible are described in a [sub-article under the queries and reports article](/relate-components/other-elements-and-functions/queries-reports/searching). |
| **Step 3 - Display Columns** | **Description** |
| *Field/Report Name* | Each display column can be either a field from the primary form, or a merge-report with the same primary form as the multi-entry report. All fields except header fields, spacer fields and password fields can be displayed in a report. If a merge report is chosen as a display column, it may not actually display if the record where the report is being displayed does not match the record type and category requirements of the merge report. |
| *Sort Order* | Determines which display columns will determine the order of the result. Multiple columns may be chosen and the result will be sorted on the column marked 1, then 2 and so on. If two columns have the same sort order value, the system will pick one to sort on before the other. |
| *Allow Word Wrap* | Some data looks better if it is not broken up over multiple lines. Checking this box causes the system to try to keep the data on a single line. This is not always possible. For instance, text fields edited as multi-line memos may contain line breaks in the data which will still be shown regardless of this setting. |
| *Summary Length* | Memo fields may contain a very large amount of data. It may not be desirable to display the entire memo in a report. By setting a summary length, the first part of the memo value will be displayed, along with a "more..." button that shows the whole value. |
| **Step 4 - Group By** | **Description** |
| *Group By* | Grouping allows rows with the same value in a particular field to be grouped and displayed together. In order to group, the data must first be sorted on the grouping column. Sort order defined on a display column will sort data within groups. As with sorting, there can be a first grouping, second grouping and so forth. |
| *Total On* | Allows numeric columns to be totalled to get the sum of all of the value in that column. If grouping is also configured, subtotals will be shown for each group and subgroup. |
| *Totals Only* | If checked, the report will only show the totals and subtotals but not show the actual data. This is generally only helpful when both totalling and grouping are configured. Since the grouping shows the common value which defines the group along with the subtotals, each group and its subtotal can be identified. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___9121](/shared/custompage/custompage.jsp?_event=view&_id=445506___9121) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8191](/shared/custompage/custompage.jsp?_event=view&_id=445506___8191)

 
