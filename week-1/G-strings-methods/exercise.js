function finalGrade(exam, projects) {
  if (exam >= 90 && projects >= 10) {
    return "passed";
  } else {
    return "not passed";
  }
}
console.log(finalGrade(15, 12));
