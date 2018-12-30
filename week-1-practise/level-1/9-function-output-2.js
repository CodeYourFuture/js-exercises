function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them. The concat() method is used to join two strings. This function returns a string which is combination of `code` and `your`; `codeyour`.
// - How many parameters does the function take? 2
// - What is the function name? s
// - Where is the function called? with what parameters? The function is called on line 5 with s, w1 and w2 (parameters)
// - What does the function return? In this example, the existing strings don't change, but return a new string containing the text of the joined strings.
// - How can this function be improved? "Concat()"" method can be used with more than one string. For example:
 //function s(w1, w2, w3) {
 //     return w1.concat(w2, w3);
 //}
 //var result = s('code', 'your', 'future' );
 //console.log(result);