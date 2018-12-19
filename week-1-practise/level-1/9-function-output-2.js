function s(w1, w2) {
  return w1.concat(w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used to understand them. concatenation w1 and w2 strings.
// - How many parameters does the function take? 2 parameters.
// - What is the function name? function name is s.
// - Where is the function called? with what parameters? in line 5, the function is called with 'code' and 'your' strings.
// - What does the function return? this function returns a string which is combination of `code` and `your`; `codeyour`.
// - How can this function be improved? concat() method can accept more than one string.
//function s(w1, w2, w3) {
//return w1.concat(w2, w3);
//}
//var result = s('code', 'your', 'future' );
//console.log(result);
