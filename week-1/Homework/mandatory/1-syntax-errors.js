// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a b c) {
    return a + b + c;
}

function introduceMe(name, age)
return "Hello, my name is " + name "and I am " age + "years old";

function getRemainder(a, b) {
    remainder = a %% b;

    // Use string interpolation here
    return "The remainder is %{remainder}"
}

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test("fixed addNumbers function - case 1", addNumbers(3, 4, 6), 13);
test("fixed introduceMe function", introduceMe("Sonjide", 27), "Hello, my name is Sonjide and I am 27 years old");
test("fixed getRemainder function", getRemainder(23, 5), "The remainder is 3");
