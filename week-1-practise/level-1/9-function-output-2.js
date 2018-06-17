function s(w1, w2) {
  return w1.concat(" ", w2);
}

var result = s("code", "your");
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.   The concat() function concatenates the string arguments to the calling string and returns a new string.
// - How many parameters does the function take? two
// - What is the function name? s
// - Where is the function called? with what parameters? it is called by var result and it takes 'code' and 'your' as parameters.
// - What does the function return? A new string containing the combined text of the strings provided.
// - How can this function be improved? in .concat we can add an empty ' ' to have some space between the w1 and w2
