

- drugDrugByProductID(...)B.Drug.drugInteractionsWith

---
The drugDrugByProductID(...) function is used to see if a drug will interact with another drug. The result of drugDrugByProductID(...) is an array of type String[String] with three specific values:drugInteraction = drugDrugByProductID( productID_1, productID_2);drugInteraction["severity"]: Severity of the drug interaction
drugInteraction["description"]: A description of the interaction
drugInteraction["advice"]: Advice if taken together.**Syntax:**
**drugDrugByProductID**( productID_1, productID_2 ) productID_1.**drugDrugByProductID**( productID_2 )

| **Parameter** | **Description** |
| --- | --- |
| *productID_1* | ProductID 1 for a drug from the "medName" lookup |
| **productID_2** | ProductID 2 for a drug from the "medName" lookup |
The drugInteraction["description"] contains two place holders for the actual drug names. These place holders are called {CS1} and {CS2}. Use the **[replace(...)](/relate-script/functions/string-functions/replace)** function to insert the correct drug Name. Example:description = drugInteraction["description"].replace("{CS1}", drugName1) .replace("{CS2}", drugName2) [/shared/custompage/custompage.jsp?_event=view&_id=445506___9381](/shared/custompage/custompage.jsp?_event=view&_id=445506___9381) [/shared/custompage/custompage.jsp?_event=view&_id=445506___9382](/shared/custompage/custompage.jsp?_event=view&_id=445506___9382)

 
