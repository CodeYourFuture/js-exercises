function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
// It appends the string (passed as an argument in the parentheses) to the end of the first string
// - How many parameters does the function take?
// it takes two parameters
// - What is the function name?
// s()
// - Where is the function called? with what parameters?
// in the variable result's initialisation
// - What does the function return?
// "codeyour"
// - How can this function be improved?
// the function name can be more descriptive such as "addString()"