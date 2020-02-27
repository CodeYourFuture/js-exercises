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
let producedAnswer ;
function shakeBall() {
  let answerNumber  =  Math.floor(Math.random() * 20) + 1 ;
  switch(answerNumber){
    case 1:
      producedAnswer = "It is certain.";
      break;
    case 2:
      producedAnswer = "It is decidedly so.";
      break;
    case 3:
      producedAnswer = "Without a doubt.";
      break;
    case 4:
      producedAnswer = "Yes - definitely.";
      break;
    case 5:
      producedAnswer = "You may rely on it.";
      break;
    case 6:
      producedAnswer = "As I see it, yes.";
      break;
    case 7:
      producedAnswer = "Most likely.";
      break;
    case 8:
      producedAnswer = "Outlook good.";
      break;
    case 9:
      producedAnswer = "Yes";
      break;
    case 10:
      producedAnswer = "Signs point to yes.";
      break;
    case 11:
      producedAnswer = "Reply hazy, try again.";
      break;
    case 12:
      producedAnswer = "Ask again later.";
      break;
    case 13:
      producedAnswer = "Better not tell you now.";
      break;
    case 14:
      producedAnswer = "Cannot predict now.";
      break;
    case 15:
      producedAnswer = "Concentrate and ask again.";
      break;
    case 16:
      producedAnswer = "Don't count on it.";
      break;
    case 17:
      producedAnswer = "My reply is no.";
      break;
    case 18:
      producedAnswer = "My sources say no.";
      break;
    case 19:
      producedAnswer = "Outlook not so good.";
      break;
    case 20:
      producedAnswer = "Very doubtful.";
      break;
  }
  return answerNumber;
}

// The answer should come from shaking the ball
let answer = producedAnswer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answerNumber) {
  let answerState;
  switch(answerNumber){
    case 1 - 5:
      answerState = "very positive";
      break;
    case 6 - 10:
      answerState = "positive";
      break;
    case 11 - 15:
      answerState = "negative";
      break;
    case 16 - 20:
      answerState = "very negative";
      break;
  }
  return answerState;
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
