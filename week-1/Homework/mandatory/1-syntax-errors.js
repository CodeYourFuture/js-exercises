// There are syntax errors in this code - can you fix it to pass the tests?

function addNumbers(a, b, c) {
    return a + b + c;
}

function introduceMe(name, age) {
return "Hello, my name is " + name + " and I am " + age + " years old ";
}

function getRemainder(a, b) {
    remainder = a%b;

    // Use string interpolation here
    return "The remainder is" +  remainder
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

test("fixed addNumbers function - case 1", addNumbers(7,4,6) === 17)
test("fixed introduceMe function", introduceMe("Erol",36) === "Hello, my name is Erol and I am 36 years old")
test("fixed getRemainder function", getRemainder(23,5) === "The remainder is 3")
