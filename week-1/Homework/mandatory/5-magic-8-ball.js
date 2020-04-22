/**

Let's peer into the future using a Magic 8 Ball!
..https://en.wikipedia.org/wiki/Magic_8-Ball 

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
let answer;
let ans = Math.floor(Math.random() * 17);
function shakeBall() {
  console.log("The ball has shaken!");

  if (ans === 0) {
    return (answer = " It is certain");
  }
  if (ans === 1) {
    return (answer = "Without a doubt");
  }
  if (ans === 2) {
    return (answer = "Yes - definitely");
  }
  if (ans === 3) {
    return (answer = "You may rely on it");
  }
  //very positive
  if (ans === 4) {
    return (answer = " As I see it, yes");
  }
  if (ans === 5) {
    return (answer = "Most likely");
  }
  if (ans === 6) {
    return (answer = "Yes");
  }
  if (ans === 7) {
    return (answer = "Signs point to yes");
  }

  if (ans === 8) {
    return (answer = "Outlook good");
  }

  //Negative
  if (ans === 9) {
    return (answer = " Reply hazy, try again");
  }
  if (ans === 10) {
    return (answer = "Ask again later");
  }
  if (ans === 11) {
    return (answer = "Better not tell you nows");
  }
  if (ans === 12) {
    return (answer = "Cannot predict now");
  }

  if (ans === 13) {
    return (answer = "Concentrate and ask again");
  }

  //Very negative
  if (ans === 14) {
    return (answer = "Don't count on it");
  }
  if (ans === 15) {
    return (answer = "My reply is no");
  }
  if (ans === 16) {
    return (answer = "My sources say no");
  }
  if (ans === 17) {
    return (answer = "Outlook not so good");
  }

  if (ans === 18) {
    return (answer = "Very doubtful");
  }
}

// The answer should come from shaking the ball..

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

function checkAnswer() {
  //Very positive
  if (ans === 0 || ans === 1 || ans === 2 || ans === 3) {
    return (answer = "very positive");
  }

  //Positive
  if (ans === 4 || ans === 5 || ans === 6 || ans === 7 || ans === 8) {
    return (answer = "positive");
  }

  //Negative
  if (ans === 9 || ans === 10 || ans === 11 || ans === 12 || ans === 13) {
    return (answer = "negative");
  }
  // very Negative
  if (ans === 14 || ans === 15 || ans === 16 || ans === 17 || ans === 18) {
    return (answer = "very negative");
  }
}

console.log("   ");
console.log(shakeBall());

console.log(checkAnswer());
console.log("   ");
console.log("   ");

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log;
let logged;
console.log = function () {
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
