

- getDispenseMap(...)

---
The getDispenseMap(...) function retrieves a Dispense Field Map from the Mckesson Database by passing it a rxID and dispenseNumber. By passing the String fieldID to the Map you can retrieve various fields from the dispense.**Syntax:**
**getDispenseMap(** *rxID, dispenseNumber* **)**
*rxID***.getDispenseMap(** *dispenseNumber* **);**

| **Parameter** | **Description** |
| --- | --- |
| *rxID* | A String value containing the id assigned to the RX. |
| *dispenseNumber* | A String value containing the dispense number assigned to the dispense. |

| **Table** | **Field** | **Description** |
| --- | --- | --- |
| *RX* | *External_RX_ID* | A String value containing the id assigned to the RX that appears on the Mckesson RX screen. |
| *Dispense* | *Dispense_ID* | A String value containing the unique dispense id for the database assigned to the dispense. |
| *Dispense* | *Dispense_Number* | A String value containing the dispense number related to the dispense. |
| *Patient* | *Patient_ID* | A String value containing the unique patient id for the database assigned to the patient. |
| *Item* | *Item_Name* | A String value containing the name of the med related to the dispense. |
| *Prescriber* | *Prescriber_Last_Name* | A String value containing the lastname of the prescriber who prescribed the RX or dispense. |
| *Dispense* | *Quantity_Dispensed* | A String value containing the dispense number assigned to the dispense. |
| *Dispense* | *Dosage_Signa_Code* | A String value containing the type of RX to be given to append to the instructions assigned to the dispense. |
| *Dispense* | *Signa_String* | A String value containing the signa codes to append to the instructions assigned to the dispense. |
| *Dispense* | *DailyQty* | A String value containing the quantity to be consumed daily for the dispense. |
| *Dispense* | *Instruction_Signa_Text* | A String value containing the instructions assigned to the dispense. |
| *Dispense* | *Days_Supply* | A String value containing the days supplied for the dispense. |
| *Dispense* | *Dispense_Date* | A String value containing the date of the dispense. |
| *RX* | *RX_ID* | A String value containing the unique rx id for the database assigned to the rx. |
| *RX* | *Written_For_Item_ID* | A String value containing unknown. |
| *RX* | *Written_For_Item_Version* | A String value containing unknown. |
| *RX* | *Date_Written* | A String value containing the date the RX was written. |
| *RX* | *Script_Status* | A String value containing unknown. |
| *RX* | *Prescription_Expiration_Date* | A String value containing the date the RX expires. |
| *RX* | *Original_Refills_Authorized* | A String value containing unknown. |
| *RX* | *Total_Refills_Authorized* | A String value containing the number of refills authorized. |
| *RX* | *Total_Refills_Used* | A String value containing the number of refills used. |
| *RX* | *Discontinue_Date* | A String value containing the date the RX was discontinued. |
| *RX* | *Last_Dispense_Number* | A String value containing unknown. |
| *RX* | *Last_Dispense_Stop_Date* | A String value containing unknown. |
| *RX* | *Quantity_Written* | A String value containing unknown. |
| *RX* | *Total_QTY_Used* | A String value containing unknown. |
| *RX* | *Total_QTY_Authorized* | A String value containing unknown. |
| *RX* | *Days_Supply_Written* | A String value containing unknown. |
| *RX* | *Days_Supply_Remaining* | A String value containing unknown. |
| *RX* | *Script_Origin_Indicator* | A String value containing unknown. |
| *RX* | *Phoned_In_By_Type* | A String value containing unknown. |
| *RX* | *Phoned_In_By_Name* | A String value containing unknown. |
| *RX* | *Narcotic_Form_Number* | A String value containing unknown. |
| *RX* | *TimeStamp* | A String value containing unknown. |
| *RX* | *ReassignedRx* | A String value containing unknown. |
| *RX* | *ChronicMed* | A String value containing unknown. |
| *RX* | *Link_RX_ID* | A String value containing unknown. |
| *RX* | *Copy_From_External_RX_ID* | A String value containing unknown. |
| *Patient* | *Patient_ID* | A String value containing the unique patient id for the database assigned to the patient. |
| *Patient* | *Patient_First_Name* | A String value containing the first name of the patient. |
| *Patient* | *Patient_Last_Name* | A String value containing the last name of the patient. |
| *Patient* | *Patient_Middle_Initial* | A String value containing the middle initial of the patient. |
| *Patient* | *Pharmacy_Patient_Number* | A String value containing unknown. |
| *Patient* | *Patient_Location_Code* | A String value containing unknown. |
| *Patient* | *Student_Code* | A String value containing unknown. |
| *Patient* | *Marital_Status_Type* | A String value containing unknown. |
| *Patient* | *Add_On_Amount* | A String value containing unknown. |
| *Patient* | *Mark_Up_Down_PCT* | A String value containing unknown. |
| *Patient* | *Language_Override_Code* | A String value containing unknown. |
| *Patient* | *Tax_Exempt_Flag* | A String value containing unknown. |
| *Patient* | *Safety_Cap_Code* | A String value containing unknown. |
| *Patient* | *Safety_Cap* | A String value containing unknown. |
| *Patient* | *Signature_On_File_Flag* | A String value containing unknown. |
| *Patient* | *PIL_Flag* | A String value containing unknown. |
| *Patient* | *PIL_Authorization_Date* | A String value containing unknown. |
| *Patient* | *Sex* | A String value containing unknown. |
| *Patient* | *Birthdate* | A String value containing unknown. |
| *Patient* | *Deceased_Date* | A String value containing unknown. |
| *Patient* | *SSN* | A String value containing unknown. |
| *Patient* | *Suffix* | A String value containing unknown. |
| *Patient* | *Eligibility_Override_Code* | A String value containing unknown. |
| *Patient* | *EPSDT_Code* | A String value containing unknown. |
| *Patient* | *Carrier_Clinic_Number* | A String value containing unknown. |
| *Patient* | *Assign_Benefits_Date* | A String value containing unknown. |
| *Patient* | *Driver_License* | A String value containing unknown. |
| *Patient* | *Inactive_Flag* | A String value containing unknown. |
| *Patient* | *Smoker_Nonsmoker_Code* | A String value containing unknown. |
| *Patient* | *Pregnancy_Indicator* | A String value containing unknown. |
| *Patient* | *DNR* | A String value containing unknown. |
| *Patient* | *Create_Date* | A String value containing unknown. |
| *Patient* | *DNI* | A String value containing unknown. |
| *Patient* | *NPPack_Code* | A String value containing unknown. |
| *Patient* | *Patient_Timestamp* | A String value containing unknown. |
| *Patient* | *MedicareDEnrollDate* | A String value containing unknown. |
| *Patient* | *MedicareDEnrolledFlag* | A String value containing unknown. |
| *Patient* | *MultiStoreFlag* | A String value containing unknown. |
| *Patient* | *PatientInfoReviewedFlag* | A String value containing unknown. |
| *Patient* | *CorporatePatientId* | A String value containing unknown. |
| *Patient* | *Primary_Prescriber_ID* | A String value containing unknown. |
| *Patient* | *Primary_Pharmacy_ID* | A String value containing unknown. |
| *Patient* | *Head_Of_Household_ID* | A String value containing unknown. |
| *Patient* | *Price_Schedule_ID* | A String value containing unknown. |
| *Patient* | *Discount_Schedule_ID* | A String value containing unknown. |
| *Patient* | *Label_Format_ID* | A String value containing unknown. |
| *Patient Parameter* | *LTCPatientParameterID* | A String value containing the primary key of the patient parameter entry. |
| *Patient Parameter* | *AdmissionDate* | A String value containing the date of admission to the facility. |
| *Patient Parameter* | *DischargeDate* | A String value containing the date of discharge from the facility. |
| *Patient Parameter* | *FacilityPatientIdentifier* | A String value containing unknown. |
| *Patient Parameter* | *Comments* | A String value containing unknown. |
| *Patient Parameter* | *PrescriberTypeCode* | A String value containing unknown. |
| *Patient Parameter* | *PrescriberTypeCodeGrp* | A String value containing unknown. |
| *Dispense* | *Dispensing_Status_Indicator* | A String value containing the status of the dispense in the dispensing process. |
| *Dispense* | *Dispensed_Item_ID* | A String value containing the item(medication) id that was dispensed. |
| *Dispense* | *Item_Version* | A String value containing unknown. |
| *Dispense* | *DAW_Indicator* | A String value containing unknown. |
| *Dispense* | *True_Cost* | A String value containing unknown. |
| *Dispense* | *Cost_Calculation_Basis* | A String value containing unknown. |
| *Dispense* | *Discard_Date* | A String value containing unknown. |
| *Dispense* | *Basis_Of_Cost_Indicator* | A String value containing unknown. |
| *Dispense* | *Dispense_PIL_Flag* | A String value containing unknown. |
| *Dispense* | *Package_Insert_Flag* | A String value containing unknown. |
| *Dispense* | *MFG_EDU_Auth_Indicator* | A String value containing unknown. |
| *Dispense* | *Lot_Number* | A String value containing unknown. |
| *Dispense* | *Pharmacist_User_ID* | A String value containing unknown. |
| *Dispense* | *Technician_User_ID* | A String value containing unknown. |
| *Dispense* | *Drug_Interaction_Status* | A String value containing unknown. |
| *Dispense* | *Prior_adverse_Reaction_Status* | A String value containing unknown. |
| *Dispense* | *Drug_disease_Status* | A String value containing unknown. |
| *Dispense* | *Therapeutic_Duplication_Status* | A String value containing unknown. |
| *Dispense* | *Dosage_Duration_Status* | A String value containing unknown. |
| *Dispense* | *Early_Late_Refill_Status* | A String value containing unknown. |
| *Dispense* | *Dispense_Create_Date* | A String value containing unknown. |
| *Dispense* | *DUR_Warning_ID* | A String value containing unknown. |
| *Dispense* | *Date_Cancelled* | A String value containing unknown. |
| *Dispense* | *Partial_Fill_Status* | A String value containing unknown. |
| *Dispense* | *HOA_Code* | A String value containing unknown. |
| *Dispense* | *Number_Of_Labels* | A String value containing unknown. |
| *Dispense* | *Distribution_Method_Code* | A String value containing unknown. |
| *Dispense* | *Distribution_Method_Code_Group* | A String value containing unknown. |
| *Dispense* | *Quantity_Entry_Flag* | A String value containing unknown. |
| *Dispense* | *Batch_Label_Flag* | A String value containing unknown. |
| *Dispense* | *Override_Dispense_Time* | A String value containing unknown. |
| *Dispense* | *DispStatusId* | A String value containing unknown. |
| *Dispense* | *DispUpdateSource* | A String value containing unknown. |
| *Dispense* | *DispStatusLastUpdate* | A String value containing unknown. |
| *Dispense* | *UnicodeLanguageSig* | A String value containing unknown. |
| *Dispense* | *CycleFillFlag* | A String value containing unknown. |
| *Dispense* | *QEEndOfDistCycleDate* | A String value containing unknown. |
| *Dispense* | *Quantity_Dispensed_Ovrd* | A String value containing unknown. |
| *Dispense* | *PickupID* | A String value containing unknown. |
| *Dispense* | *BagTypeCode* | A String value containing unknown. |
| *Dispense* | *BagTypeCodeGrp* | A String value containing unknown. |
| *Dispense* | *DispenseDuration* | A String value containing unknown. |
| *Dispense* | *DispenseStopDate* | A String value containing unknown. |
| *Dispense* | *Receivable_ID* | A String value containing unknown. |
| *Item* | *Item_ID* | A String value containing the primary key for an item. |
| *Item* | *Current_Item_Version* | A String value containing the version for an item. (Might be part of the primary key) |
| *Item* | *NDC_Code* | A String value containing unknown. |
| *Item* | *Package_Code* | A String value containing unknown. |
| *Item* | *Package_Size* | A String value containing unknown. |
| *Item* | *Item_Type* | A String value containing unknown. |
| *Item* | *Item_Category_Code* | A String value containing unknown. |
| *Item* | *DUR_Screen_Indicator* | A String value containing unknown. |
| *Item* | *KDC_Number* | A String value containing unknown. |
| *Item* | *GPI_Group_Code* | A String value containing unknown. |
| *Item* | *GPI_Class_Code* | A String value containing unknown. |
| *Item* | *GPI_Subclass_Code* | A String value containing unknown. |
| *Item* | *GPI_Name_Code* | A String value containing unknown. |
| *Item* | *GPI_Name_Extension_Code* | A String value containing unknown. |
| *Item* | *GPI_Dosage_Form_Code* | A String value containing unknown. |
| *Item* | *GPI_Strength_Code* | A String value containing unknown. |
| *Item* | *HRI_Number* | A String value containing unknown. |
| *Item* | *Item_Dosage_Signa_Code* | A String value containing unknown. |
| *Item* | *Instruction_Signa_String* | A String value containing unknown. |
| *Item* | *Form_Type* | A String value containing unknown. |
| *Item* | *Route_Of_Administration* | A String value containing unknown. |
| *Item* | *Alternate_Manufacturer_ID* | A String value containing unknown. |
| *Item* | *UPC* | A String value containing unknown. |
| *Item* | *Current_Lot_Expiration_Date* | A String value containing unknown. |
| *Item* | *Current_Lot_Number* | A String value containing unknown. |
| *Item* | *Default_Dispense_Quantity* | A String value containing unknown. |
| *Item* | *Strength* | A String value containing unknown. |
| *Item* | *Package_UOM* | A String value containing unknown. |
| *Item* | *Pre_Pack_Size* | A String value containing unknown. |
| *Item* | *MFG_EDU_Materials_Flag* | A String value containing unknown. |
| *Item* | *Item_Package_Insert_Flag* | A String value containing unknown. |
| *Item* | *Item_Price_Schedule* | A String value containing unknown. |
| *Item* | *Cost_Basis* | A String value containing unknown. |
| *Item* | *Special_Pricing_ID* | A String value containing unknown. |
| *Item* | *Item_Mark_Up_Down_PCT* | A String value containing unknown. |
| *Item* | *Dosage_Add_On_Flag* | A String value containing unknown. |
| *Item* | *Preferred_Flag* | A String value containing unknown. |
| *Item* | *Wholesale_Acquisition_Cost* | A String value containing unknown. |
| *Item* | *Wholesale_Acquisition_Update_D* | A String value containing unknown. |
| *Item* | *Active_Flag AS ItemActiveFlag* | A String value containing unknown. |
| *Item* | *AVG_Wholesale_Price* | A String value containing unknown. |
| *Item* | *AVG_Wholsale_Update_Date* | A String value containing unknown. |
| *Item* | *Direct_Acquisition_Cost* | A String value containing unknown. |
| *Item* | *Direct_Acquisition_Update_Date* | A String value containing unknown. |
| *Item* | *EST_Acquisition_Cost* | A String value containing unknown. |
| *Item* | *EST_Acquisition_Update_Date* | A String value containing unknown. |
| *Item* | *Color_Code* | A String value containing unknown. |
| *Item* | *Flavor_Code* | A String value containing unknown. |
| *Item* | *Shape_Code* | A String value containing unknown. |
| *Item* | *Product_Marking* | A String value containing unknown. |
| *Item* | *Cross_Reference_Item_ID* | A String value containing unknown. |
| *Item* | *Multi_Source_Flag* | A String value containing unknown. |
| *Item* | *Innovator_Flag* | A String value containing unknown. |
| *Item* | *Substitutes_Flag* | A String value containing unknown. |
| *Item* | *Narcotic_Code* | A String value containing unknown. |
| *Item* | *Source_Indicator* | A String value containing unknown. |
| *Item* | *Imprint1_Code* | A String value containing unknown. |
| *Item* | *Imprint2_Code* | A String value containing unknown. |
| *Item* | *Unit_Size* | A String value containing unknown. |
| *Item* | *Unit_Of_Measure* | A String value containing unknown. |
| *Item* | *LTC_Dosage_Add_On_Flag* | A String value containing unknown. |
| *Item* | *OvrColorCode* | A String value containing unknown. |
| *Item* | *OvrFlavorCode* | A String value containing unknown. |
| *Item* | *OvrShapeCode* | A String value containing unknown. |
| *Item* | *OvrImprint1Code* | A String value containing unknown. |
| *Item* | *OvrImprint2Code* | A String value containing unknown. |
| *Item* | *OvrCautionCode* | A String value containing unknown. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___6546](/shared/custompage/custompage.jsp?_event=view&_id=445506___6546) [/shared/custompage/custompage.jsp?_event=view&_id=445506___7321](/shared/custompage/custompage.jsp?_event=view&_id=445506___7321)

 
