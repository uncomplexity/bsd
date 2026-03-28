

- compileSASS(String Sass)

---
Get Sassy with your bad self with our fresh, new Sass (SCSS) compiler. It's fresh, it's new, and it compiles Sass.

| Method Name | Return Value | Description |
| --- | --- | --- |
| compileSASS(String Sass) | String | Pass in a big fat string of Sass and get back a string of CSS. |
Sass (SCSS) is a CSS preprocessor. Some of the key features are variables, nesting, mixins, inheritance, function directives, math, and looping. Now you only have to declare colors and sizing once for your project. Copy the following to have the BlueStep color palatte: styles = compileSASS(``
 $bs-red: #C03B2B;
 $bs-orange: #F29D1F;
 $bs-yellow: #EFC319;
 $bs-green: #28AE60;
 $bs-blue: #2A81BA;
 $bs-blue-2: #0063A6;
 $bs-purple: #894C9E;
 $bs-gray: #969FA0;
 $bs-default: #2D3F50;
 ``)

Sass has tons of built-in functions. [Here is a list.](https://sass-lang.com/documentation/Sass/Script/Functions.html) Some I'd like to point out are [lighten](https://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method), [darken](https://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method). Sass can accommodate [maps](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps) (a bit like JavaScript objects). It has the [@if](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#if) directive (along with @else) allowing you to apply conditional styles. There is an insane amount of other functionality available. Here's an example of nesting:Sass .btn {
 margin-bottom: 0 !important;
 overflow: hidden;
 width: 100%;
 &.save-button {
 .save-icon, .snapshot-icon {
 .saving {
 animation: saving 1s -.5s infinite;
 }
 svg {
 height: 2rem;
 padding: 0 .5rem;
 transition: .3s;
 }
 }
 }
 }

CSS .btn {
 margin-bottom: 0 !important;
 overflow: hidden;
 width: 100%;
 }
 .btn.save-button .save-icon .saving, .btn.save-button .snapshot-icon .saving {
 animation: saving 1s -0.5s infinite;
 }
 .btn.save-button .save-icon svg, .btn.save-button .snapshot-icon svg {
 height: 2rem;
 padding: 0 0.5rem;
 transition: 0.3s;
 }

You'll notice that the CSS in this example is actually 4 lines less, but it's a lot more typing and maintaining. If you have to change `.btn`, for example, in the CSS you'll have to change it in five places, whereas the Sass only requires one change. [/shared/custompage/custompage.jsp?_event=view&_id=445506___4781](/shared/custompage/custompage.jsp?_event=view&_id=445506___4781) [/shared/custompage/custompage.jsp?_event=view&_id=445506___8021](/shared/custompage/custompage.jsp?_event=view&_id=445506___8021)

 
