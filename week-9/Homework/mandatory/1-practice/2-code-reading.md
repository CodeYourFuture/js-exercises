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

Line 4 - console log inside function, where x has also been defined, so scope of the console.log is for the x that has been defined locally within the function, so the output of line 4 would be 2. Similarly, because the x that has been defined inside the function is local, it is out of scope for the console.log called on line 6. Therefore, the output of line 6 would be 1, ina ccordance to the var x that has been defined on line 1. 

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

Console log f1 - output 10, as x is defined outside a function, therefore is global and can be accessed even within a function. 
Console log y - will return undefined, as y cannot be accessed from within a function. 

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); - 10
console.log(x); -9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1; 
  return val;
}

f2(y); - 10 
console.log(y); 
```

What will be the output of this code. Explain your answer in 50 words or less.
Line 54 - output 10, as global var x is used as parameter for function
Line 55- because x is defined outside function, console.log of x will show 9, as const x is defined as 9.
Line 64- use of global var y, using value x defined within it, results in 10. 
Line 65- unsure, but I think it may return Object, and then x:9