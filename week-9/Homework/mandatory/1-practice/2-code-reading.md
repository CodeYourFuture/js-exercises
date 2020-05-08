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

because of the scopes, line 4 is calling local variable from line 3 which is not available out of function
line 6 is calling global variable from line 1

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

if you run the f1() function it will log in console 10, but here it is undefined, because the function doesn't return anything.
y is local variable, Reference Error: undefined

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

f1(x) is 10 it will not be appear in console (didn't console.log it anywhere)
console.log(x) is 9 because it is global and changes in f1() will not change it
f2(y); will not appear any where but is {x : 10}
console.log(y) will be {x : 10} as well because of object the changes will be saved in it.

