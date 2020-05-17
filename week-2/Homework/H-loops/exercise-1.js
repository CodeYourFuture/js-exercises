/*
  While Loops
  ---------------------------------

  Using while loops complete the exercises to output the 
  correct results.
*/

//The while loop outputs "Hello" 10 times. Change the code so it only outputs "Hello" 5 times

let i = 0;
while (i < 5) {
  console.log("Hello");
  i++;
}

//This while loop doesn't do anything! Change the code so it outputs the sentence "Coding is easy" 3 times

let j = 0;
while (j < 3) {
  console.log("Coding is easy");
  j++;
}

// This while loop uses the variable loopLimit in its condition.
// Change the code below so it outputs "Goodbye" 5 times

let loopLimit = 5;
k = 0;
while (k < loopLimit) {
  //don't change this line
  console.log("Goodbye");
  k++;
}

/*
  Write a while loop that prints "eating 1 slice of pizza" 6 times to the console.

  Use the variables slices and hungry to create a condition.
  If hungry is greater than slices, then we will eat a slice of pizza. 
  If hungry is the same as slices then the loop terminates.

  Don't forget to increase (slices ++) inside the while loop.

  - HINT: check the cake example in the week-2 presentation 

  */

let slices = 0;
const hungry = 6;
while (slices < hungry) {
  console.log("eating 1 slice of pizza");
  slices++;
}

// add your code here, start with: while(...) {...}

/* 
    EXPECTED RESULT
    ---------------
    eating 1 slice of pizza
    eating 1 slice of pizza
    eating 1 slice of pizza
    eating 1 slice of pizza
    eating 1 slice of pizza
    eating 1 slice of pizza
    */
