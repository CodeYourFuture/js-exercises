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
beacuse line number 6 excuting line number 1 as they both out of the block{}
meanwhile line number 4 excuting line number 3 as they both in the same block

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
10 
then the output is not definde 

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
fi(x) will output 9 
its a primitive value. In JS when you provide primitives to a function they are copied in the memory. Meaning that the val inside of the second function have nothing with the val in the scope above

second example 
f2(y) will output 10
y is a parameter to a function called f2, y been declared and initialised in line one is an object with one prooerty equle to 9
the function added 1 to x property, updating the object called by y so console.log(y) is 10
