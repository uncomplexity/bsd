

- doLookup(...)B.lookup

---
 The doLookup(...) function has only one variation, not counting syntax variations. It allows a formula to lookup data from several large, predefined data repositories. Over time BlueStep will add additional data repositories. The result of the lookup is an array of type String[Integer, String]. The first index in a sequential integer value starting a zero and counting up for each search result. The second index is a String representing the name of a data field for a particular result entry. There is only one guarenteed data field, "label", which is the human-readable name of that particular result. Other data points will vary depending on the data repository being used. If there is an error performing the lookup, only one result will be returned containing the error message at the index of -1 and "ERROR". See the examples below for more details.
**Syntax:** **doLookup(** *source-name***,** *search-string* **)**
*source-name***.doLookup(** *search-string* **)**

| **Parameter** | **Description** |
| --- | --- |
| *source-name* | The name of the data repository in which to search. Current repositories are "medName", "ICD9Dx", "medBillingRevCode" and "cptCode". These are documented in more detail below. |
| *search-string* | The String value you are searching for. |
 **Example:** The following example looks up a diagnosis name given an ICD-9 Dx code:result = doLookup("ICD9Dx", "100.81"); shortName = result[0, "short"]; longName = result[0, "long"]; The shortName variable now contains "Leptospiral meningitis" and the longName variable now contains "Leptospiral meningitis (aseptic)".**Example:** The following example looks up the various ICD-9 Dx codes containing "coccal meningitis":result = doLookup("ICD9Dx", "coccal meningitis"); output = ""; for (i, entry in result) { output += entry["label"] + "<br>"; } The output variable now contains a snippet of HTML listing the label of each of the results. Specifically, it contains: "320.1 Pneumococcal meningitis<br>320.2 Streptococcal meningitis<br>320.3 Staphylococcal meningitis<br>321.0 Cryptococcal meningitis<br>036.0 Meningococcal meningitis<br>098.82 Gonococcal meningitis<br>"**Example:** The following example intentionally generates an error to demonstrate the mechanism:result = doLookup("blahblah", "100.81"); error = result[0, "error"];The error variable now contains "Lookup service not found.". **Data Repository Details****The "medName" Data Repository**
Lookup information about medications, by name. The search is case-insensitive and does a "contains" search. Only alphanumeric characters are used, all other characters are treated as whitespace. This search only looks for medications currently on the market. Consequently out-dated drugs and illegal drugs with no allowed medical purpose will not be looked up.

| **Field** | **Description** |
| --- | --- |
| *label* | The name of the medication searched for, strength of the medication, route of administration and dose form. |
| *drug* | The name of the medication |
| *generic* | The generic name of the medication if it is different from the searched for name. This field is not included if it would be the same as drug. |
| *genericParen* | Same as generic, except it is preceeded by a space and opening parenthesis and followed by a closing parenthesis. |
| *strength* | The strength of the medication. |
| *route* | The route of administration. (i.e. oral) |
| *rt* | The abbreviated route of administration (i.e. PO) |
| *doseForm* | The dose form (i.e. tablet) |
| *df* | The abbreviated dose form (i.e. TAB) |
| *code* | The code or schedule of the medication under the U.S. Controlled Substances Act from "1" to "5" or "Standard". In practice drugs with a code of "1" are not legally available, so they will not be in any result. |
| *productID* | The internal database id of the generic product associated with the medication. |
**The "ICD9Dx" Data Repository**
Lookup information about the International Classification of Diseases Nineth Revision as defined by the Centers for Disease Control. It searches the full list of diagnosis codes (not proceedure codes) which are currently valid for Medicare/Medicaid purposes according to Centers for Medicaid & Medicare Services (CMS). The search is case-insensitive and does a "starts with" search on the code and/or a "contains" search on the long name. The actual list of ICD-9 codes BlueStep uses is CMS version 29 which is valid from Oct. 1, 2011 to Sept. 30, 2012. CMS has indicated that version 30 has no alterations, additions or removals. Therefore, it appears that version 29 will continue to be accurate through Sept. 30, 2013.

| **Field** | **Description** |
| --- | --- |
| *label* | The diagnosis code and the short name. |
| *code* | The diagnosis code. |
| *short* | The short name of the diagnosis. |
| *long* | The long name of the diagnosis. |
**The "medBillingRevCode" Data Repository**
Lookup information about medical billing revenue codes, or rev. codes. The search is case-insensitive and does a "starts with" search on the code and/or a "contains" search on the description.

