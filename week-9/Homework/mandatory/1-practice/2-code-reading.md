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
This is because the first x (line 4) is a local variable and second one(line 6) is a global variable

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

The program will run the function f1 it will run 10 then y will be returned as: undefined.



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

const y = { x: 9 }; //object

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y); //object
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
program will first run 10 then 10 again
