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
const number8 = Math.ceil(Math.random() * 20);
function shakeBall() {
  console.log(`The ball has shaken!`);
  if (number8 === 1) {
    answer = "It is certain.";
  } else if (number8 === 2) {
    answer = "It is decidedly so.";
  } else if (number8 === 3) {
    answer = "Without a doubt.";
  } else if (number8 === 4) {
    answer = "Yes - definitely.";
  } else if (number8 === 5) {
    answer = "You may rely on it.";
  } else if (number8 === 6) {
    answer = "As I see it, yes.";
  } else if (number8 === 7) {
    answer = "Most likely.";
  } else if (number8 === 8) {
    answer = "Outlook good.";
  } else if (number8 === 9) {
    answer = "Yes.";
  } else if (number8 === 10) {
    answer = "Signs point to yes.";
  } else if (number8 === 11) {
    answer = "Reply hazy, try again.";
  } else if (number8 === 12) {
    answer = "Ask again later.";
  } else if (number8 === 13) {
    answer = "Better not tell you now.";
  } else if (number8 === 14) {
    answer = "Cannot predict now.";
  } else if (number8 === 15) {
    answer = "Concentrate and ask again.";
  } else if (number8 === 16) {
    answer = "Don't count on it.";
  } else if (number8 === 17) {
    answer = "My reply is no.";
  } else if (number8 === 18) {
    answer = "My sources say no.";
  } else if (number8 === 19) {
    answer = "Outlook not so good";
  } else if (number8 === 20) {
    answer = "Very doubtful";
  }
  return answer;
}
let answer;

function checkAnswer() {
  if (
    number8 === 1 ||
    number8 === 2 ||
    number8 === 3 ||
    number8 === 4 ||
    number8 === 5
  ) {
    return "very positive";
  } else if (
    number8 === 6 ||
    number8 === 7 ||
    number8 === 8 ||
    number8 === 9 ||
    number8 === 10
  ) {
    return "positive";
  } else if (
    number8 === 11 ||
    number8 === 12 ||
    number8 === 13 ||
    number8 === 14 ||
    number8 === 15
  ) {
    return "negative";
  } else if(
    number8 === 16 ||
    number8 === 17 ||
    number8 === 18 ||
    number8 === 19 ||
    number8 === 20
  ) {
    return "very negative";
  }
}
console.log(shakeBall());
console.log(checkAnswer());

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
