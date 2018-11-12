function s(w1, w2) {
  return w1.concat(w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
// it join two strings togather
// - How many parameters does the function take?It took two
// - What is the function name? s
// - Where is the function called? with what parameters? In line no.5 with two parameters 'code' and 'your'
// - What does the function return? codeyour
// - How can this function be improved? we could change the name of the function and paramerers so it shows
// it will be easy to understand the function
/*function string(str1, str2) {
  return str1.concat(str2);
}
var result = string("code", "your");
console.log(result);*/
//or to write it  this way : return str1.concat('').concat(str2); if we want a space between the two words
