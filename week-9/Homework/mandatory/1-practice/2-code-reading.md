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
Because second console.log is out of the curly bracket block which means different scope.

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

console.log(f1()) gives 10 as the value of x because it is global variable and function f1 can reach it. However, console.log(y) gives reference error as it is out of function block.

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
x is argument of f1 function
f1(x) is 10 as x = x+1, console.log(x) is 9 as x is defined as the value 9. f2(y) gives { x: 9 }
f2(y) returns as {x: 10} and console.log(y) throws { x: 9 }
