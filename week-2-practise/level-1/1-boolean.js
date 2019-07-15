// The code is valid but the program does not produce the expected result
// Fix it.
/*
var isHappy = true;

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am happy
*/
var str2 = "the-quick-brown-fox-jumps-over-the-lazy-dog.";

console.log(stre(str2));

function stre(str) {
  var words = str.split("-");
  for (i = 1; i < words.length; i += 2) {
    return (words[i][0] = words[i][0].toLocaleUpperCase());
  }
}
