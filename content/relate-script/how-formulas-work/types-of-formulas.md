

- Types of Formulas

---
There are nine types of formulas in Relate. This article compares the nine types in detail. For a high level overview read the article titled "[How and Where are Formulas Used?](/relate-script/overview/how-and-where-are-formulas-used)" Formulas are available on merge reports, on form fields, as independent formulas and in end-points. However, more important than where to edit the different types of formulas is exactly when each type runs, what each type is capable of doing as it runs and what records the formula can run on. The chart below illustrates the differences and unique capabilities of the various types of fomulas:

| | **Field Formula** | **Merge Report Formula** | **Pre-Edit Formua** | **Pre-Save Formula** | **Post-Save Formula** | **Scheduled Formula** | **Pre-Delete Formula** | **On-demand Formula** | **End-Point Formula** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Can modify data** | X | | See Note | X | X | X | X | X | X |
| **Can modify data on multiple forms and records** | | | | X | X | X | X | X | X |
| **Can read data on multiple forms and records** | | X | X | X | X | X | X | X | X |
| **Runs when a report is viewed** | | X | | | | | | | |
| **Runs when data is edited** | X | | See Note | X | X | | | | |
| **Runs when data is deleted** | | | | | | | X | | |
| **Runs when no action is taken by any user** | | | | | | X | | X | |
| **May cause other formulas to run** | | | | X | X | X | | X | X |
| **May run because of another formula** | X | | X | X | X | | X | Always | X |
| **Runs after user edits and before saving** | X | | | X | | | | | |
| **Has access to the ID and URL of data which is *being created*** | | | | | X | See Note 3 | | See Note 3 | See Note 3 |
| **Can be told run on all existing data.** | X | | | | | See Note 2 | | | |
| **Can control exactly when and how many times it will execute.** | | | | | | X | | X | |
| **Can be easily disabled and re-enabled.** | | | X | X | X | X | X | X | X |
| **Can control database transactions** | | | | | | X | | X | X |
**Note on Pre-Edit formulas:** Pre-edit formulas are run in anticipation of data being edited even if, in the end, the edit never happens. They can modify data on the form that is about to be edited, but those modifications will never be saved if the edit is never completed.**Note 2:** It may be easy to run a scheduled formula on all existing data. However, in certain circustances it may be difficult or impossible to run a scheduled formula on every existing piece of data dependent on how record types and categories are configured to attach to the forms containing the data.**Note 3:** Since this type of formula has transaction control, newly created data can be stored mid-formula. After storage the id and url are available. [/shared/custompage/custompage.jsp?_event=view&_id=445506___6661](/shared/custompage/custompage.jsp?_event=view&_id=445506___6661) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3842](/shared/custompage/custompage.jsp?_event=view&_id=445506___3842)

 
