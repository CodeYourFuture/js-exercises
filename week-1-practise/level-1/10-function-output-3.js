function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    let firstConcat = firstWord.concat(secondWord);
    let finalConcat = firstConcat.concat(thirdWord);
    return finalConcat;
}

var result = concatenate('code', 'your', 'future');
console.log(result); // expected result = "codeyourfuture"