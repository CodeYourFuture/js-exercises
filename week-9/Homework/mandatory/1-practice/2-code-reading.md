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

## Answer 1

First x declaration on line 1 is in global scope.
Console.log on line 6 will log this global value of x, which is 1.
Second variable x declarion is inside cury bracets which means it is in block scope.
Console.log on line 4 can log its value of 2 as those are in the same scope
but this is not accessible outside of block/function scope.

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

## Answer 2

First console.log will log the result of f1 function(10) as it can access global x variable.
Second log will throw error as y is declared inside function which is not accessible globally.

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

## Answer 3

9
{x:9}

When we call f1 function with the argument of x variable, it will return 10,
but this doesn't change global x and console on next line will log 9.
Objects are passed by reference but not value, so they are mutable
