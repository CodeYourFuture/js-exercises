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

Line 4 is console.logging a variable which is in block scope whilst line 4 can only access to line 1 as it is outside of block scope(global scope).

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

What will be the output of this code. Explain your answer in 50 words or less.

The first console.log will access variable y inside the function as it is calling the function and the variable is in function scope. 
The second console.log will produce a " y is not defined" error as it is calling y but y is in function scope. Not reachable outside unless the function is called.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

CAlling functions on line 54 and 64 will return the val but won't print/console.log anything. line 55 will return the value of X as it is global. f2 increments the passed objects x property value by 1. Once f2 is called x's 9 value increments by 1. Console.log returns the object y with its x property is 10.
