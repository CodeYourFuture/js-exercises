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

  const maxAnswerIndex = allAnswers.length -1;

  const randomAnswerIndex = Math.round(Math.random() * maxAnswerIndex);

  console.log("The ball has shaken!");

  return allAnswers[randomAnswerIndex];
}

// The answer should come from shaking the ball
let answer = shakeBall();

//const means that cant reassigned

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
//this function checks all the options using an if else if statement, by checking the parameters
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