function s(w1, w2) {
    return w1.concat(w2);
}

var result = s('code', 'your');
console.log(result);

/* --------------- Function improved-----------------------
function joinWords(word1, word2) {
    return word1.concat(word2);
}

var result = joinWords('code ', 'your');
console.log(result);

*/

// Answer these questions:
// - What does this program do? Run it and see, or Google some of the methods used ot understand them.
//      This program joins 2 words by using the method concatenate
// - How many parameters does the function take?
//      Two
// - What is the function name?
//      s
// - Where is the function called? with what parameters?
//      The function is called  after defining the function,
//      When defining the variable result, there are 2 parameters w1,w2.
// - What does the function return?
//      It returns the two words from parameters joined.
// - How can this function be improved?
//      It could be improved by defining a better name like joinWords and more clear parameters 
//      for example word 1 and word 2. Then when calling it, put a space by the end of each word.
