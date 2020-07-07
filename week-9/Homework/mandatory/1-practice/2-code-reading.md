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
Answer:
In Line 4 we are logging to the console the value of the "local to the block" variable x from line 3.
In line 6 we are logging to the console the of the golbal variable x declared in line 1.

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
Answer:
We will see 10 and undefined in the console because variable (x) is in the global scope of the application.
We can't access variable (y) because it's local to the function (f1).
we get undefined because function f1 has no return statement.

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
Answer:
we will have 9 then { x : 10 }.
reason being in f1 function call we passed the argument by value we passed, while in the f2 function call we passed the argument by reference.
