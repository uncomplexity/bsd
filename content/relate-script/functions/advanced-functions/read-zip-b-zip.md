

- readZip(...)B.zip

---
The readZip(...) function is used read the files inside a zip archive and inspect the properties of those files. The result of readZip(...) is an array of ZipEntryReader objects index sequentially starting at 0. ZipEntryReader objects are detailed below, including an example.**Syntax:** **readZip(** *url* **)**
*url***.readZip( )**

| **Parameter** | **Description** |
| --- | --- |
| *url* | A String value giving the url where the zip file can be found. |**ZipEntryReader Object**

| **Field/Function** | **Description** |
| --- | --- |
| *filename* | The name of the file stored in the zip archive. If the file is inside a folder, the filename includes the full path to the file as well as the filename. |
| *size* | The uncompressed size of the file in bytes. This value may be -1 if the size is unknown. |
| *compressedSize* | The compressed size of the file in bytes. This value may be -1 if the size is unknown. |
| *time* | A DateTime value indicating the last modification timestamp. This value may be null if the modification date is unknown. |
| *crc* | The CRC value of the file. This is used to verify data integrity if there is a possibility that the zip file has been tampered with. |
| *comment* | A comment that is stored with the file inside the zip archive. It is unlikely this will ever be anything other than null. |
| *getContent(charset)* | Gets the uncompressed contents of the file from inside the zip archive. The function recieves one optional additional parameter, the name of the charset used to decode the bytes into a String value. The default is UTF-8. For binary files you should use the special value "BASE64" which gets the file as a Base64 encoded String compatible with other RelateScript functions such as document fields which can store the file. |
**Example:**The following code reads a zip file from the internet and displays the contents of the archive: rowF = getFormatter('<li>"{3}" size: {4}({1}); crc: {2}; time: {5}<br>{0}</li>');
 files = readZip('https://github.com/downloads/hunterhacker/jdom/jdom-2.0.2.zip');
 out = '<ul>'
 for (i, file in files) {
 out += rowF.format(
 file.comment,
 file.compressedSize,
 file.crc,
 file.filename,
 file.size,
 file.time
 );
 }
 out += '</ul>'

The result is the following HTML:

- "jdom-2.0.2-contrib.jar" size: 149,476(135,711); crc: 1,965,380,847; time: 6/8/12 10:22 PM
- "jdom-2.0.2-javadoc.jar" size: 1,002,040(955,816); crc: 12,515,896; time: 6/8/12 10:22 PM
- "jdom-2.0.2-junit.jar" size: 469,294(429,333); crc: 4,235,044,619; time: 6/8/12 10:22 PM
- "jdom-2.0.2-sources.jar" size: 807,506(773,258); crc: 2,491,917,908; time: 6/8/12 10:22 PM
- "jdom-2.0.2.jar" size: 295,355(273,559); crc: 3,124,812,002; time: 6/8/12 10:22 PM
- "lib/jaxen-1.1.3.jar" size: 223,395(198,493); crc: 3,882,523,011; time: 1/23/12 3:54 PM
- "lib/jaxen.1.1.3.LICENSE.txt" size: 1,610(868); crc: 1,110,399,921; time: 1/23/12 3:54 PM
- "lib/xerces.2.11.LICENSE" size: 11,560(3,963); crc: 1,231,013,273; time: 1/23/12 3:54 PM
- "lib/xerces.2.11.NOTICE" size: 911(371); crc: 111,968,156; time: 1/23/12 3:54 PM
- "lib/xercesImpl.jar" size: 1,367,760(1,209,888); crc: 972,832,849; time: 1/23/12 3:54 PM
- "lib/xml-apis.jar" size: 220,536(172,949); crc: 3,203,011,316; time: 1/23/12 3:54 PM
- "LICENSE.txt" size: 2,558(1,243); crc: 3,326,120,105; time: 4/5/12 9:08 AM
- "README.txt" size: 4,457(2,009); crc: 2,874,049,301; time: 4/5/12 9:06 AM
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8801](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8801) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3186](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3186)

 
