## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers
- You must have at least two different digits represented (all of the digits cannot be the same)
- The final digit must be even
- The sum of all the digits must be greater than 16
- The following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

The following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents
- Create a function with a descriptive name, for example: `doSomething` or `calcAnotherThing`
- Write at least 2 comments that explain to others what a line of code is meant to do
- Make the return value of the function a template string, so you can insert variables!
- Use `node` from the command line to test if your code works as expected

Good luck!
