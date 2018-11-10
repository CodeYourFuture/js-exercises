function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them. 
//it will join strings and give back a new string with the sum result. In arrays, it will join arrays by order
//and create new array with the elements of each parameter 
// - How many parameters does the function take?
//as many as wanted
// - What is the function name?
//s
// - Where is the function called? with what parameters?
//line 6, code, your
// - What does the function return?
//a new string with a joined strings codeyour
// - How can this function be improved?
//by giving a more clear names for the functions and the paramters as well as adding a space between both strings
function s(w1, w2) {
    return w1.concat(" ",w2);
}

var result = s('code', 'your');
console.log(result);