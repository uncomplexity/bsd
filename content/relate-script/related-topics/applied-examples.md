

- Applied Examples

---

Data MigrationForm to FormThe first step is to insure that for every pertinent field on the old form (which is probably all of them) you have a corresponding field on the new form. It's quite possible some of those on the new will be made hidden, but including them is often prudent. Each field will need a formula ID on both the old and new forms. Two options:

1. Bring up the old and new forms side-by-side and correlate the IDs (make them identical). This allows for an easy copy-paste later on.
2. Correlate the fields in the formula itself, i.e. hunt for the corresponding values in the 'field ids' box and type them in manually. This method, as it lacks bulk copy-pasting, usually leads to more errors.
*Hint:* The 'Field Formula Id(s)' list isn't highlightable, so it can't be copied. Right click on it and select 'Inspect'. You'll probably land on a `td` element. Look up the tree until you see the `table` it's contained in. Right click on that and select 'Edit as HTML'. Hit Ctrl+A, Ctrl+C. Find essentially any other element on the page (still in the Elements tab of the dev tools panel), repeat the 'Edit as HTML' command, hit Ctrl+V, then click back inside the document. You now have a highlightable list.In Excel, put `'new.'` in A1 and `' = old.'` in A2. Paste your list in B1 (it will probably have a space, so it won't start till B2). Put `'=SUBSTITUTE(CONCATENATE(A$1,B2,A$2,B2),CHAR(160),CHAR(32))'` in C1 (or C2, wherever it lines up; have to use SUBSTITUTE because Excel will put in a no-break space, which Relate doesn't like). Hit enter, then grab the bottom right corner and drag down for the length of the list. You now have a complete list with basic formatting. Obviously some of them will need to be modified, as detailed in the new few sections, but it's a lot quicker than typing everything in.Keep that Excel file saved and use it whenever you need to do data transfers.Once you have all the fields correlated, wrap all your migration statements in the following (`oldForm` and `newForm` are formula IDs set by you): for (i, old in oldForm) {
 new = newForm.System.getNewEntry()

 // Data transfers:
 new.item = old.item
 }

Text, Memo, Date/Time, Number, and Boolean FieldsData transfer is straightforward for **text, memo, date/time, number,** and **boolean** fields. Those can all be set with a simple equals sign: `new.item = old.item`. However, other fields are a little more involved.Single Select FieldsSingle select to single select using the same option list: `new.item.selectedIndex = old.item.selectedIndex`.Single select to text: `new.item = old.item.selectedName`.Text to single select:

- `for (i, op in new.item.options) if (op.name == old.item) new.item.selectedIndex = i`
- `new.item.optionsByExport[old.item].selected = true`
Multiple Select FieldsMulti select to multi select using the same option list: `new.item.setSelected(old.item)`Signature FieldsSignature fields can be handled in multiple ways. One method is in the new form, make two fields, Signature (Calculated Text Field w/ID: `txtSig`) and Is Signed (Hidden Bool w/ID: `isSigned`). In the field formula for Is Signed, say `if (txtSig.nullOrEmpty() == false) isSigned = true`.Now in your migration formula say: `new.txtSig = old.sig.name + ' ' + old.sig.timestamp`. This will make it appear as though it was signed.Document Fields`new.doc.import(old.doc.permURL)`Relationship FieldsBy default, relationships will come from a list. To set the field, you have to loop over the list and set the selected ones. In this case, using `.selected`, we get an array of *only* the selected elements. Because of their capricious nature, it's advised you copy the array before doing your looping, as the order can change mid-loop. oldRelSelCopy = old.relationship.selected
 for (i, op in oldRelSelCopy) { new.relationship.set(op.id) }

Date Range SearchingGeneralIf the dates are defined beforehand, date searching is easy and looks like this items.clearSearchAndSort();
 items.addSearch("date", ">=", startDate);
 items.addSearch("date", "<=", endDate);
 items.rememberSearchAndSort()

Alternate with string conversion and no end date since = toDateTime('07/25/2018 02:46PM')
 items.clearSearchAndSort();
 items.addSearch("dateTime", ">=", since)

If you need to search on a datetime field, but you only have a date, you can do a conversion like this start = toDateTime((String)startDate + " 12:00am");
 end = toDateTime((String)endDate + " 11:59pm");

