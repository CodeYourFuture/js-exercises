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

ANSWER:
line 4 has it is own scope and in the scope x is 2 but line 6 is in the global scope and in global scope x is 1;




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

ANSWER:
it will show console.log(f1()) ==> x=10
console.log(y) ==> undefined

it is because inside of f1 function we have console.log(x) and the scope of f1() has access to global scope as well that is why it shows us x=10 
but consol.log(y), we have undefined because y  is declared inside of f1() function and y is not declared in global scope ,global scope doesnt have access to the scope of function but f1() has access to global scope


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

console.log(y);
f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

ANSWER:

f1(x) =>> 10
console.log(x) ==> 9
f1(val) is a function and changing the value of x inside of its scope
console.log(x) ==> it will show us the value of x in the global scope

f2(y) =>> {x:10}
console.log(y) ==> {x:10}

y is an object and f2() is changing the value of one of the key inside of the object
if we write down one more console.log before f2(y) we will see y is still what we had in global scope but when we execute the function and console.log(y) again,we will see y is changed because we called the function which changes the value of one key of our object and that is whu we have different y after executing the function. 