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
console.clear();
let shakingBallAnswer;

function shakeBall() {
  let shakingBall = Math.round(Math.random() * 20);
  switch (shakingBall) {
    case 1:
      shakingBallAnswer = "It is certain.";
      break;
    case 2:
      shakingBallAnswer = "It is decidedly so.";
      break;
    case 3:
      shakingBallAnswer = "Without a doubt.";
      break;
    case 4:
      shakingBallAnswer = "Yes - definitely.";
      break;
    case 5:
      shakingBallAnswer = "You may rely on it.";
      break;
    case 6:
      shakingBallAnswer = "As I see it, yes.";
      break;
    case 7:
      shakingBallAnswer = "Most likely.";
      break;
    case 8:
      shakingBallAnswer = "Outlook good.";
      break;
    case 9:
      shakingBallAnswer = "Yes.";
      break;
    case 10:
      shakingBallAnswer = "Signs point to yes.";
      break;
    case 11:
      shakingBallAnswer = "Reply hazy, try again.";
      break;
    case 12:
      shakingBallAnswer = "Ask again later.";
      break;
    case 13:
      shakingBallAnswer = "Better not tell you now.";
      break;
    case 14:
      shakingBallAnswer = "Cannot predict now.";
      break;
    case 15:
      shakingBallAnswer = "Concentrate and ask again.";
      break;
    case 16:
      shakingBallAnswer = "Don't count on it.";
      break;
    case 17:
      shakingBallAnswer = "My reply is no.";
      break;
    case 18:
      shakingBallAnswer = "My sources say no.";
      break;
    case 19:
      shakingBallAnswer = "Outlook not so good.";
      break;
    case 20:
      shakingBallAnswer = "Very doubtful.";
      break;
  }
  console.log("The ball has shaken!");
  return `${shakingBall}`;  
}

// The answer should come from shaking the ball
let answer = shakingBallAnswer;
// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  let levelOfPositivity;
  switch (true) {
    case answer <= 5:
      levelOfPositivity = "very positive";
      break;
    case answer <= 10:
      levelOfPositivity = "positive";
      break;
    case answer <= 15:
      levelOfPositivity = "negative";
      break;
    case answer <= 20:
      levelOfPositivity = "very negative";
      break;
  } 
  return `${levelOfPositivity}`;
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
