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
//because x in line 4 is a block variable so it is 2 ,whereas x in line 6 is a global variable so it is 1.

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
// the output will as following:
10
undefined
and it will return Refrence error because y is block variable and we tried to use it out of the block so it will be undefined,whereas x is a global variable and it is seen either inside or outside the block

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
//the output will as following:
9
{ x: 10 }
x did not change because it is varibale of primary type, and if we want to change it we need to reassign it ,for example the previous code would change the value of x if we have put x =f1(x);.However for the variable which is not primary type ,we can change it without reassign it as the code above did.
