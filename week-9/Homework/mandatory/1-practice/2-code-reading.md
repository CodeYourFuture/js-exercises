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

Explanation 1: Line 4 has logged a local variable. But line 6 does not see the local, it execute the global one. So they both work with different vairables.

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

Explanation 2 : the result of line 33 is 10. It takes global variable x and log it in the function, then call the function. But line 34 will be undefined, despite it seems defined in the function, it is not accessible outside of the function.

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

Explanation 3 :
Basically, We are doing the same thing. But the result was not affected by function at the first one in contrast to second one. Because we assign a number at the first, an object at the second. line 64 is 10: line 54 is 9.
