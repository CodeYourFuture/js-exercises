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
Because we have different scopes for our variables. The first one on line 1 is stored in global scope and the other one is stored in the block scope

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
The first output will be 10, because in the console.log on line 32 we call the function witch will execute a console.log.
The second output will be undefined, because the variable y is "living" in the block scope of the function and we don't have access to her from outside the function.

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

First output will be 9 because we only console.log the variable x witch is equal with 9
Second output will an object with a key x witch has a value of 9
