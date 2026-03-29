<table cellpadding="0" width="100%" cellspacing="0" border="0"><tbody><tr>

<td valign="top"><div style="min-height: 350px; visibility: visible;" id="contentArea">

<table cellspacing="0" width="100%" cellpadding="0" border="0">



</table>


<div class="pageletDiv pageletBody0">

</div>





















<div style="float:right; margin-right:6px"></div>
<div class="pageHeader">Relate Within the BlueStep Platform</div>
<div style="margin-bottom: 6px" class="pageRule"><hr></div>




<p>Relate is a rapid application development environment.&nbsp; It allows tech savvy individuals with little or no programming experience to create enterprise-scalable, web-based data storage and retrieval systems.&nbsp; It allows a person with programming skills to create full blown dynamic web applications while avoiding many of the error prone and time-consuming tasks associated with traditional client/server application development.</p>
<p>Relate&nbsp;resides within&nbsp;the BlueStep platform. &nbsp;The BlueStep platform is a <a href="https://en.wikipedia.org/wiki/Platform_as_a_service">platform as a service (PaaS)</a> offering which provides services through the cloud. &nbsp;The BlueStep platform provides comprehensive security features and hierarchical data storage capabilities&nbsp;compatible with modeling the needs of&nbsp;large multi-tiered organizations.&nbsp; The BlueStep platform also provides the tools to design websites which can incorporate application data and functionality created&nbsp;via Relate.&nbsp; The platform also provides many of the core technologies that allow dynamic configuration.&nbsp;&nbsp;Most of the data, content and interactions available&nbsp;to normal users can be configured and customized somewhere&nbsp;within the platform.&nbsp; However, most of these technologies are beyond the scope of this document.</p>
<p>For the purpose of understanding Relate, a few concepts from the BlueStep platform are important to understand.&nbsp; The BlueStep platform organizes all information into a hierarchy of components.&nbsp; At the top of the hierarchy is an&nbsp;<span>organization&nbsp;</span>corresponding to a single company that BlueStep does business with.&nbsp; Within the organization are&nbsp;<span>units</span>.&nbsp; A unit represents a branch of the parent company such as a region or office location.&nbsp; Each unit can have sub-units.&nbsp;&nbsp; BlueStep's largest clients have over 1000 units organized in 5 or more tiers.&nbsp; The&nbsp;upper level units&nbsp;generally represent regions, sub-regions or&nbsp;U.S. states&nbsp;while the units at the final tier represent brick-and-mortar offices.</p>
<p>Within the organization and within each unit and sub-unit there are entire websites of various&nbsp;types depending on their intended use.&nbsp;&nbsp;<span>Connect</span>&nbsp;sites are used mostly for publicly accessible sites.&nbsp;&nbsp;<em>(Side note:&nbsp; In BlueStep terminology Connect sites are often referred to as just "sites" while other types of sites are&nbsp;always referenced by their type.)</em>&nbsp; <span>HQ</span>&nbsp;sites are used primarily by internal staff members.&nbsp;&nbsp;<span>Team</span>&nbsp;sites are a workspace for collaborative groups.&nbsp;&nbsp;&nbsp;<span>Unit/Organization Administration</span>&nbsp;sites are used to administer and configure the BlueStep platform.&nbsp; Each site may have one or more domain names mapped to it.&nbsp; Generally these names are sub domains of bluestep.net such as mycompanyname.bluestep.net.&nbsp; However, the domain is just a jumping-off point.&nbsp; It is your entry portal into the BlueStep platform and determines the initial screen that is displayed.&nbsp; Any and all sites and data within the the BlueStep platform and belonging to that organization can be accessed via any of the domains mapped to the various sites within the umbrella organization.</p>
<p>Relate itself is a website&nbsp;residing directly&nbsp;within the root level organization.&nbsp; However, this is just the site where Relate is configured.&nbsp; Within the Relate site screens are designed, logic is defined, reports are created and many other settings are configured.&nbsp; However, the screens, data and logic which are designed and created within the Relate site can be made available on any site within the organization and its units and subunits.</p>
<p>Furthermore, the Relate site contains no actual data, only configuration information.&nbsp; The actual data that is created and utilized by a Relate custom application is stored within each of the units in the organization hierarchy.&nbsp; This allows each unit within the organization to create and utilize&nbsp;its own data without interfering with data from other units.&nbsp; Also the Relate data from sub-units is automatically visible&nbsp;in higher level units making roll-up reporting a snap.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">A Different Paradigm</span></p>
<p>Within the BlueStep platform everything is a component. &nbsp;Components can be created, viewed, edited and connected to each other. &nbsp;The components look and behave differently depending on their own settings and the ways they are connected to other components. &nbsp;Settings of individual components and connections between components define access levels, appearance and a wide variety of behaviors depending on the type of component. &nbsp;There are over 450 types of components within the BlueStep platform. &nbsp;Some types of components are used "under the hood" to make the system function, but many can be created and configured by users interacting with the platform.</p>
<p>Relate has only 14 types of core components that Relate administrators create and configure. &nbsp;Additionally, there are 10 types of components with connect Relate components to the rest of the BlueStep platform. &nbsp;These 24 types of components can be connected to each other in 43 distinct ways. &nbsp;Creating most components is simply a matter of clicking a few buttons and filling out a handful of required settings. &nbsp;Connections between components are generally created by selecting a component from a list while editing the settings of another component. &nbsp;However, the dynamic nature of these components allow the creation of entire software applications which can become very sophisticated and complex. &nbsp;Relate has powerful tools to simplify the process and assist Relate administrators in building, organizing and maintaining these software applications. &nbsp;Think of Relate components as digital building blocks which can be assembled to create almost anything you can imagine.</p>
<p>It is important to understand the basics of the BlueStep platform and where Relate is located relative to other major elements. &nbsp;Below are some suggested exercises to improve your understanding by exploring the BlueStep platform and the unit hierarchy.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Exploring Exercise: Organization Tree</span></p>
<p>Locate the "Organization Tree" on the "Tools" menu found in the upper right corner of most BlueStep pages (assuming you have permission). &nbsp;Also note that the "Organization Chart" and "Sites Map..." (found on the Sites menu) are subsets of the full organization tree. &nbsp;Note that every unit has a "Unit Administration" site which allows that unit to be configured. &nbsp;Also each unit has exactly one HQ (unless HQ is disabled). &nbsp;These two sites are automatically created in each unit, and no additional copies can exist. &nbsp;At the root unit, or organization, you will find an "Organization Administration" site instead of a unit administration site. &nbsp;Also at the root you will find "Team Landing" and most importantly the "Relate" administration site. &nbsp;Each unit may also have one or more Connect sites and Teams sites which are created via the unit administration site.</p>
<p><span style="font-size: 12pt; color: #426c95; font-weight: bold;">Explore and Create Exercise: Sites</span></p>
<p>Using the organization tree, navigate to different types of sites and note their similarities and differences. &nbsp;Within HQ, Connect, Team and Relate&nbsp;sites there is an "Admin" area which provides tools to administer the site.&nbsp; Connect and HQ have very similar administration area's, but the one in HQ is called "Sam" (long story) unless it has been renamed to something more sane like "Security". &nbsp;In any case, the administration area should be the last tab on the right. &nbsp;Team and Relate have admin areas that&nbsp;are quite different from other types of&nbsp;sites. &nbsp;Try creating a Team and/or Connect site and explore the administration options available.&nbsp;&nbsp;If you are a global admin, you will need to login as a local organization administrator to create a team.&nbsp; Look around the unit and organization administration sites to see what settings and tools are available, but be careful making changes here unless you are in a test organization. &nbsp;You may also want to create a new unit to experiment with.</p>








<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8194"><img style="width:70px;height:16px;border:0;margin:6px 0;" alt="" src="/static/26.03.11.09/images/buttons/btn_previous_step.gif"></a>
<a href="https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&amp;_id=445506___8195"><img src="/static/26.03.11.09/images/buttons/btn_next_step.gif" style="width:52px;height:16px;border:0;margin:6px 0;" alt=""></a>
</div></td>
</tr></tbody></table>

 
