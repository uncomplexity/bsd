

- getActivePatients(...)

---
The getActivePatients(...) function retrieves a List of active patients from the Mckesson Database to match up the patientIDs for each patient. You can also retrieve various other patient fields. The result of this function is a patient object.**Syntax:**
**getActivePatients(** *facilityID* **)**
*facilityID***.getActivePatients();**

| **Parameter** | **Description** |
| --- | --- |
| *facilityID* | A String value containing the id assigned to the facility. If all numeric characters, looks up by facility ID. If the id contains non-numeric characters, looks up by facility code instead. |

| The Patient Object |
| --- |
| |

| **Field** | **Description** |
| --- | --- |
| *patientID* | This is a read-only String value containing the McKesson patientID of the patient. |
| *facilityID* | This is a read-only String value containing the McKesson facilityID of the patient. |
| *firstName* | This is a read-only String value containing the McKesson first name of the patient. |
| *lastName* | This is a read-only String value containing the McKesson last name of the patient. |
| *birthDate* | This is a read-only String value containing the McKesson birth date of the patient. |
| *getFieldByID(fieldID)* | This function results in a String value containing the McKesson field value of the fieldID passed to it. |
| *getDispensesByDate(rxID)* | This function results in a List of Dispense Objects value containing the McKesson field value of the rxID passed to it. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___6541](/shared/custompage/custompage.jsp?_event=view&_id=445506___6541) [/shared/custompage/custompage.jsp?_event=view&_id=445506___6543](/shared/custompage/custompage.jsp?_event=view&_id=445506___6543)

 
