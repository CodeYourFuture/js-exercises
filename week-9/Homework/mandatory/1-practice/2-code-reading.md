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

x on line 3 and on line 1 are in different scopes.
x on line 1 is in global scope and x on line 3 is in the local scope. 
The console log on line 4 refers to the variable x in the local scope which is equal to 2. The console log on line 6 referes to the variable x in the global scope which is equal to 1. 

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20 
}

console.log(f1()) // undefined because there is no parameter passed in the function. 
console.log(y)   //undefined. the console log is declard in the global scope while y is in the local scope. they can't see each other. 
```

What will be the output of this code. Explain your answer in 50 words or less.

console.log(f1()) // undefined because there is no parameter passed in the function. 
console.log(y)   //undefined. the console log is declared in the global scope while the variable y is in the local scope. They can't see each other. 

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
console.log(y);  {x:10}
```

What will be the output of this code. Explain your answer in 50 words or less.

The output will be 
9 
{x:10}

The first console log is logging the variable x which is equal to 9. 
Y is an object. It is passed through a function that incrementes it's value pair to 10. Actually I don't understand why in the first exemple the increment isn't logged and it is in the second one. 
