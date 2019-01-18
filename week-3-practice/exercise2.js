/*
we have a list of grades, we would like to know
all the greads that 80 and above.
*/

var grades = [90, 80, 77, 78, 60, 56, 86, 79, 55];

var list = grades.filter(grade => grade >= 80); //Complete this line

console.log(list);

/* EXPECTED OUTPUT
----------------------
[90, 80, 86]
*/
