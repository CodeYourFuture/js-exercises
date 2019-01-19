/*You have an array named "myClass"  wich contain all the students class
along with their attendance:
-Procduce a new array named "eligbleStudens" for the students how are eligble to set for
exam with minimum attendance of 8 days */

var myclass = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];
function eligbleStudents(students) {
  return students[1] >= 8;
}

var eligbleStudents = myclass.filter(eligbleStudents).map(students => {
  return students[0];
});
console.log(eligbleStudents);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
*/
