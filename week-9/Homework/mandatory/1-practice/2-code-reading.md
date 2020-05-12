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

<!-- in Line 4 when we console.log(x) x value is 2 because it is local and inside block scope between {} but outside of block x value is 1 because
x has a global value outside of scope  -->

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

<!-- Line 34 returns output of f1 function which is 10. "x" is declared globally and exist even inside the function scope.
Line 35: when we console.log(y) throws referenceError: y is not defined. Because "y" is declared inside the function scope, it does not exist outside the function. -->

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

<!-- 
f1 function takes x as an argument and returing val, console.log(x) throws x=9,
But f2 function takes y object as an argument and modifies and returns {x:10}. console.log(y) throws {x:10} because y has been modified. 

>
