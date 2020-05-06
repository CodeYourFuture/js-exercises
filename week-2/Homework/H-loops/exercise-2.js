/*
For-Loops
---------------------------------
Exercise 2-a:
---------------------------------


  I have a for loop, that counts from 1 to 10. 
  Can you change so that it counts down from 10 to 1?
  */

for (let number = 10; number >= 1; number--) {
  console.log(number);
}

/* 
    EXPECTED RESULT
    ---------------
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
    */

/*
Exercise 2-b:
---------------------------------

   Great work! :) Now create a for loop that prints "drinking a glass of water" 4 times to the console.

   Use the glass variable inside the for loop. 
   If the value of glass is smaller than 4, then print "drinking a glass of water"

    - HINT: check the for loop cake example in the week-2 presentation 

  */

let glass = 0;
for (let glass = 0; glass < 4; glass++) {
  console.log("drinking a glass of water");
}

// add your code here, starting with: for(...) {...}

/* 
    EXPECTED RESULT
    ---------------
    drinking a glass of water
    drinking a glass of water
    drinking a glass of water
    drinking a glass of water
    */
