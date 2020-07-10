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
//on line 4 x is scope variable with value of two .which scope finish on line 4.
//on line 6 x is a global variable  which scope doesnt finish untill line 6
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
// on when function f1 call x value will be 10 as it is global variable and f1 function can access it
//y will be undefined because console.log(y) have no acess to variable y without calling the function itself
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

function f2(val)---x:9 {
  val.x = val.x + 1;-
  return val;
}

f2(y);
console.log(y);

will be 10 because function  f2 passing object y as parameter  val.x=9+1 10 i think


 ```

What will be the output of this code. Explain your answer in 50 words or less.
