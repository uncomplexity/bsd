

- Style Guidelines

---
Following proper style guidelines can make the meaning of a formula much clearer to a human reader. Conversely, using poor style can make a piece of formula logic difficult to read, even for experienced software developers. Style guidelines do not affect the logic or outcome of a formula, but if followed they can make scripts easier to read, easier to maintain and (with a bit of experience) help to identify problems. Also, although these guidelines cover many cases, there will always be cases that don't fit the guidelines and will need improvisation. The goal is always the same though: style techniques should make the meaning of the logic clearer.**Indentifiers**
Formula IDs for fields and forms, as well as variable names, should be carefully chosen. Choose names that give a pretty good idea as to what the identifier is for, even if returning to it after six months. Avoid using very short names that have no clear meaning. It is generally better to spell things out than abbreviate in a way that isn't memorable or understandable later. In this style guide, the examples sometimes seem to "break" this rule by including meaningless variable names such as x and y. But in another sense, the examples are keeping the spirit of the rule because the names are intended to illustrate layout without any other meaning, so using a meaningless name conveys this.At the same time, avoid using names that are so long that they are cumbersome to type. Excessively long names can also cause trouble by taking up so much room on a line that other parts of the line cannot be seen in the formula edit window. This obscures the meaning of the formula rather than making it clearer.The most important rule in naming things is this warning: If there are two fields or variables which do similar things be SURE that the names chosen clearly indicate which name is used for what. There are few things that make a piece of logic more difficult to read than two variables with similar names and no clear indication of what the difference is.Lastly, the use of "camel case" is recommended. Since identifier names cannot contain spaces, it can become difficult to distinguish word boundaries. One such example is a domain which BlueStep purchased and later regretted. It was "answers4therapists.com". Is that 'answers for therapists' or 'answers for the rapists'? Camel caps solves this problem by capitalizing the first letter of each word after the first word. So, in our example it should be answers4Therapists.com not answers4TheRapists.com. With a little practice, oneCanLearnToReadCamelCapsQuiteEasily. Any words which are acronyms should be all caps (or all lowercase, if they are the first word) as in: mySpecialURL**Whitespace**
Whitespace is all those symbols which have no glyph to display, but affect the position of the letters, numbers and symbols around them. Most common is the humble "space" character we use to separate words, but there is also the carriage-return (or "enter"), newline and the tab character. Even more exotic is vertical tab which hasn't seen serious use in several decades. Appropriate use of whitespace, as in graphical design, can make all the difference in making a message readable. Here are a few rules:Put a space before and after most mathematical operators. In writing x=y+z it's not that much more readable as x = y + z, but as the complexity of the logic grows, so does the need for spaces. Consider the following fragment from an actual script:
if (pastBPHigh != null && (diastolic30High == -1 || pastBPHigh > diastolic30High)) {
diastolic30High = pastBPHigh;
}
is far more readable than
if(pastBPHigh!=null&&(diastolic30High==-1||pastBPHigh>diastolic30High))
diastolic30High=pastBPHigh;
Getting in the habit of doing it right will save much frustration later.Guidelines for other symbols include: put a space after, but not before, commas and semi-colons. Do not put a space between a prefix or suffix operator and the thing it is operating on: y * -x,
not y * - x. Normally, a space is put before an opening parenthesis (but not after), and after a closing parenthesis (but not before.) However, with nested paretheses there should be no space between adjacent parentheses. For example:
y = ((x + 1) * (x + 15))
One final exception is function calls. Do not put a space between the function name and the opening parenthesis:
fullName.indexOf(",")
However, follow the normal rules and include a space before the opening parenthesis in a statement:
if (eyeColor == "blue")There should not be spaces around a period or around square brackets, unless another rule would require it. myArray[5] = someForm.someFieldFollowing an opening brace (that's the curly kind), begin a new line and indent each line after the brace until reaching the matching closing brace. The closing brace should begin a new line and be indented the same amount as the line containing the opening brace. Here is an example:
if (salsaFlavor == "hot") {
needWater = true;
if (chipTexture = "crisp") {
message = "Tasty!";
} else {
message = "We need fresh chips!"
}
} else if (salsaFlavor == "mild") {
message = "Boring.";
}In a very long line, it is helpful to break it into multiple lines. Double indent (or more) each line that was originally part the first line. Also, it is helpful to begin each new line with an operator to clearly indicate that this line belongs with the previous one:
message = '<html>'
+ '<body>'
+ '<a href="http://mydomain.bluestep.net'
+ myDestinationURL
+ '">Click Here</a>'
+ '</body>'
+ '</html>'**Comments**
If it was hard to write, what was done will likely be forgotten before it is revisited. Do everyone a favor and leave a note explaining how it works or why that method was chosen. Also, use comments in large formulas to break the logic into sections by using a comment as a section header. A line reading:
// ------- Begin second part: email notifications -------
can be a major time saver when seen later. Use common sense though; putting in too many comments can make it hard to see the important ones (not unlike pointless consumer warning labels).**Summary**
Remember, don't try to cut corners in formatting and style. It may be a bit faster to type without the extra whitespace, but in the long run, no one ever regrets good style. There are many, many more style techniques that can aid script readability. Generally, anything done stylistically to make the meaning clearer is a good thing. [/shared/custompage/custompage.jsp?_event=view&_id=445506___3122](/shared/custompage/custompage.jsp?_event=view&_id=445506___3122) [/shared/custompage/custompage.jsp?_event=view&_id=445506___3125](/shared/custompage/custompage.jsp?_event=view&_id=445506___3125)

 
