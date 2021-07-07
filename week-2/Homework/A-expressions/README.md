In JavaScript there are **expressions** and **statements**. We will use these words frequently to describe code.

### Expression

An expression returns a value. Sometimes we will say that an expression _evaluates to_ a value.

The following are all examples of expressions:

```js
1 + 1; // returns 2
("hello"); // returns "hello"
2 * 4; // returns 8
"hello" + "world"; // returns "helloworld"
```

We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement.

### Statement

A statement is some code that performs an action. Here are some examples:

```js
var sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`
var greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`
console.log(2 * 4); // action: logs the result of `2 * 4` to the console
sayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`
```

There are some other different types of statements that we will learn in the coming weeks.

## Exercise

You quickly find out the result of an expression by running node in a terminal window.

* Open a terminal window
* Run the command `node`
* _You have now opened a node console (also called a REPL)_
* Type an expression and press enter
* To exit the console type Ctrl+C or type the command `.exit`

Example from inside a terminal window:

```bash
$ node
> 1 + 2
3
> "hello"
'hello'
> var greeting = "hello"
undefined
> greeting
'hello'
> console.log(greeting)
hello
undefined
> .exit
$
```

> Notice how when we execute an expression the value it produces is printed below it. When we execute a statement, we see `undefined` printed below. This is because statements don't produce values like expressions, they _do something_.

* Write some more expressions in the node console
* Assign some expressions to variables
* Check the value of the variables

Further reading on using the node console: https://hackernoon.com/know-node-repl-better-dbd15bca0af6
