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
let outlook = [
  {
    category: "veryPositive",
    phrases: [
      "It is It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it."
    ]
  },
  {
    category: "Positive",
    phrases: [
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes."
    ]
  },
  {
    category: "negative",
    phrases: [
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again."
    ]
  },
  {
    category: "very negative",
    phrases: [
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ]
  }
];
function shakeBall() {
  let index = Math.floor(Math.random() * Math.floor(outlook.length));
  let category = outlook[index];
  let phrases = category.phrases;
  let phrasesIndex = Math.floor(Math.random() * Math.floor(phrases.length));
  let answer = phrases[phrasesIndex];
  // let checkAnswer = category.category;
  console.log("The ball has shaken!");
  return answer;
}

// The answer should come from shaking the ball
let answer = shakeBall();
// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(check) {
  let answerCheck = "";
  switch (check) {
    case "It is certain.":
    case "It is decidedly so.":
    case "Without a doubt.":
    case "Yes - definitely.":
    case "You may rely on it.":
      answerCheck = "very positive";
      break;
    case "As I see it, yes.":
    case "Most likely.":
    case "Outlook good.":
    case "Yes.":
    case "Signs point to yes.":
      answerCheck = "positive";
      break;
    case "Reply hazy, try again.":
    case "Ask again later.":
    case "Better not tell you now.":
    case "Cannot predict now.":
    case "Concentrate and ask again.":
      answerCheck = "negative";
      break;
    case "Don't count on it.":
    case "My reply is no.":
    case "My sources say no.":
    case "Outlook not so good.":
    case "Very doubtful.":
      answerCheck = "very negative";
      break;
  }
  console.log(answerCheck);
  console.log(answer);
  return answerCheck;
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
