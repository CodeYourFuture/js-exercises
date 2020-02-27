// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
    return a + b + c;
}

function introduceMe(name, age) {
<<<<<<< Updated upstream
return "Hello, my name is " + name + " and I am " + age + " years old";
=======
return (`Hello, my name is ${name} and I am ${age} years old`);
>>>>>>> Stashed changes
}

function getRemainder(a, b) {
    remainder = a % b;

    // Use string interpolation here
<<<<<<< Updated upstream
    return `The remainder is ${remainder}`
=======
    return (`The remainder is ${remainder}`)
>>>>>>> Stashed changes
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
    let status;
    if (expr) {
        status = "PASSED"
    } else {
        status = "FAILED"
    }

    console.log(`${test_name}: ${status}`)
}

test("fixed addNumbers function - case 1", addNumbers(3,4,6) === 13)
test("fixed introduceMe function", introduceMe("Sonjide",27) === "Hello, my name is Sonjide and I am 27 years old")
test("fixed getRemainder function", getRemainder(23,5) === "The remainder is 3")
