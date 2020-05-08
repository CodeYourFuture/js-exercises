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
Because of differentscopes. line 4 is local scope to the block and line 1 is more global.

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

y is unreachable for the console from line 29. It is outside of line 32 scope; And x is reachable and ptinted from outside of the function from glkobal scope

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

x is declared as a constant which is supposed not to change in global scope and passed to thefunction which can acces x from outside but anything we do inside of the functionis not changing x becaus we change whateverwe change infunction scope and x is constant and expected not to change =9.
In last piece ofcode wechange the value of a property called x not x so its 10;
