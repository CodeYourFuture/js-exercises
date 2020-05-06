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
// in line 4 x is local variable variable and in line 6 x is global variable.
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
//The output should be 10 for line 31 and refrence erorre for line 32 . When we call f1() it'll use of global variable x and console it but in line 32 when we console the y variable it shoud return an refrence error because y is a local variable and it's not accesable outside of function f1().

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
//for the first function it's just get the x as an argument and then return a a value and when we console x it's do nothing with x.
in the second function we got object y as an argument and just modify the property x and wehe we console y we didnt reasign it and we have an object with property x:10;
