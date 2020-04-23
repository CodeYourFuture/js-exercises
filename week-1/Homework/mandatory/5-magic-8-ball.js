// // Let's peer into the future using a Magic 8 Ball!
// // https://en.wikipedia.org/wiki/Magic_8-Ball

// There are a few steps to being able view the future though:
//  * Ask a question
//  * Shake the ball
//  * Get an answer
//  * Decide if it's positive or negative

// The question can be anything, but the answers are fixed,
// and have different levels of positivity or negativity.

// Below are the possible answers:

let possibleAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",

  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",

  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",

  "Dont count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

// This should log "The ball has shaken!"
// and return the answer.

function shakeBall() {
  console.log("The ball has shaken!");

  let randomNum = Math.floor(Math.random() * possibleAnswers.length);

  return possibleAnswers[randomNum];
}

// The answer should come from shaking the ball
let answer = shakeBall();

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

function checkAnswer() {
  if (possibleAnswers.indexOf(answer) >= 4) {
    return message[0];
  }
}

let message = ["very positive", "positive", "negative", "very negative"];

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
