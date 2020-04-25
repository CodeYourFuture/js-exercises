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
let Randomnumber = Math.floor(Math.random() * 17);
function shakeBall() {
  console.log("The ball has shaken!");

  if (Randomnumber === 0) {
    return (answer = " It is certain");
  }
  if (Randomnumber === 1) {
    return (answer = "Without a doubt");
  }
  if (Randomnumber === 2) {
    return (answer = "Yes - definitely");
  }
  if (Randomnumber === 3) {
    return (answer = "You may rely on it");
  }
  //very positive
  if (Randomnumber === 4) {
    return (answer = " As I see it, yes");
  }
  if (Randomnumber === 5) {
    return (answer = "Most likely");
  }
  if (Randomnumber === 6) {
    return (answer = "Yes");
  }
  if (Randomnumber === 7) {
    return (answer = "Signs point to yes");
  }

  if (Randomnumber === 8) {
    return (answer = "Outlook good");
  }

  //Negative
  if (Randomnumber === 9) {
    return (answer = " Reply hazy, try again");
  }
  if (Randomnumber === 10) {
    return (answer = "Ask again later");
  }
  if (Randomnumber === 11) {
    return (answer = "Better not tell you nows");
  }
  if (Randomnumber === 12) {
    return (answer = "Cannot predict now");
  }

  if (Randomnumber === 13) {
    return (answer = "Concentrate and ask again");
  }

  //Very negative
  if (Randomnumber === 14) {
    return (answer = "Don't count on it");
  }
  if (Randomnumber === 15) {
    return (answer = "My reply is no");
  }
  if (Randomnumber === 16) {
    return (answer = "My sources say no");
  }
  if (Randomnumber === 17) {
    return (answer = "Outlook not so good");
  }

  if (Randomnumber === 18) {
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
  if (
    Randomnumber === 0 ||
    Randomnumber === 1 ||
    Randomnumber === 2 ||
    Randomnumber === 3
  ) {
    return (answer = "very positive");
  }

  //Positive
  if (
    Randomnumber === 4 ||
    Randomnumber === 5 ||
    Randomnumber === 6 ||
    Randomnumber === 7 ||
    Randomnumber === 8
  ) {
    return (answer = "positive");
  }

  //Negative
  if (
    Randomnumber === 9 ||
    Randomnumber === 10 ||
    Randomnumber === 11 ||
    Randomnumber === 12 ||
    Randomnumber === 13
  ) {
    return (answer = "negative");
  }
  // very Negative
  if (
    Randomnumber === 14 ||
    Randomnumber === 15 ||
    Randomnumber === 16 ||
    Randomnumber === 17 ||
    Randomnumber === 18
  ) {
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
