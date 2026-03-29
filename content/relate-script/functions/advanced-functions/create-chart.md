

- createChart(...)

---
The createChartl(...) function has only two basic variations, with six different chart types and many optional variations that can be passed in via the option map. This function creates a chart and returns the URL to that chart for use on the report content of a merge report.**Syntax:** **createChart(** *chartType***,** *chartData* **)** **createChart(** *chartType***,** *chartData***,** *optionData* **)**

| **Parameter** | **Description** |
| --- | --- |
| *chartType* | A String value containing the type of chart to be created. Possible options include "pie", "bar", "line", "xyLine", "timeLine", and "plot". See below for more details on each chart type. |
| *chartData* | An array value containing the data that is to be displayed in the newly created chart. For details on what this array should contain see the various chart data types below. |
| *optionData* | An array value containing style settings that will affect the chart's appearance. This array is an array of String indexed by String and should be created using code similar to: optionData = new String[String]. The index is the name of the option, and the value is option setting(s). See below for possible options and their acceptable values. Note that unrecognized or mis-spelled options will be ignored. |

| **Chart Type** | chartData = new ... | **Description** |
| --- | --- | --- |
| *pie* | Float[String] | A pie chart is a standard circular chart that displays pieces of data as slices of the circle with sizes proportional to the numeric value they represent. At this time only one group of data can be shown per pie chart. The *chartData* input for the pie chart type is an array of numeric values (Float or Integer) indexed by String values corresponding to the data and label, respectively, of each pie segment. |
| *bar* | Integer[String, String] Integer[String, Integer] Integer[String, Float] Float[String, String] Float[String, Integer] Float[String, Float] | A bar chart displays a series of bars that have lengths proportional to the numeric value they represent. Several groups of bars can be displayed on the same chart provided they have the same X-values. The *chartData* is an array of numeric values (Integer or Float), corresponding to the Y-value, with two indexes: The first index is a String containing the data group label. The second index is a numeric value (Integer or Float) corresponding to the X-value. |
| *line* | Integer[String, String] Integer[String, Integer] Integer[String, Float] Float[String, String] Float[String, Integer] Float[String, Float] | A line chart is a simple line plotted on a X-Y axis where the line follows each data point in the provided chartData Map. Several lines can be displayed on the same chart provided they have the same X-values. The data input for line charts is the same as data input for bar charts. The *chartData* is an array of numeric values (Integer or Float), corresponding to the Y-value, with two indexes: The first index is a String containing the data group label. The second index is a numeric value (Integer or Float) corresponding to the X-value. |
| *xyLine* | Integer[String, String, Integer] Integer[String, Integer, Integer] Integer[String, Float, Integer] Float[String, String, Integer] Float[String, Integer, Integer] Float[String, Float, Integer] | A XY line chart is essentially a line chart that can have more than one Y value per X value. This added functionality requires an extra integer index to identify and number each Y-value belonging to a single X-value. As with normal line charts several XY lines can be displayed on the same chart provided they have the same X-values. The *chartData* is an array of numeric values (Integer or Float), corresponding to the Y-value, with three indexes: The first index is a String containing the data group label. The second index is a numeric value (Integer or Float) corresponding to the X-value. The third index is an Integer value which is not displayed on the chart and gives a unique index value to each Y-value corresponding to a given label and X-value. |
| *timeLine* | Integer[String, DateTime, Integer] Integer[String, Date, Integer] Integer[String, Time, Integer] Float[String, DateTime, Integer] Float[String, Date, Integer] Float[String, Time, Integer] | A time line chart is essentially a line chart that has Date/Time values along the X axis instead of numbers. This is useful when a convertion of Date/Time values to String values would result in incorrectly ordered values with respect to chronological order. As with normal line charts several time lines can be displayed on the same chart. The *chartData* is an array of numeric values (Integer or Float), corresponding to the Y-value, with three indexes: The first index is a String containing the data group label. The second index is a Date, Time or DateTime value corresponding to the X-value. The third index is an Integer value which is not displayed on the chart and gives a unique index value to each Y-value corresponding to a given label and X-value. |
| *plot* | Integer[String, String, Integer] Integer[String, Integer, Integer] Integer[String, Float, Integer] Float[String, String, Integer] Float[String, Integer, Integer] Float[String, Float, Integer] | A scatter plot chart displays each point of data as a dot or other symbol on a X-Y Axis. Several groups of points can be displayed each with their own symbol and/or color to differentiate them. The data input for plot charts is the same as XY line charts.The *chartData* is an array of numeric values (Integer or Float), corresponding to the Y-value, with three indexes: The first index is a String containing the data group label. The second index is a numeric value (Integer or Float) corresponding to the X-value. The third index is an Integer value which is not displayed on the chart and gives a unique index value to each Y-value corresponding to a given label and X-value. |