| **Field** | **Description** |
| --- | --- |
| *label* | The code and the description. |
| *code* | The rev. code. |
| *description* | The code description. |
**The "cptCode" Data Repository**
Lookup information about CPT codes (also used for medical billing). The search is case-insensitive and does a "starts with" search on the code and/or a "contains" search on the description. Further, if the first word matches a category name or category code then only results from that category are returned. The CPT code lookup can receive an optional parameter, "category" which limits results to a single category. Ask for more information if you wish to use this parameter. This listing of CPT codes is extremely abbreviated and only contains codes that might be useful in a skilled nursing facility.

| **Field** | **Description** |
| --- | --- |
| *label* | The code and the description. |
| *code* | The CPT code. |
| *description* | The code description. |
| *categoryCode* | The two letter category code. The category codes and their names are listed below: <br>SP — Supplies (alternative search: Supply)OT — OTPT — PTST — STRT — RespiratoryRD — RadiologyLB — Lab (alternative search: Labs)VC — Vaccine |
| *category* | The full category name. |
| *revCode* | A default rev. code that matches the CPT code. Note that rev. code/CPT code matching is payee specific and this default cannot be relied upon in all cases. |
| *timed* | Indicates whether this is a timed service. If so, the timed property will be "Timed". If not, the timed property will be the empty string. |
**The "labCodes" Data Repository**
Lookup information about lab tests/panels as well as imaging (CT/X-ray/MRI) and heart station tests. The search is case-insensitive and does a "contains" search on the label, code and occationally other values such as mnemonic for certain companies. The lab code lookup can receive an optional parameter, "company" which limits results to a single lab/imaging/heart-station company. Also, there is a search attribute, "testType", to limit the result to a single class of tests: "LAB", "IMAGING" or "HEARTSTATION". This listing of test codes is focused on testing companies that BlueStep has partnered with to provide automated electronic communication of lab orders and lab results.

| **Field** | **Description** |
| --- | --- |
| *label* | The name of the test or panel. |
| *company* | The name of the company providing the diagnostic test. |
| *code* | The internal code for the test as defined by the company providing the test. |
| *companyCode* | The company name combined with the lab-specific code. This is used, by default, as the hover text for a lab code field. |
| *cptCode* | The CPT code. A billing code for the test provided by the company. |
| *drawTypes* | For labs, specifies the allowable draw types for that particular lab. (not in use) |
| *testType* | One of the following: "LAB", "IMAGING" or "HEARTSTATION". |
| Custom/Other | Various lab and testing companies have unique data fields that are available for the tests they provide. These extra values are included only for certain companies. These are the existing custom fields: *mnemonic* -- The mnemonic code for the test. *category* -- A sub-category such as "CT" or "MRI" for an imaging test. |
**The "drugAllergy" Data Repository**
Lookup information about allergies that may interact with medications. The search is case-insensitive and does a contains search on the label.

| **Field** | **Description** |
| --- | --- |
| *label* | The name of the allergy |
| *rxcui* | The RxNorm id for the allergy |
**The "drugImage" Data Repository**
Lookup service for finding images of medications. The search value is either a product id retrieved via a medName lookup or a case-insensitive "contains" search directly on the medication name. If the search value contains only digits, the lookup is by product id. Otherwise the search is by medication name. Some medications may have several images, especially when there is more than one manufacturer of a generic medication.

| **Field** | **Description** |
| --- | --- |
| *label* | The URL of the image including a specialized domain name for retrieving static image resources. However, the protocol is not included in the URL as this is generally optional. |
**The "drugWarning" Data Repository**
Lookup information about Adverse Drug Reactions for a medication. The search value is a product id retrieved via a medName lookup.

| **Field** | **Description** |
| --- | --- |
| *label* | The ADR |
| *effect* | The ADR |
| *documentationlevel* | TODO |
| *condition* | TODO |
| *onset* | TODO |
| *effect1* | TODO |
| *severity* | How severe this ADR is. For example, Major, Moderate, etc. |
| *incidence* | How likely this ADR is to happen. For example, Common, Frequent, More Frequent, etc. |

[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8541](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8541) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7981](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___7981)

 
