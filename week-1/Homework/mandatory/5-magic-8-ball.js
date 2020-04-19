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

// This should log "The ball has shaken!"
// and return the answer.



// Declared a Global variable ( Array ) to hold all possible answers
var posAnswr = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.",
"My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]

function shakeBall() {
  console.log("The ball has shaken!") // whenever the function is called, this will be printed in cosole
  const result = posAnswr[Math.floor(Math.random() * posAnswr.length)]; // selecting an answer from the global array by passing a random index
  return result // returning the selected answer value
}

// The answer should come from shaking the ball
let answer = shakeBall(); // asigning a random answer returned by shaekBall function call to the variable answer

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) { // declaring the function checkAnswer
  if (posAnswr.indexOf(answer) <= 4) { // checking the index of the passed value in the global array if it's less than or equals 4 it will returen very positive 
    return "very positive"
  }
  else if (posAnswr.indexOf(answer) >= 5 && posAnswr.indexOf(answer) <= 9) { // same here if the index of the value is in the range of 5 to 9 (included) will retuen positive
    return "positive"
  }
  else if (posAnswr.indexOf(answer) >=10 && posAnswr.indexOf(answer) <= 14) { // again here if the index of the value is in the range of 10 to 14 (included) will retuen negative
    return "negative"
  }
  else { // if non of the above is true then return very negative
    return "very negative"
  }
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
