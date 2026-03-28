

- setBioImage()

---
The setBioImage() function is used to convert old Touch(I-Pad) signatures to the new Biometric Type. It takes 2 parameters. First, the Biometric field that is properly configured as a touch signature that is going to recieve the new data, and second, the raw data from the Memo Field that previously was being used. This function will return null if it can't properly read the data, true if everything was successful, or false if there was a problem setting the data.Reminder, this is a restricted function and requires the formula that uses it to have a fixed id. **Syntax:****setBioImage(** *newBioField* **,** *oldMemoData* **)**

| **Parameter** | **Description** |
| --- | --- |
| *newBioField* | The new Biometric Field that has been configured as a Touch Signature. |
| **oldMemoData** | Data from either Version 1 (coordinates) or Version 2 (base64 SVG) memo field. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___9261](/shared/custompage/custompage.jsp?_event=view&_id=445506___9261) [/shared/custompage/custompage.jsp?_event=view&_id=445506___9421](/shared/custompage/custompage.jsp?_event=view&_id=445506___9421)

 
