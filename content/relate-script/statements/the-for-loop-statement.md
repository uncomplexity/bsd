

- The for Loop Statement

---
**Syntax:**
**for (** *initializers ;* *boolean-expression* ; *updaters* **)** body-*statement*

In the above syntax description, the single body-statement may be replaced with multiple statements by enclosing those statements in a statement block using braces:**{** *statement1***;** *statement2***;** *statement3***;** **}**Both the initializers and updaters clauses are a comma delimited list of zero or more expressions.**Description:**
The for statement repeatedly executes the body-statement as long as the boolean-expression evaluates to true up to a maximum of 10,000 executions. If the boolean-expression evaluates to false or null, looping stops and the formula continues by executing any statements after the do statement. Note that the body-statement may never be executed if the boolean-expression does not evaluate to true the first time it is evaluated. If the boolean-expression is omitted, then it is considered to be true every time. The initializers clause is executed exactly once at the beginning of the loop before the boolean-expression is evaluated for the first time and before the body statement is executed. The updaters clause is executed once for each execution of the body statement. It is executed after the body statement and before the re-evaluation of the boolean expression. [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3131](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3131) [https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3133](https://bluestepplatformsupport.bluestep.net/shared/custompage/custompage.jsp?_event=view&_id=445506___3133)

 
