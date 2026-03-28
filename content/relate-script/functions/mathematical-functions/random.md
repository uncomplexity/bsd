

- random(...)

---
The random(...) function has 5 variations, not counting syntax variations. The result of this function is a pseudo-random number.**Syntax:**
**random()
random(** *maximum* **)
random(** *minimum***,** *maximum* **)**
**random(** *maximum***,** *secure* **)
random(** *minimum***,** *maximum***,** *secure* **)**
*maximum***.random(****)**
*minimum***.random(** *maximum* **)**
*maximum***.random(** *secure* **)**
*minimum***.random(** *maximum***,** *secure* **)**

| **Parameter** | **Description** |
| --- | --- |
| *maximum* | The upper bound of the range of possible result values. The result will be strictly less than the value of maximum. If omitted, the default is 1.0. If maximum is specified as an integer value and minimum is also specified as an integer value or is omitted, the result will be an integer. Otherwise the result will be a floating-point number. |
| *minimum* | The lower bound of the range of possible result values. The result will be greater than or equal to the value of minimum. If omitted, the default is zero. If the value of minimum is greater than the value of maximum then the two values will be switched internally with minimum becoming the upper bound and maximum the lower bound. |
| *secure* | If a value of true is given, then a cryptographically strong pseudo-random number generator will be used in place of the standard one. The standard pseudo-random number generator is much faster, but it is simple for an outside observer to begin predicting what the next 'random' number will be after observing only a small sequence of results. A crypographically strong pseudo-random number generator produces a sequence of pseudo-random numbers that cannot be used by an outside observer to predict the next pseudo-random number, even after observing a long sequence of results, without having an impractically large computing resource at their disposal or very long time periods to complete the computation. This is true even if the outside observer is aware of the internal algorithm. The sequence of pseudo-random numbers can only be replicated by knowing the secret seed value, similar to knowing a password. |
[/shared/custompage/custompage.jsp?_event=view&_id=445506___3182](/shared/custompage/custompage.jsp?_event=view&_id=445506___3182) [/shared/custompage/custompage.jsp?_event=view&_id=445506___4901](/shared/custompage/custompage.jsp?_event=view&_id=445506___4901)

 
