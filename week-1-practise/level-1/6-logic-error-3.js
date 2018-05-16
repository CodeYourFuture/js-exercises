// The syntax for this function is valid but it has an error, find it and fix it.

function trim(word) {
<<<<<<< HEAD
  return word.trim();
}

var result = trim(" CodeYourFuture  ");
=======
  return "word".trim();
}

var result = trim("CodeYourFuture  ");
>>>>>>> master
console.log(result);
// Expected result "CodeYourFuture"
// Run the program and make sure it works
