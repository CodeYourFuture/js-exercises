# Fizz buzz Kata
The following is a TDD Kata, an exercise in coding, refactoring and test-first, that you should apply daily for at least 15-30 minutes.

## Before you start
* Try not to read ahead.
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. There is no need to test for invalid inputs for this kata.

## The kata

### Step 1
Write a program that prints the numbers from 1 to n (where n is the number to stop counting). But for multiples of three print "Fizz" instead of the
number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five
print "FizzBuzz?".

Sample output:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc up to n
```

## Step 2 - new requirements
* A number is fizz if it is divisible by 3 or if it has a 3 in it
* A number is buzz if it is divisible by 5 or if it has a 5 in it