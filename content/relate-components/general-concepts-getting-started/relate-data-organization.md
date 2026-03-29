<table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr>

<td valign="top"><div style="min-height: 350px; visibility: visible;" id="contentArea">

<table cellpadding="0" border="0" cellspacing="0" width="100%">



</table>


<div class="pageletDiv pageletBody0">

</div>





















<div style="float:right; margin-right:6px"></div>
<div class="pageHeader">Relate Data Organization</div>
<div style="margin-bottom: 6px" class="pageRule"><hr></div>




<p>Most data created and used by a Relate custom application is stored in a <span>record</span>.&nbsp;&nbsp; A Relate record is a bundle of information that represents a single person or object in the real world.&nbsp;&nbsp; All of the information collected about a single staff member would be stored within a Relate record.&nbsp; The information tracked about a client would likewise be stored in a Relate record.&nbsp; Information about a facility such as it's maintainence schedule and rooms would be stored in a Relate record.&nbsp; A Relate record can be thought of as a file folder.&nbsp; A collection of Relate records might correspond to a filing cabinet.&nbsp; The computer needs to know what data&nbsp;may be stored within each record.&nbsp; This is defined via <a href="/relate-components/other-elements-and-functions/record-types-and-categories"><span>record types</span>, <span>record categories</span></a> and <span><a href="/relate-components/relate-structure/fields">forms</a></span>.</p>
<p>A Relate record begins with a <span>record type</span>.&nbsp; Each Relate record is of one-and-only-one type.&nbsp; A record's type is immutible meaning that once the record is assigned a type it can never be changed to another type.&nbsp; Examples of record types are "Person", "Facility", "Company" or "Inventory Item".&nbsp; Note that a company can never become a person in real-life.&nbsp; A person can never become an inventory item.&nbsp; These types are immutable and unchanging for the real-life things they represent.</p>
<p>Also attached to to a record are <span>record categories</span>.&nbsp; Categories apply to record types.&nbsp; Categories can change over time.&nbsp; For instance categories of the "Person" type might be "Staff", "Client", "Former Client", "Consultant", etc.&nbsp;&nbsp; Categories of the "Facility" type might be "Skilled Nursing" or "Assisted Living."&nbsp; Just because a person is your staff member today does not exclude them from becoming a client tomorrow.&nbsp; A facility can be repurposed from a skilled nursing facility to an assisted living facility.&nbsp; A single facility may accomodate both skilled nursing patients and assisted living patients at the same time and have both category designations&nbsp;(this is a Relate developer's nightmare--you'll know why soon enough).</p>
<p>Record types and categories determine what type of information can be collected and stored within the record.&nbsp; Specifically, attached to&nbsp;record types and categories are <span>forms</span>.&nbsp; A form is much like a paper form such as the&nbsp;1040 form you probably used for preparing your taxes.&nbsp; A form is a collection of <span>fields</span>.&nbsp; Fields define the type of data that can be stored and what the name of each piece of data will be.&nbsp; The IRS 1040 form, for instance, has <span>text</span> fields for your name and your spouse's name.&nbsp; It has a&nbsp;<span>number</span> field for your income.&nbsp; It has an&nbsp;<span>option</span> field for your filing status and so on.&nbsp; Text, number and option are the type of data to be stored.&nbsp; Name, spouse's name, income and filing status are the names given to the pieces of data collected.&nbsp; Forms and fields are defined as part of Relate configuration within the Relate site.&nbsp; If you are a geek you may have already guessed some of the technical details that make this work:&nbsp;&nbsp;A form defines a dynamically created database table and&nbsp;a field is a column in the table.</p>
<p>When you fill out a form with actual data you are creating an <span>entry</span> of that form.&nbsp; This would be like taking a piece of paper with the IRS 1040 form printed on it and filling it out.&nbsp; The result is not the form itself, it is an entry of the form.&nbsp; The entries that are the result of filling out various forms are the actual data that is attached to a Relate record.&nbsp;&nbsp;You do not have to always create a new entry;&nbsp;you can modify existing entries. &nbsp;If you're a geek you've probably guessed that an entry is one row in a database table.</p>
<p>In summary, Relate records have a record type and&nbsp;may have one or more record categories.&nbsp; The record type and categories determine what forms are available to be filled out.&nbsp; When a form is filled out it creates a form entry which is attached to&nbsp;the Relate record.&nbsp; Some forms can only be filled out once-per-record and create a single entry.&nbsp; We call these single-entry forms.&nbsp; Some forms can be filled out over-and-over creating many entries per record.&nbsp; These types of forms are called multi-entry forms.</p>
<p>When entering data via a Relate application a user works with one record at a time.&nbsp; Generally, on the left of the screen is a list of the forms that are available based on the type and categories of the record.&nbsp; Clicking a single-entry form takes you directly to a screen where you fill out that form and either create the initial entry or modify it.&nbsp; Clicking on a multi-entry form takes&nbsp;you&nbsp;to a list of entries.&nbsp; From this screen you may then choose an entry to edit, or choose to create a new entry.&nbsp; The list of available forms on the left is called the <span>record navigation</span>.&nbsp;&nbsp; If there are many forms they may be organized into folders.&nbsp; Other items may be listed in record navigation such as reports about the data contained in the record.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Exercise</span></p>
<p>Locate and open various kinds of records using the Queries and Reports areas of Relate.&nbsp; Explore the record navigation of each record and note the differences between them.&nbsp; For instance&nbsp;client record and staff record have a few similarities, but are mostly different.&nbsp; Try to find a single-entry form and a multi-entry form.&nbsp; Expand and collapse folders and see what else can be accessed via the record navigation.&nbsp;&nbsp;Learn to create records&nbsp;of different types and categories.&nbsp; Determine how to add or remove a category from a record.&nbsp; Observe the changes to the record navigation as categories are added and removed and as you view different types of records.&nbsp; If you are on a live site, be sure you don't modify real records and that your test records are easily identified as such.</p>








<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8193"><img alt="" src="/static/26.03.11.09/images/buttons/btn_previous_step.gif" style="width:70px;height:16px;border:0;margin:6px 0;"></a>
<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8201"><img style="width:52px;height:16px;border:0;margin:6px 0;" src="/static/26.03.11.09/images/buttons/btn_next_step.gif" alt=""></a>
</div></td>
</tr></tbody></table>

 
