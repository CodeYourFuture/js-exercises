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

// This should log  "The ball has shaken!"
// and return the answer.
function shakeBall() {
  //create an array to store all the possible answers.
  let answers= ['It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.',
  'Yes.', 'Signs point to yes.', 'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.', "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."];
  let randomPick=Math.floor(Math.random()*answers.length); 
   //when we shake the ball this step allow us to pick a random number from the array//
  console.log("The ball has shaken!");
  return answers[randomPick]; 
  //return a random question depending on the length of an array //
}

// The answer should come from shaking the ball
let answer = shakeBall();

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

//switch is a conditional statment that will evaluate an expression against multiple cases, and excute one or more blocks of code based on matching cases.//
//here i'm using it to check the answers cases based on the level of positivty//


function checkAnswer(answer) {
  let answerValues = "";
  //place holder/container to store the level of positivity//
  switch (answer) {
    case "It is certain.":
      answerValues = "very positive";
    break;
    case "It is decidedly so.":
      answerValues  ="very positive";
    break;
    case "Without a doubt.":
      answerValues = "very positiv";
    break;
    case "Yes - definitely.":
      answerValues ="very positive";
    break;
    case "You may rely on it.":
      answerValues ="very positive";
    break;
    case "As I see it, yes.":
      answerValues = "positive";
    break;
    case "Most likely.":
      answerValues = "positive";
    break;
    case "Outlook good.":
      answerValues ="positive";
    break;
    case "yes.":
      answerValues = "positive";
    break;
    case "Signs point to yes.":
      answerValues = "positive";
    break;
    case "Don't count on it.":
      answerValues = "Very negative";
    break;
    case "My reply is no.":
      answerValues = "very negative";
    break;
    case "My sources say no.":
      answerValues ="very negative";
    break;
    case "Outlook not so good.":
      answerValues ="very negative";
    break;
    case "Very doubtful.":
      answerValues = "very negative";
    break;
    case "Reply hazy, try again.":
      answerValues = "negative";
    break; 
    case "Ask again later.":
      answerValues = "negative";
    break; 
    case "Better not tell you now.":
      answerValues = "negative";
    break;
      case "Cannot predict now.":
        answerValues ="negative";
    break;
      case "Concentrate and ask again.":
        answerValues = "negative";
    break;

    default:
      answerValues = "try again";
  }
  console.log(answerValues);
      return answerValues; //returns the final answer.
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
