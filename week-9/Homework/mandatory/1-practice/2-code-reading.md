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

line4 is in block scope and can access global and block scope. variable X value has been changed in the block scope so, line4 can acces new value but line6 cant acces changed value and it stil see x as 1. 

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

f1 function is called on line 32 and so it goes to inside this function and log x value as 10. but due to function doesnt return anything it gives undefined on line32. and y is not accessible outside function and so it gives y is not defined.


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
we called f1() function x parameter and it actually returns 10 but we didnt logged it. on line55, it logs 9 because x value is 9. f2 function is called with y object and x value inside the object ressigned as 10 and so it logs {x:10} on line 65  