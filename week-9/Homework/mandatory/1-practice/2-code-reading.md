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

It is because of the scope. The first console.log will print the value of x that is defined locally, while the second console.log will only have access for the global one.


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

The code outputs a refference error, due to console.log(y) being outside the function. The value of y can only be accessed inside the function. Console.log(f1()) will output 10, as this is the value of line 29.

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

For f1(x), the output is 10 because x is passed as an argument and the function returns the parameter +1

For console.log(x) it will be 9 as this is the global value of X

The output of f2(y) is { x: 10 } as the function adds on the key value of y

console.log(y) will print { x: 10 } as a result of the function above 
