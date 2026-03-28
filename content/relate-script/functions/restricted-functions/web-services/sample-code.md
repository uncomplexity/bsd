

- Sample Code

---
soapClient = getNewSoapClient("[https://someDomain.com/path.wsdl](https://somedomain.com/path.wsdl)");
couplesInfo = soapClient.getNewSoapObject("org.lds.ial.ws.CouplesInfo");couplesInfo.soapSetString("setProfileId", "bsProfile8");
letter = soapClient.getNewSoapObject("org.lds.ial.ws.Letter");
letter.soapSetString("setTeaser", "Letter Teaser");
letter.soapSetString("setLetter", "Letter Body");
couplesInfo.soapSetCustomObject("setLetter", letter);
couplesInfo.soapSetDateTime("setMarriageDate", curDateTime());
couplesInfo.soapSetString("setNeighborhood", "my neighborhood");
couplesInfo.soapSetInteger("setHoldCount", 2);
couplesInfo.soapSetBoolean("setPublicProfile", true);pets = new String[Integer];
pets[0] = 'Tramp';
pets[1] = 'Dale';
couplesInfo.soapResetMap("getPets",pets); //See documentation for alternate methods.ids = new String[Integer];
ids[0] = '1';
ids[1] = '2';
couplesInfo.soapResetMap("getLimitedBirthMotherIds",ids); //See documentation for alternate methods.couplesInfo.soapSetEnum("setHoldType", "PENDING");child1 = soapClient.getNewSoapObject("org.lds.ial.ws.Child");
child1.soapSetString("setFirstName", "Child1");
child1.soapSetEnum("setGender", "MALE");
child1.soapSetBoolean("setBiological", false);child2 = soapClient.getNewSoapObject("org.lds.ial.ws.Child");
child2.soapSetString("setFirstName", "Child2");
child2.soapSetEnum("setGender", "FEMALE");
child2.soapSetBoolean("setBiological", true);children = couplesInfo.soapGetMapOfCustomObject("getChildren");
children[0] = child1;
children[1] = child2;couplesInfo.soapResetMap("getChildren", children); //See documentation for alternate methods.couplesInfo.soapCall("[http://someDomain.com","setCouplesInfo](http://somedomain.com%22,%22setcouplesinfo/)"); //This is for retrieving the above objects after they have been set and setting them into Relate fields for display.profileId = couplesInfo.soapGetString("getProfileId");
letterTeaser = letter.soapGetString("getTeaser");
letterBody = letter.soapGetString("getLetter");
marriageDate = couplesInfo.soapGetDateTime("getMarriageDate");
neighborhood = couplesInfo.soapGetString("getNeighborhood");
holdCount = couplesInfo.soapGetInteger("getHoldCount");
publicProfile = couplesInfo.soapGetBoolean("isPublicProfile");pets = couplesInfo.soapGetMapOfString("getPets");
petsStr = pets[0] + ", " + pets[1];ids = couplesInfo.soapGetMapOfString("getLimitedBirthMotherIds");
idsStr = ids[0] + ", " + ids[1];holdType = couplesInfo.soapGetEnum("getHoldType");children = couplesInfo.soapGetMapOfCustomObject("getChildren");
childrenStr = children[0].soapGetString("getFirstName") + ", " + children[1].soapGetString("getFirstName") + "\n"; [/shared/custompage/custompage.jsp?_event=view&_id=445506___7281](/shared/custompage/custompage.jsp?_event=view&_id=445506___7281) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3144](/shared/custompage/custompage.jsp?_event=view&_id=445506___3144)

 
