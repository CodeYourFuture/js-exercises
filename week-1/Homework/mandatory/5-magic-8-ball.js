/**

Let's peer into the future using a Magic 8 Ball!
https://en.wikipedia.org/wiki/Magic_8-Ball 

There are a few steps to being able view the future though:
* Ask a question
* Shake the ball
* Get an answer
* Decide if it's positive or negative

The question can be anything, but the answers are fixed,
and have different levels of positivity or negativity.

Below are the possible answers:

## Very positive
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.

## Positive
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

## Negative
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

## Very negative
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.
*/

/*
sonjide's notes - pre-planning idea - abstract - 
Create arrays which includes all the values. 
Create 2 functions - 
Function 1 - this will call 4 variables and include the values randomly - note use - Math.round+Math.random() function.  
Function 2 - this is my if ..else if statement that gets the answers (values inside the arrays)
*/


//Created an ARRAY - used const instead of let as none of my variables will change or reassigned 

const veryPositive = [
  "It is certain", 
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it"
]

const positive = [
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"
]

const negative = [
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
]

const veryNegative = [
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

//created a new string using the concat() method concatenates the string arguments to the calling string and returns a new string.
//concat is used as a string combines all arrays thus making it all into a new variable array
const allAnswers = veryPositive.concat(positive, negative, veryNegative)
//const new_array = old_array.concat([value0[, value1[, ...[, value19]]]])

// This should log "The ball has shaken!" - the console.log but must before returning an answer
// and return the answer.

//second function which will call all the values inside the arrays
function shakeBall() {
  const maxAnswerIndex = allAnswers.length;
  const randomAnswerIndex = Math.round(Math.random() * maxAnswerIndex);
  console.log("The ball has shaken!");
  return allAnswers[randomAnswerIndex];
}
// https://www.w3schools.com/jsref/jsref_length_array.asp - The length property sets or returns the number of elements in an array.

// The answer should come from shaking the ball
let answer = shakeBall();

//const means that cant reassigned

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
//this function checks all the options using an if else if statement, by checking the parameters

//https://www.w3schools.com/jsref/jsref_includes.asp The includes() method determines whether a string contains the characters of a specified string.
//This method returns true if the string contains the characters, and false if not.

function checkAnswer() {
  if(veryPositive.includes(answer)) {
    return "very positive"
  } 
  else if (positive.includes(answer)){ 
    return "positive"
  }
  else if (negative.includes(answer)){ 
    return "negative"
  }
  else if (veryNegative.includes(answer)){ 
    return "very negative"
  }
}
  /* parameters are checking answers against the array*/ 

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();

/*https://developers.google.com/web/tools/chrome-devtools/console/*/




/* the switch statement explained  - https://www.w3schools.com/js/js_switch.asp   The switch expression is evaluated once, then the value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution of inside the block. It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
Switch cases use strict comparison (===). The values must be of the same type to match. A strict comparison can only be true if the operands are of the same type.*/

// magicBall version 2 - used a switch statement and an if else if statement for the magicBall excerzise to understand switch more - two parts to a switch statement -
//part one - function one - indexes all the possibly answers randomly
//source - https://discuss.codecademy.com/t/help-with-javascript-8-ball-project/68618/7

function shakeBall() {
  console.log("The ball has shaken!");
let randomNumberIndex = Math.floor(Math.random() * 20);
console.log("The ball has shaken!");
let eightBall = '';
switch (randomNumberIndex) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Without a doubt';
    break;
  case 3:
    eightBall = 'You may rely on it';
    break;
  case 4:
    eightBall = 'Yes - definitely';   //veryPositive 
    break;
  case 5:
    eightBall = 'As I see it, yes';
    break;
  case 6:
    eightBall = 'Most likely';
    break;
  case 7:
    eightBall = 'Outlook good';
    break;
  case 8:
    eightBall = 'Yes';
    break;
  case 9:
    eightBall = 'Signs point to yes';  //positive
    break;
  case 10:
    eightBall = 'Reply hazy, try again';
    break;
  case 11:
    eightBall = 'Ask again later';
    break;
  case 12:
    eightBall = 'Better not tell you now';
    break;
  case 13:
    eightBall = 'Cannot predict now';
    break;
  case 14:
    eightBall = 'Concentrate and ask again';  // negative
    break;
  case 15:
    eightBall = 'Don\'t count on it';
    break;
  case 16:
    eightBall = 'My reply is no';
    break;
  case 17:
    eightBall = 'My sources say no';
    break;
  case 18:
    eightBall = 'Outlook not so good';
    break;
  case 19:
      eightBall = 'Very doubtful';  //veryNegative
    break;
}
return eightBall;
}

//part two of the switch - calls and checks the answer when the ball is shakes with either a veryPositive, positive, veryNegative, negative statement
let answer;
function checkAnswer(message) {
if (message === 'It is decidedly so') {
  answer = 'very positive'
} 
else if (message === 'Without a doubt') {
  answer = 'very positive'
}
else if (message === 'You may rely on it') {
    answer = 'very positive'
}
else if (message === 'You may rely on it') {
  answer = 'very positive'  
}
else if (message === 'Yes - definitely') {
  answer = 'very positive'
}
else if (message === 'Yes - definitely') {
    answer = 'very positive'
} 
else if (message === 'As I see it, yes') {
  answer = 'positive'
  }
  else if (message === 'Most likely') {
  answer = 'positive'
  }
    else if (message === 'Outlook good') {
  answer = 'positive'
  }
    else if (message === 'Yes') {
  answer = 'positive'
  }    
  else if (message === 'Signs point to yes') {
  answer = 'positive'
  }
  else if  (message === 'Reply hazy, try again') {
    answer = 'negative'
    }
   else if (message === 'Ask again later') {
    answer = 'negative'
    }
   else if (message === 'Better not tell you now') {
    answer = 'negative'
    }
   else if (message === 'Cannot predict now') {
    answer = 'negative'
    }
  else if (message === 'Concentrate and ask again') {
    answer = 'negative'
    }
  else if (message === 'Don\'t count on it') {
    answer = 'very negative'
    }
  else if (message === 'My reply is no') {
    answer = 'very negative'
    }
  else if (message === 'My sources say no') {
    answer = 'very negative'
    }
  else if (message === 'Outlook not so good') {
    answer = 'very negative'
    }
  else if  (message === 'Very doubtful') {
    answer = 'very negative'
    }
 return answer;
  }


/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function() {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}
const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === "The ball has shaken!"
  );
  test(`shakeBall returns an string answer"`, typeof answer === "string");
  test(
    `checkAnswer returns the level of positivity"`,
    ["very positive", "positive", "negative", "very negative"].includes(
      checkAnswer(answer)
    )
  );
}

testAll();

/*https://developers.google.com/web/tools/chrome-devtools/console/*/

//https://discuss.codecademy.com/t/help-with-javascript-8-ball-project/68618/7
