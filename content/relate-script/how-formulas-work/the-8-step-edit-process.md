

- The 8 Step Edit Process

---
What formulas run when Relate data is edited? This may seem a simple question, but it is far more complex than might be imagined. When editing a form entry many actions take place. For any given form entry, the steps always occur in the same order, but some steps may be skipped depending on the circumstances. First we will look at the case of a single form being updated. Simultaneous edits to multiple form entries will be discussed in the next section.

1. **Default values are applied based on field settings.** This step is skipped if the entry is not being created (or filled out for the first time).
2. **Pre-edit formula run.**
3. **User edits are applied.** This step is very complicated. The process may stop here. Also, the first three steps may be repeated several times before proceeding to the next step. More details are given below.
4. **Field formulas run.** There also is a specific order in which field formulas run, if there are formulas on multiple fields. See the section on field formulas for details.
5. **Pre-save formulas run.**
6. **Data is saved.**
7. **Post-save formulas run.**
8. **Data is saved a second time.** This step is skipped if no data was changed during step 7.
**Details about step 3:** Step 3 is a major decision point. There are many factors which determine whether the process will continue or stop at this step.

- User edits are applied in step 3. If the user does not choose to save at this step, then the process does not proceed. Often the user decides to continue the edit on another page, such as in a wizard or when switching to an alternate view. In this case, the first three steps are re-applied before the edit continues on the new page.
- The term 'user edits' is fairly loose. During an import, 'user edits' is the step where the data is actually imported. Also, if the edit is being initiated by another formula, such as a scheduled formula, this step is where those edits normally occur. However, edits by other formulas may sometimes happen at any step from 3 or beyond, as discussed in the section on multiple forms and multiple formulas.
- Finally, even if the user or other process requests that the data be saved, the process may not proceed past step 3. If no data is actually changed in step 3, the process stops. But there are two exceptions even to this rule. If the entry is a new entry (for instance a single entry form being filled out for the first time), the fact that the data is being created constitutes a change, even if the default values are left untouched. Therefore, the process will proceed. Also, if a field formula or pre-save formula has been changed since the data in the form was last changed, the process will continue, thus allowing the new formula to do its fresh calculations on the old data.
**Multiple Forms and Multiple Formulas**
Often pre-save and post-save formulas are used to change data on one form when another is edited. What happens when multiple formulas are changing data on multiple forms? Relate keeps a list of all the form entries that are being edited in the current operation. It attempts to keep all edits on the same step in the edit process. Also, it never allows returning to a previous step during the current operation. The only way any step will be repeated is if the entire operation is halted by the user during step 3, then continued on another page. This would constitute a separate operation with the first three steps re-applied from the previous incomplete edit. Let's look at an example. **Example:** Imagine a form, FormA, with a pre-save formula, FormulaA, that modifies data on a second form, FormB. FormB has a post-save formula, FormulaB, which modifies data on FormA. What happens when the user edits data on FormA?

- FormA is processed through the first 3 step to where user edits are applied.
- Assuming the user actually made a change during the edit, the process proceeds to step 4 (field formulas), then 5 (pre-save) and FormulaA is begins to run. But since FormulaA modifies data on FormB, it must be prepared for editing. FormulaA is suspended and FormB is processed through steps 1 and 2.
- FormulaA is resumed, actually runs and does its modifications to FormB. This constitutes step 3 of the edit process for FormB.
- Since FormA has completed the first 5 steps and FormB is on step 3, the process continues to step 4 and 5 for FormB (again assuming changes actually occurred).
- Both FormA and FormB are saved during step 6.
- Now comes step 7, and it is FormulaB's turn. It runs and makes changes to FormA. FormA is already in an edit state, so none of the first 6 steps are repeated.
- Since FormA was changed by FormulaB, it is saved again in step 8. FormB is not saved in step 8 since is has not been modified since step 6.
Okay, now we know what happens if the user edits FormA. But what happens if the user instead chooses to edit FormB?

- FormB is processed through the first 3 steps to where user edits are applied.
- Assuming the user actually made a change during the edit, the process proceeds to step 4 (field formulas), 5 (pre-save) and 6 (save data).
- Then on step 7 FormulaB is begins to run. But since FormulaB modifies data on FormA, it must be prepared for editing. FormulaB is suspended and FormA is processed through steps 1 and 2.
- FormulaB is resumed and does its modifications to FormA. This constitutes step 3 of the edit process for FormA.
- Since FormB has completed the first 7 steps and FormA is on step 3, the process continues to step 4 and 5 for FormA (again assuming changes actually occured). On step 5 for FormA, FormulaA runs and makes changes to FormB.
- FormA, on step 5, is still behind FormB, on step 7. So FormA proceeds to step 6 and is saved.
- FormA, still behind in the process, now goes through step 7.
- Since FormB was changed by FormulaA, it is saved again in step 8. FormA is not saved in step 8 since it has not been modified since step 6.
You can imagine the complexity of determining the order in which things happen when there are more formulas modifying more form entries. This is important because a formula programmer may try to write formulas which depend on values calculated by other formulas. For instance, FormulaB runs before FormulaA only when FormB is being edited. If FormulaA depends on results calculated by FormulaB the formula author must be sure that FormulaA will still work correctly in this case. [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3841](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3841) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3844](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3844)

 
