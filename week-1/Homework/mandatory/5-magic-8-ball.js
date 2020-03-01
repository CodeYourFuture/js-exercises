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
let answer = "Positive";
function shakeBall(answer) {
  switch (answer) {
    case "It is certain":
      alert("Very Positive");
      break;

    case "It is decidedly so.":
      alert("Very Positive");
      break;

    case "Without a doubt.":
      alert("Very Positive");
      break;

    case "Yes - definitely.":
      alert("Very Positive");
      break;

    case "You may rely on it.":
      alert("Very Positive");
      break;

    case "As I see it, yes.":
      alert("Positive");
      break;

    case "You may rely on it.":
      alert("Positive");
      break;

    case "Most likely.":
      alert("Positive");
      break;

    case "Outlook good.":
      alert("Positive");
      break;

    case "Yes.":
      alert("Positive");
      break;

    case "Signs point to yes.":
      alert("Positive");
      break;

    case "Reply hazy, try again.":
      alert("Negative");
      break;

    case "Ask again later.":
      alert("Negative");
      break;

    case "Better not tell you now.":
      alert("Negative");
      break;

    case "Cannot predict now.":
      alert("Negative");
      break;

    case "Concentrate and ask again.":
      alert("Negative");
      break;

    case "Don't count on it.":
      alert("Very Negative");
      break;

    case "My reply is no.":
      alert("Very Negative");
      break;

    case "My sources say no.":
      alert("Very Negative");
      break;

    case "Outlook not so good.":
      alert("Very Negative");
      break;

    case "Very doubtful.":
      alert("Very Negative");
      break;

    default:
      alert("Try again");
  }
}

// The answer should come from shaking the ball
let answer = positive;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {}

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
