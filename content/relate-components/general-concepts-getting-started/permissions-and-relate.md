<table border="0" cellpadding="0" width="100%" cellspacing="0"><tbody><tr>

<td valign="top"><div style="min-height: 350px; visibility: visible;" id="contentArea">

<table border="0" cellpadding="0" width="100%" cellspacing="0">



</table>


<div class="pageletDiv pageletBody0">

</div>





















<div style="float:right; margin-right:6px"></div>
<div class="pageHeader">Permissions and Relate</div>
<div style="margin-bottom: 6px" class="pageRule"><hr></div>




<h3 style="margin-bottom: 0;">Relate and Security</h3>
<p style="margin-top: 0;">Relate inherits its permission capabilities from the BlueStep platform. &nbsp;Namely, groups or individuals can be granted various permission levels, or <span>roles</span>, to different pieces of data throughout the system. &nbsp;However, Relate is also unique in many ways with regard to permissions. &nbsp;Below are some of the highlights:</p>
<ul>
<li>Different types of Relate configuration data have different roles. &nbsp;Record types and categories have only two roles. &nbsp;Forms and fields have 4 roles. &nbsp;Other Relate items have standard roles. &nbsp;The way that these roles differ from standard roles is complex, but you can get the highlights by reading the legend at the bottom of each type of permission screen.</li>
<li>The "creator privilege" normally grants whoever first created a piece of data permanent editor permission, but with most Relate items this is not the case. &nbsp;By default the creator of Relate data (form entries) has no greater access than anyone else with the same account settings. &nbsp;However, when configuring Relate forms and fields there is a special security group, Relate Creator, which can be used to grant special access to the creator of an entry. &nbsp;By granting permission to the Relate Creator group, the original creator of a form entry may be given access to view or edit data that other users cannot.</li>
<li>Relate configuration elements are not the actual data being protected by security. &nbsp;The Relate records with their various form entries are primarily what is being protected. &nbsp;However, there is no way to set permissions on an individual record or on a form entry. &nbsp;So how do permission work? &nbsp;When talking about permissions and Relate configuration elements it is useful to think of the Relate elements as windows or filters to the underlying data. &nbsp;The window on a house have blinds can be opened or closed to reveal the view on the other side. &nbsp;Relate permission work similarly: &nbsp;Permission to the Relate element grants the ability to create, view or modify the form entry data via that element. &nbsp;In many instances Relate elements are chained together or nested within each other. &nbsp;In such cases the end user must have permission to see through all of the layers of configuration, or all of the windows, in order to view the data at the end of the chain.</li>
<li>Relate has a special security group "Relate Self" which is used primarily to allow a user access to the data associated with their own account.</li>
</ul>
<h3 style="margin-bottom: 0;">Security and Relate</h3>
<p style="margin-top: 0;">Access to Relate is controlled by security, but Relate also defines and controls many aspects of security and authentication. &nbsp;A user account in the BlueStep system is actually a Relate record. &nbsp;The "Individual" record type, the "User" category and the "Online Profile" form define a user account. &nbsp;Since a user account is a Relate record additional&nbsp;categories and forms&nbsp;can be added to the account and viewed and edited in the "My Account" area of the BlueStep platform.</p>
<p style="margin-top: 0;">Also, any data attached to an account can be used to control security group membership using special <span>dynamic security groups</span>. &nbsp;With dynamic security groups, any information associated with a user account&nbsp;via Relate&nbsp;can be used to define security group membership rules. &nbsp;These security group rules may be as simple as "if the box is checked, you're in the group" or more complex, bordering-on-insanity rules like "You must have an active RN credential recorded and have logged least 35 hours on your time card in one of the last two pay periods." &nbsp;You can guess what side of the border such a rule is on.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Exercise 1: Permission Levels</span></p>
<p style="margin-top: 0;">Get access to a non-administrative account.&nbsp; You may want to create a test account for this purpose.&nbsp; On each type of relate element, assign different permission levels to your test user.&nbsp; Use the "Temporary Login" feature found on the "Tools" menu&nbsp;to quickly switch between your test account&nbsp;and administrative account.&nbsp; Optionally you may want to login using two&nbsp;different sessions (use two different browsers such as Internet Explorer and Firefox OR access&nbsp;BlueStep using two different domains of the same organization.)&nbsp; Test each permission level to see how it effects what the test account sees.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Exercise 2: Dynamic Groups</span></p>
<p style="margin-top: 0;">Use the same test account as in exercise 1.&nbsp; Figure out how an existing dynamic security group is configured, or create your own dynamic security group.&nbsp; See if you can make your test user a member of the group and remove them from the group.&nbsp; You can see what security groups a user account is a member of using the "User Lookup" tool found in organization administration site&nbsp;and unit administration sites.&nbsp;&nbsp;Grant&nbsp;access for your dynamic security group&nbsp;to various Relate elements and check out the change from the test user's perspective.&nbsp; For an advanced excercise, try out the unit security settings on the security group.&nbsp; Move a Relate record from unit to unit and change the unit security settings while observing the effect on the test user's access level.&nbsp; For&nbsp;extra credit&nbsp;you may want to&nbsp;try making the user part of multple groups and explore the complex interactions that are possible with multiple groups, and multiple relate elements, each with differing&nbsp;permissions,&nbsp;displayed together on a page.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Exercise 3: Special Security Groups</span></p>
<p style="margin-top: 0;">Try using the "Relate Self" and "Relate Creator" security groups.&nbsp; You will need multiple test accounts to&nbsp;test the Relate Creator group.&nbsp; See how Relate Self security effects anonomous users during account sign-up.</p>








<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8221"><img src="/static/26.03.11.09/images/buttons/btn_previous_step.gif" alt="" style="width:70px;height:16px;border:0;margin:6px 0;"></a>
<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8441"><img src="/static/26.03.11.09/images/buttons/btn_next_step.gif" alt="" style="width:52px;height:16px;border:0;margin:6px 0;"></a>
</div></td>
</tr></tbody></table>

 
