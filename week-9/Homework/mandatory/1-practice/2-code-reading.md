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

  lines 3 and 4 are different scope and have access to parent's variables. So in the scope (lines 2-5) you can change the parent variable (1 ==> 2). However, this change is only accessible inside the scope (or by a child which doesn't exist in this example).

  Line 6 has no access to the scope above (2-5) but it can access only to line 1 which is in the same scope.

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
f1() function has access to variable above (let x = 10). When it is called it can logs the value of x (10). As let y = 20 is a local to the scope and not accessible by parents, console.log(y) can not read its value.

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

f1(x) returns a value but doesn't change the value of x so console.log(x) outputs 9 of const x.

f2(y) changes the value of object y from 9 to 10 by adding 1 to it thus console.log(y) outputs {x:10}