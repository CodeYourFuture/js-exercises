//using some of the language we learned today - can you explain why the following code is throwing an error?

let x = 10;

function f1() {
  console.log(x);
  let y = 20;
}

console.log(f1());
console.log(y);

//the variable y was declared into the function so it is not accessible outside the scope
