//I couldnt write this code alone. we did together with Ferhat, Serkan and Tayfun

// and return the answer.
//I am defining all possible answers into ane answers array
const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];
//Then create different arrays according to their levels
const veryPositive = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it"
];
const positive = [
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes"
];
const negative = [
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];
const veryNegative = [
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];
function shakeBall() {
  console.log("The ball has shaken!");
  let i = Math.floor(Math.random() * answers.length);
  return answers[i];
}
// The answer should come from shaking the ball
const result = shakeBall();
// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {
  if (veryPositive.includes(result)) {
    return "very positive";
  } else if (positive.includes(result)) {
    return "positive";
  } else if (negative.includes(result)) {
    return "negative";
  } else {
    return "very negative";
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