This can trip you up if you're not paying attention because the program will run if these types aren't matched up, but it won't actually do the searching.User-defined RangesDate range searching usually operates on the following principles: Two date fields—a start and an end—and an update button which calls an endpoint that stores the dates. Once you have those fields and buttons set up, you would include the following code // get user settings (set from endpoint "Save Parameters in UserData")
 PARAM_NAME = "itemSearch";
 paramArr = newJSONObject(getUserData().get(PARAM_NAME));

 // Set search filter from userdata (if it exists)
 startDate = paramArr.getString("_startDate").trim();
 endDate = paramArr.getString("_endDate").trim();
 if (startDate.nullOrEmpty()) startDate = curDate().format("M/d/yyyy");
 if (endDate.nullOrEmpty()) endDate = curDate().format("M/d/yyyy");

 js = scriptTag(``
 function updateSearchParams() {
 var startDate = $(".start-date input").val();
 var endDate = $(".end-date input").val();

 var sDate = new Date();
 var eDate = new Date();
 if (startDate.length > 0) sDate = new Date(startDate);
 if (endDate.length > 0) eDate = new Date(endDate);
 var diff = Math.floor((eDate - sDate) / (1000*60*60*24));

 if (startDate.length == 0) {
 alert("Please enter a start date.");
 } else if (endDate.length == 0) {
 alert("Please enter an end date.");
 } else if (diff > 90) {
 alert("Date range is greater than 90 days. Please adjust start and/or end date.");
 } else {
 var tempParams = {
 _startDate: startDate,
 _endDate: endDate,
 _data: "`` + PARAM_NAME + ``",
 _expire: "PT30M"
 };
 $.ajax({
 url: "/data/saveParams",
 type: "POST",
 data: tempParams,
 dataType: "json"
 }).done(function(data) {
 genericRefresh();
 }).fail(function(data) {
 alert( "Error executing saveParams" );
 });
 }
 }
 ``)

A crux of this code is that you must have the `Save Parameters in UserData
` endpoint on the org. Notice the field selectors are assuming you have an input contained within an element of class name `[start/end]-date`. The date difference uses a simple number-of-days method. You could make it more sophisticated with a library like Moment.js if you wanted.It's often useful to include a status message, like so msg = '<div class="cur-date-range"><span class="form_label">Currently showing:</span> ' + startDate + ' to ' + endDate + '</div>'

`genericRefresh()`You might wonder why we can't just call `getUserData().set()` instead of sending it to an endpoint to do the exact same thing. The problem is that all RelateScript is executed server-side on page load. This means **if you want to update User Data using data from the page AND then use that data on the same page, you have to do a refresh.** Somewhat unfortunate, but it's the way of things. By the same token, if you only want to add data and not use it on the current page, calling `getUserData().set()` is much better than calling an endpoint.Date FieldsThe question comes up, what date fields should I use? The obvious answer is that you can make your own inputs. That would necessitate that you add the Date Picker in by hand. I have not messed with any of that, so I make no comment.The next answer is to use date fields from a "random" form. Name and Email is a decent choice. It has hidden `startDate, endDate,` and `clear` fields that you can utilize. Another option is All Users > Online Profile. Since we're storing the data in User Data, it doesn't matter much which one you choose.Here's an example of what your HTML could look like <div class="date-pick">
 <div class="date-pick--el">
 <div class="date-pick--el--el start-date">
 <span>Start:</span>
 `` + users.get(0).profile.startDate.getMergeTag("F") + ``
 </div>
 <div class="date-pick--el--el end-date">
 <span>End:</span>
 `` + users.get(0).profile.endDate.getMergeTag("F") + ``
 </div>
 </div>
 <div class="date-pick--el">
 <a href="javascript:updateSearchParams()">`` + getButtonHTML('Update Data') + ``</a>
 </div>
 </div>

