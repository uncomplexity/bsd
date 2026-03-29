

- newPatientProfile()

---
The newPatientProfile() method creates a PatientProfile object that is used to preform various Medispan related calculations. These include, Drug to Drug Interactions, Dose Screenings, and different Contraindication Screenings. The PatientProfile object is a wrapper for different data points used to make these calculations such as weight, gender, age, and Medications.**Syntax:**
**newPatientProfile( )****PatientProfile Object**

| **Field/Function** | **Description** |
| --- | --- |
| *setGender(value)* | Takes a string of "Male" or "Female" to set the Gender. |
| *setBirthDate(value)* | Takes a date in the format "dd/MM/yyyy" to set the Birthdate. |
| *setWeight(value, unit)* | The first parameter is a string value of the weight, the second parameter takes a string of "lb" or "kg" to specify the unit of measure. |
| *addMed(PatientDrug)* | Takes a PatientDrug object and adds it to the profile. |
| *drugDrugInteractions()* | Calculates Drug to Drug Interactions. Returns an array of type [Integer]String |
| *diseaseContraindications()* | Calculates Disease Contraindications. Returns an array of type [Integer]String |
| *genderContraindications()* | Calculates Gender Contraindications. Returns an array of type [Integer]String |
| *ageContraindications()* | Calculates Age Contraindications. Returns an array of type [Integer]String |
| *pregnancyContraindications()* | Calculates Pregnancy Contraindications. Returns an array of type [Integer]String |
| *lactationContraindications()* | Calculates Lactation Contraindications. Returns an array of type [Integer]String |
| *doseScreening()* | Preforms a dose screening. Returns an array of type [Integer]String |
| *ingredientDoseScreening()* | Preforms an ingredient dose screening. Returns an array of type [Ineger]String |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11702](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11702) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11704](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11704)

 
