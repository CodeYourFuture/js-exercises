# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    {
3        let x = 2;
4        console.log(x);
5    }
6    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
// In line 1 a global variable is declared and assigned the value of 1, it will be available everywhere in the application.
// In line 3 a new local variable is declared and assigned the value of 2. This a new variable which happens to have the same name, x. It will be available only inside this function. They are different variables with different values.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code.// Explain your answer in 50 words or less.
Line 30 will print 10 to the console because x is a global variable.
Line 34 will print y is not defined, this is because y is a local variable only accessible inside the functiion. So this x it is out of scope for the console.log called on line 6. The function itself should return undefined.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); (I am not sure why it outputs 9)

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);// Returns 10. y is a parameter of function f2, it was declared and initialised with the value of 9 (line 56). Function f2 added 1 to x property and this updated y to 10 because why is equal to the value of the x property.
```

What will be the output of this code. Explain your answer in 50 words or less.
