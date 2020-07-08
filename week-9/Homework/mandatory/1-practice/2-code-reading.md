// # Code reading

// ## Question 1

// Take a look at the following code:

// ```


1let x = 1;
2    {
3        let x = 2;
4        console.log(x);
5    }
6    console.log(x);

 Explain why line 4 and line 6 output different numbers.

line 4 has a local varible declared inside a local scope. Line 6 only has access only codeto the global scope.
## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x) // 10
    let y = 20
}

console.log(f1()) //undefined - no parameter inside.
console.log(y) // undefined- y is a local scope and not global so value found.
```

What will be the output of this code. Explain your answer in 50 words or less.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); // 9

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y); // x : 10 y is an object and returning its value pair
// ```

What will be the output of this code. Explain your answer in 50 words or less.
