

- getZipOutput(...)B.zip

---
The getZipOutput(...) function is used to create a zip file. The result of getZipOutput(...) is a zip output object, described below.**Syntax:** **getZipOutput( )
getZipOutput(** *filename* **)***filename***.getZipOutput(** **)**

| **Parameter** | **Description** |
| --- | --- |
| *filename* | A String value giving the name of the zip file to be created. The name of the zip file can be set or changed later during the writing of the final zip file. |**Zip Output Object**

| **Field/Function** | **Description** |
| --- | --- |
| *addFile(filename, url)* | Adds an additional file to the zip repository by URL. The url specifies where to find the file to be added. The filename is the path and name to be given to the file within the repository. |
| *addData(filename, data, charset)* | Adds an additional file to the zip repository by giving the actual content of the file. The *charset* is an optional parameter which defaults to "UFT-8". The *data* received will be stored in the zip repository with the path and and name given by the *filename* parameter. |
| *errors* | A read-only String value containing any errors which have resulted from prior calls to addFile(...), addData(...) or write(...). If more than one error has occured, the different messages will be separated by newline characters. |
| *resetErrors( )* | Clears the *errors* value making it easier to determine which action resulted in which error. |
| *write(filename)* | Writes the final zip file. A *filename* may optionally be passed which overrides any filename given when this zip output object was first created. The result of this function is a temporary URL where the final zip file may be found. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___8162](/shared/custompage/custompage.jsp?_event=view&_id=445506___8162) [/shared/custompage/custompage.jsp?_event=view&_id=445506___11921](/shared/custompage/custompage.jsp?_event=view&_id=445506___11921)

 
