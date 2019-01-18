/* 
  You are given an array of student marks.
  If all marks are over 10 the student is graduated, otherwise should try again. 
  Using .every() (and any other array methods necessary), find out the student is graduated or not.
  If the student is graduate print "Congratulation, You are graduated", otherwise print "You are nearly there, try again".
*/

var marks = [11, 19, 13, 20, 18, 16, 10];
function studentResult(arr) {
  if (arr.every(studentMarks) == true) {
    return "Congratulations, You are graduated";
  } else if (arr.every(studentMarks) == false) {
    return "You are nearly there, try again";
  }
}

function studentMarks(mark) {
  return mark > 10;
}

console.log(studentResult(marks));
/* EXPECTED OUTPUT */
// You are nearly there, try again