Display Multi-entry Form in MergeHeader with ButtonWith the new (as of 2018) [global string formatters](https://bluestepplatformsupport.bluestep.net/shared/relate/listmodule.jsp?_event=view&_id=530009_U129801__148887), it's easier than ever to create a header with a button. The following code checks whether the facility has pop-ins or not, creates a button for a new entry on whatever item you select, and puts that button in a header. If pop-ins are not selected, the link will open in a new tab. You must have the query for **Facility (This unit only)** and the form **Setup: Facility Settings**, given the formula IDs `facility` and `settings`. The variable `items` is whatever form you're working with. noPopin = facility.get(0).settings.noPopin;
 if (noPopin == null) noPopin = true;
 itemUrl = items.System.newEntryURL;
 dest = '&_dest=/shared/admin/refreshandclose.jsp';
 btn = getButtonHTML('Button Label');
 itemPopIn = getPopInScript(itemUrl, true);
 itemBtn = noPopin ? ``<a href="javascript:window.open('`` + itemUrl + dest + ``', '_blank')">`` + btn + ``</a>``
 : '<a href="javascript:' + itemPopIn + '">' + btn +'</a>';
 headF = getFormatter(globalStrings["headF"]); // 0 = title, 1 = btn, 2 = hint (probably empty quotes in the hint)
 headerOut = headF.format(title, itemBtn, hint);

Forgive the syntax highlighter for being unfamiliar with RelateScript around the setting of `itemBttn`. If you know a certain button will always be a pop-in or not, you can trim the code to cater just to that.Include Form Entries After HeaderMight as well round off this section by saying that if you want to populate a list with all the form entries after you've set up the header, it's as simple as itemOut = item.getMergeTag()
 out = headerOut + itemOut

Multiple Forms on One MergeSometimes you'll need to include multiple forms with header and data(e.g. Vitals, Meds, Diagnoses). A simple way to do this on the output end is layout = new String[Integer];
 idx = 0;

 layout[idx++] = headF.format(title1, newEntry1, "");
 layout[idx++] = item1.getMergeTag();

 layout[idx++] = otherContent1;

 layout[idx++] = headF.format(title2, newEntry2, "");
 layout[idx++] = item2.getMergeTag();

 layout[idx++] = otherContent2;

 layout[idx++] = headF.format(title3, newEntry3, "");
 layout[idx++] = item3.getMergeTag();

 layout[idx++] = otherContent3;

 out = layout.join("");

GroupingEvery grouping instance consists of two elements: the element being toggled and the element doing the toggling. Make sure you've identified both of those before proceeding.Benny's Grouping ScriptsThese have not been tested on select fields but should work on most other types of inputs/selects. There are three steps for setup:

1. Give every element you want to show/hide a class of 'group'
2. Give them an ID
3. Give the toggler (button/selector) a class with the same name as the ID from step 2 (this is done in the Relate GUI)
Case 1: Merge Report var inputNames = $('.group').map(function() {return this.id;}).get();
 $(inputNames.forEach(name => inputListener(name)));

 function inputListener(type){
 var $el = $('.' + type);
 var $elem = $el.is('input') | $el.is('option') ? $el : $el.siblings('input');
 if ($elem.length === 2) $elem = $elem.find("[value='true']"); // Handle case of boolean radio buttons
 var $toToggle = $('#' + type);
 $elem.is(':checked', ':selected') ? $toToggle.show() : $toToggle.hide();
 $('body').on('change', $elem, () => $elem.is(':checked', ':selected') ? $toToggle.show() : $toToggle.hide());
 };

The listener is attached to the body because JQuery's `.change()` method doesn't work for deselecting radio buttons. The JQuery onload funtion is used on `$(inputNames.forEach(...))` because else wise the elements aren't yet created and the listeners don't get attached.Case 2: Identical Merge Reports Within a Merge ReportSometimes you need to replicate a single form (merge report) within another report. E.g., you're charting someone's sleep patterns and want to be able to do multiple entries at one time. In such instances, you're going to get duplicate class names and IDs, so you have to attach a serial to each of them to differentiate. var inputNames = $('.group').map(function() {return this.id;}).get();
 var names = inputNames.filter((v, i, a) = a.indexOf(v) === i);
 inputNames = [];

 // Add different serials to all the elements that currently have the same class/id
 names.forEach((name, i) =; {
 var $el = $('.' + name);
 $el.each((j, elem) => {
 tagName = name + '-' + j.toString().padStart(4, '0');
 $(elem).removeClass(name);
 $(elem).addClass(tagName);
 inputNames.push(tagName);
 });
 var $toToggle = $('[id=' + name + ']');
 $toToggle.each((j, elem) => $(elem).attr('id', name + '-' + j.toString().padStart(4, '0')));
 });

 $(inputNames.forEach((name) => inputListener(name) ));

 function inputListener(type){
 var $el = $('.' + type);
 var $toToggle = $('#' + type);

 var $elem = $el.is('input') | $el.is('option') ? $el : $el.siblings('input');
 if ($elem.length === 2) $elem = $elem.eq(0);
 $elem.is(':checked', ':selected') ? $toToggle.show() : $toToggle.hide();
 $('body').on('change', $elem, () => $elem.is(':checked', ':selected') ? $toToggle.show() : $toToggle.hide());
 };

In the `names.forEach(...)` function the query is for `$('[id=' + name + ']')` and not `$('#' + name)`. This is because IDs are supposed to be unique, but ours aren't. The second query will only return the first element with that ID.Lookup Merge ReportIf you wanted to look up a merge report called Shift Log for all clients, you would

1. [Step 1 of Shift Log wizard] Expand Custom Lookup Properties and under Properties type `_mergeReport=shiftLog`.
2. [Step 3 of Shift Log wizard] Set Shift Log's primary form to Name and Email.
3. [Step 3 of new merge wizard] Add the Name and Email form to your merge report as `name`.
4. [Step 3 of new merge wizard] Add the All Active Clients query with the name `clients`.
With that in place, you can build a table like so shiftMerge = '<ul class="log-table">';
 while (clients.hasNext()) {
 client = clients.next();
 shiftMerge += '<li class="log-table--el">'
 + '<div class="full-name">' + client.name.fullName + ':</div>'
 + client.name.System.lookupMergeReport('_mergeReport', 'shiftLog').getMergeTag() + '</li>';
 };
 shiftMerge += '</ul>';

In this example, we attach the client's name in a `div` with class `full-name`. This allows you to fully control how the name is displayed. If you want it to mimic Relate headers, for example, you can give it the style .full-name {
 background: #c6e3ffc4;
 border-bottom: 1px black solid;
 padding-left: 5px;
 width: 100%;
 }

