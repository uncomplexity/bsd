

- getDispense(...)

---
The getDispense(...) function retrieves a Dispense Object from the Mckesson Database by passing it a rxID and dispenseNumber. **Syntax:**
**getDispense(** *rxID, dispenseNumber* **)**
*rxID***.getDispense(** *dispenseNumber* **);**

| **Parameter** | **Description** |
| --- | --- |
| *rxID* | A String value containing the id assigned to the RX. |
| *dispenseNumber* | A String value containing the dispense number assigned to the dispense. |

| The Dispense Object |
| --- |
| |

| **Field** | **Description** |
| --- | --- |
| *rxID* | A String value containing the id assigned to the RX. |
| *dispenseID* | A String value containing the id assigned to the dispense. |
| *dispenseNumber* | A Integer value containing the dipense number of the dispense. |
| *item* | A String value containing the item name assigned to the RX. |
| *prescriber* | A String value containing the prescriber's name assigned to the RX. |
| *dispenseQty* | A Integer value containing the quantity in the dispense. |
| *dispenseDailyQty* | A Integer value containing the quantity to be given daily for the dispense. |
| *instructions* | A String value containing the instructions for dispensing the RX. |
| *daysSupply* | A Integer value containing the number of days supplied for the dispense. |
| *dispenseDate* | A Date value containing the date of the dispense. |

| **Method** | **Description** |
| --- | --- |
| *getFieldByID(String fieldID)* | This function results in a String containing the value for that field for that dispense. |
| *getDispenseMap(DispenseCustomObject dispense)* | This function results in a Map always in case the soap call returns a Map of items, however, it is used to make webservice calls to a soap client. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___6545](/shared/custompage/custompage.jsp?_event=view&_id=445506___6545) [/shared/custompage/custompage.jsp?_event=view&_id=445506___6522](/shared/custompage/custompage.jsp?_event=view&_id=445506___6522)

 
