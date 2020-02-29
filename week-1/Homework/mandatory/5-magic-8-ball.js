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
function getNumber() {
  let pick_random = Math.floor(Math.random() * 4) + 1;
  return pick_random;
}
console.log(getNumber());

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  
  switch (randomNumber) {
    case 1:
      answer = "It is certain.";
      break;
    case 2:
      answer = "As I see it, yes.";
      break;
    case 3:
      answer = "Don't count on it.";
      break;
    case 4:
      answer = "Reply hazy, try again.";
      break;
  }
  console.log("The ball has shaken!");

  return answer;
}

// The answer should come from shaking the ball
let randomNumber = getNumber();
let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  switch (answer) {
    case "It is certain.":
    case "It is decidedly so.":
    case "Without a doubt.":
    case "Yes - definitely.":
    case "You may rely on it.":
      return "very positive";

    case "As I see it, yes.":
      return "positive";

    case "Reply hazy,try again.":
    case "Ask again later.":
    case "Better not tell you now.":
    case "Cannot predict now.":
    case "Concentrate and ask again.":
      return "negative";

    case "Don't count on it.":
    case "My reply is no.":
    case "My sources say no.":
    case "Outlook not so good.":
    case "Very doubtful.":
      return "very negative";
  }
}

shakeBall();
let passed = checkAnswer(answer);
console.log(passed);

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
