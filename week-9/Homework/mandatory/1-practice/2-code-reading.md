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

<!-- Because line 4 is between a block so the value of x is reassigned only between the curly braces by 2 while in line 6 the value of x remains 1 for the global variable -->

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

<!-- the consol log displays values within its area and the values of global variable which are not re-assigned within the block of the console; here, the first output is the log x which is assigned as a global variable 10, the second console is undefined whereas the function f1 has no return value, and the last log y is not defined, it is only assigned within a block-->


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
<!-- The first output  x is logged with its assigned value 9, the second output is the object y => { x: 10} where the key x is accessed and re-assigned in function f2, so as f2 is called the value of x become 10. if y is consoled befor f2 call it will be { x: 9 } -->