| **General Options** | |
| --- | --- |
| **Option** | **Description** |
| *legend* | *"true"* if you would like to display a legend at the bottom of the chart *"false"* if not. This option is defaulted to *"true".* |
| *xTitle* | The text to be displayed along the x axis. Note that this cannot be used with pie charts. This option is defaulted to "". |
| *yTitle* | The text to be displayed along the y axis. Note that this cannot be used with pie charts. This option is defaulted to "". |
| *numFormat* | This indicates the format to be used for the numerical ticks along the y axis. Possible options are *"Percent", "Currency",* and a number indicating how many digits after the decimal point should be shown. The default allows the system to automatically decide how many applicable digits should be shown. Note that this cannot be used with pie charts. |
| *title* | The text to be displayed at the top of the window. This option is defaulted to "". |
| *titleFont* | The font to be used on the title at the top window display. (See options below under "Font Options") |
| *dataAlpha* | The opacity of the data that is to be displayed. This should be a value between 0.0 and 1.0. This option is defaulted to "1.0" (completely opaque). |
| *backgroundColor* | The background color of the entire image. This can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). This option is defaulted to *"#F8F6FC".* |
| *chartBackgroundColor* | The background color for the chart itself. This can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). This option is defaulted to *"#E5E3E6".* |
| *chartBorderColor* | The color of the border around the chart. This can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). This option is defaulted to *"#000000".* This option is defaulted to *"#FFFFFF"* for pie charts and *"#000000"* for all other charts. |
| *gridLineColor* | The color of the grid lines within the chart. This can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). Note that this cannot be used with pie charts. This option is defaulted to *"#000000".* |
| *horzSize* | The horizontal size in pixels of the image to be created. (No decimals allowed). This option is defaulted to 500. |
| *vertSize* | The vertical size in pixels of the image to be created. (No decimals allowed). This option is defaulted to 250. |
| *plotOrient* | The orientation of the chart. Possible options are *"vert"* and *"horz"*. This option is defaulted to *"horz".* Note that this cannot be used with pie charts. |
| *dataColors* | A newline ("\n") delimited list of series numbers with their color value (i.e. "0\n#FF0000\n1\n#00FF00"). Series numbers should correspond to entry order. Colors can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). Note that for pie charts the input name of the section should be used instead of the section number if not the value will be ignored. These options are defaulted to the *"Primary"* Color set (see corporate colors) for most charts and *"Pastel"* for Pie charts. |
| *outlineColor* | The color of the border around the plot (the inner box). This can be a RGB value (i.e. 255255255) or a hexadecimal value (i.e. #000000). This option is defaulted to *"#FFFFFF"* for pie charts and *"#000000"* for all other charts. |
| *colorSet* | The color set that should be used as a default for the chart and it's series/pie colors. This option is defaulted to *"Pastel"* for pie charts and *"Primary"* for all other charts. Other options include *"Brights"* and *"Jewel".* |
| **Pie Chart Specific Options** | |
| **Option** | **Description** |
| *explode* | A newline ("\n") delimited list of section names with thier explosion factor (i.e. "Section 1\n0.2\nSection 2\n0.4"). Note that explosion factors should tend to be around "0.4". Also note that the use of exploding sections and 3-D graphics is not possible in pie charts with precedence given to 3-D graphics, if both are active. |
| *3D* | *"true"* if you would like the pie chart to be three dimensional; *"false"* if not. This option is defaulted to *"false"*. See above for note on exploding sections and three dimensional pie charts. |
| **Bar Chart Specific Options** | |
| **Option** | **Description** |
| *drawBarOutline* | *"true"* if a border should be drawn around the created bars; *"false"* if not. This option is defaulted to *"false".* |
| *itemMargin* | The space that should exist between bars in the same category. This should be a value between 0.0 and 1.0. |
| *3D* | *"true"* if you would like the bar chart to be three dimensional; *"false"* if not. This option is defaulted to *"false"*. Note that a bar chart can be both stacked and three dimensional. |
| *stacked* | *"true"* if you would like the bar chart to be stacked; *"false"* if not. This option is defaulted to *"false"*. Note that a bar chart can be both stacked and three dimensional. |
| *categoryLabelRotate* | This option takes a Float value that represents the angle you would like the Category Labels to rotate. Possible values range from -90.0 to 90.0. All other numbers are ignored. (0 is default) |
| **Line Chart Specific Options** | |
| **Option** | **Description** |
| *seriesShapes* | This option can either take in a simple *"true"/"false"* value indicating wether all shapes should be turned on/off or a newline ("\n") delimited list of line names with a *"true"* value if each data point on the line should have a shape placed on it; *"false"* if not (i.e. "Section 1\ntrue\nSection 2\nfalse"). Sections not listed are defaulted to *"true"*. |
| *categoryLabelRotate* | This option takes a Float value that represents the angle you would like the Category Labels to rotate. Possible values range from -90.0 to 90.0. All other numbers are ignored. (0 is default) |
| **XY Line and Time Line Chart Specific Options** | |
| *movingAvg* | *"true"* if you would like the XY/Time Line chart to be translated into a moving average line chart; *"false"* if not. This option is defaulted to *"false"*. |
| *period* | The period that the moving average uses for calculations. This option is defaulted to *"1.0"*. If movingAvg is set to *"false"* this option will have no effect. |
| *skip* | A value indicating how much of the beginning of the chart should be "skipped" in the moving average. This option is defaulted to *"0.0"*. If movingAvg is set to *"false"* this option will have no effect. |
| *suffix* | The suffix that should be appended on to all line descriptors (shown in the legend). This option is defaulted to *""*. If movingAvg is set to *"false"* this option will have no effect. |
| **Time Line Chart Specific Options** | |
| *dateFormat* | This indicates the date format that should be used along the x Axis. For a description of possible values refer to the [Java API documentation for SimpleDateFormat](http://java.sun.com/j2se/1.5.0/docs/api/java/text/SimpleDateFormat.html). Note that this is defaulted to automatically select a date format suitable for the input data given. |
| *dateInterval* | This indicates the interval that the dates along the x Axis should appear. The input should consist of two values separated by a newline ("\n") character. The first value should be the time period and can be *"year", "month", "day", "hour", "minute", "second",* or *"millisecond".* The second value is how many of those time periods are in each interval, note that if this is not given it will default to "*1".* For example if you wanted an interval of one day you should pass in the string *"day\n1"* or *"day\n".* Note that this is defaulted to automatically select an interval suitable for the input data given. |
| **Plot Chart Specific Options** | |
| Plot charts do not have any specific options not covered in the general option section. | |
| **Subtitle Options** | |
| Subtitles are available for all charts. A valid subtitle code snippet would look something like this: optionData["subtitle1"] = "Sample Subtitle"; optionData["subtitleFont1"] = "font-face:Serif,font-weight:Bold,font-size:20,text-align:left,vertical-align:top,text-color:#000000,background-color:#FFFFFF";<br>This would create a subtitle with the text "Sample Subtitle" with a Serif font, a bold weight, a size of 20 pt, aligned to the top and left, with a text color of black and a background color of white. Note that each option in the subtitleFont string is built by listing the option then a colon then the option setting then a comma before listing the next option. See below for possible options to be set. | |
| **Option** | **Description** |
| *subtitle** | The text to be shown in the subtitle to be displayed. The * must be a sequential number identifying this subtitle starting with 1. |
| *subtitleFont** | The font to be used with the coresponding subtitle of the same sequential number. (See below for font options). Note that if the number is omitted the entry will be considered the default subtitle font and all subtitles that do not have a coresponding subtitle font will default to these settings. |
| **Font Options** | |
| **Option** | **Description** |
| *font-face* | The font face of the text (i.e. "Serif", "SansSerif" ect.). This option is defaulted to *"SansSerif".* |
| *font-style* | This option turns italics on or off. Possible options are *"italic"* and *"plain"*. This option is defaulted to *"plain".* |
| *font-weight* | This option turns bolding on or off. Possible options are *"bold"* and *"plain"*. This option is defaulted to *"plain".* |
| *font-size* | How large the text should be. This option is defaulted to *"12".* |
| *text-align* | The horizontal alignment of the text within the window. Possible options are *"left", "right"* and *"center"*. This option is defaulted to *"center".* |
| *vertical-align* | The vertical alignment of the text within the window. Possible options are *"top", "bottom"* and *"center"*. This option is defaulted to *"top".* |
| *rotation* | This option affects where the text is positioned, as well as the rotation of the text. Possible options are *"left", "right", "bottom",* and *"top". "bottom"* and *"top"* options will leave the text unrotated. *"right"* will rotate the text 90 degrees clockwise. *"left"* will rotate the text 90 degrees counter clockwise. This option is defaulted to *"top".* |
| *text-color* | The color of the text itself. This can be a RGB value (i.e. "255255255") or a hexadecimal value (i.e. "#000000"). This option is defaulted to "000000000". |
| *background-color* | The color of the background behind the text. This can be a RGB value (i.e. "255255255") or a hexadecimal value (i.e. "#000000"). This option is defaulted to "000000000". |
[https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11761](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___11761) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8541](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___8541)

 
