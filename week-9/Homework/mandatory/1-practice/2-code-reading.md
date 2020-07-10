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
line 4 log x=2  as it's been defined as a local variable inside the curly brakets, line 6 log x=1 for the global variable that has been defiend in line 1
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
for the first log in line 27 the output should be 10 for the global variable x, line 31 output will be undefiend the function call is empty no thing has been passed to the function to process, line 32 log undefined since y has been defiend locally inside f1

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x); this line will pass x value(10) to the function the out put for it will be 10 and it's going to be returned and not logged to the console.
console.log(x); this line will log 9 the value of the global variable x;

const y = { x: 9 }; we have the object y

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y); the output for this line should be 10 and the value is returned and not logged to the console;
console.log(y); it will log the object y ===> {x:9}
```

What will be the output of this code. Explain your answer in 50 words or less.
