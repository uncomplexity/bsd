

- newPatientDrug(...)

---
The newPatientDrug() method creates a PatientDrug object that can be added to a PatientProfile object. This object has several properties that have to be set to ensure accurate results from Medispan screens. This takes the Medispan Product Id of a Medication as a String in the constructor.**Syntax:**
**newPatientDrug(medispanId)**
**newPatientDrug(medispanId, isScenario)****PatientProfile Object**

| **Field/Function** | **Description** |
| --- | --- |
| *setFrequency(frequency, timePeriod, periodUOM)* | 3 times per day would be passed, (3.0, 1.0, "Day") |
| *setDuration(duration, durationUOM)* | 7 days would be passed, (7.0, "Day") |
| *setDoseType(doseType)* | Usually "Maintenance Dose" |
| *setDoseRoute(doseRoute)* | "Oral", "Intramuscular", etc. |
| *setScheduleAdmin("PRN")* | Optionally set if the Medication is given PRN. |
| *setDose(dose)* | "1 tablet", "325 MG", etc. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___11703](/shared/custompage/custompage.jsp?_event=view&_id=445506___11703) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8801](/shared/custompage/custompage.jsp?_event=view&_id=445506___8801)

 