Require ConditionallySometimes you want users to be able to edit a form multiple times before saving. The current preferred solution to this is conditionally required fields, i.e. fields that aren't required until they check the signature box. Once they check that, all pertinent fields become required and therefore can't save with a signature unless everything's been filled out.Another example: You have an optional field for current medications, but you want it to become required if they indicate that they're suicidal, have had past cardiac events, and so forth.To do this, give everything you want to be controlled a class (e.g. `require-group-1, require-group-2`, etc., and give the controllers classes like `require-toggle-1, require-toggle-2`, etc. Include the following code on your form/merge report. requiref = getFormatter(scriptTag(``'
 _SR_.onLoad(function() {
 var $toggler = $(".'{1}'");
 $("body").on("change", $toggler, function() { makeRequired($toggler) })

 function makeRequired($toggler) {
 isChecked = $toggler.is(":checked", ":selected")
 $(".'{0}'").each(function() {
 getElementObj($(this).attr("name")).setRequired(isChecked);
 })
 }
 })
 '``))

 out = requiref.format('require-group-1', 'require-toggle-1')
 + requiref.format('require-group-2', 'require-toggle-2')

Failures of this code:

1. I still haven't figured out how to get it to mark the required on load. Running `makeRequired()` doesn't seem to work (the hope that it will work is why it's broken out into it's own function). However, since the event listener is on the `body`, any change to any selection will cause the required items to set.
2. Fails in cases where two controllers are operating on the same group. It "ignores" the first controller and "obeys" the second (i.e., runs the first and the second overrides it). My suggestion is just to give items multiple group classes if you want them to have more than one controller, though that still isn't a perfect solution.
3. Probably more. I haven't tested all cases.
Alternative Solution: Don't worry about making anything required, and simply toggle the visibility of the signature field(s) based off whether all the pertinent fields have been addressed. A shortcoming of this is that someone could go into the inspector, make it visible, check it off, and submit. The likelihood of that happening is extremely low, but it is a consideration.Use "This Unit Only" Query in an EndpointThis Unit Only queries will often die if you use them in endpoints, simply because an endpoint doesn't (usually) have a specific unit attached to it. In order to get it to work every time, you need to set the unit. We do this by passing the AJAX call an ID from a form entry in the unit.In the following code (in your merge report), `thisUnit` is the unit you want the This Unit Only query to be working. I've added some other parameters you might be passing into your JSON. This assumes you're taking a start and end date from user input. The `name` variable is whatever section of the page you happen to be working in (imagine you have both new meds and DC'd meds you can search on one page). const thisUnitID = ``` + thisUnit.info.System.id + ```;
 function searchDates(name) {
 const stDate = $(`#${name}StartDate`).find("input").val();
 const endDate = $(`#${name}EndDate`).find("input").val();
 const dataJSON = {stDate, endDate, thisUnitID};
 $.ajax({
 method: "POST",
 url: '/data/endPoint',
 data: dataJSON
 }).done(function(rtndata){
 console.log(rtndata);
 }).fail(function(){
 console.log("Failure");
 })
 }

Then in your endpoint let's say your query is "Community (This Unit Only)" and you've given it the ID `comm`. Include the lines comm.setCurrentUnit(request.getParameter("thisUnitID"));
 selComm = comm.get(0);

You can now be assured that anything you do with `selComm` will be in your desired unit. [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11381](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11381) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11661](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11661)

 
