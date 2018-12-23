function getNumber() {
  return Math.random() * 10;
}

var result = getNumber();
console.log(result);
console.log(getNumber.name);

// Answer these questions:
// - What does this program do? first pick up a number between 0 and 1 randomly and after multiply it with 10.
// - How many parameters does the function take? this function doesn`t need any parameters.
// - What is the function name? function name is getNumber.
// - Where is the function called? with what parameters? in line 5, this function is called without any parameters.
