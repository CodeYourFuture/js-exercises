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
//function shakeBall() {}

// The answer should come from shaking the ball
//let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

let checkAnswer = function (answer){
  if ( answer === "Yes."){
    return "positive"
  }if ( answer === "It is certain."){
    return "very positive"
  }
  if ( answer === "Ask again later."){
    return "negative"
  }
  if ( answer === "My reply is no."){
    return "very negative"
  }
}

function shakeBall() {
  
  let number = Math.floor(Math.random()*20);

  let answer;

  if (number === 0) {
    answer= 'It is certain.';

  }
  else if (number === 1) {
     answer='It is decidedly so.';
  }
  else if (number=== 2) {
     answer='Without a doubt.';
  }
  else if (number === 3) {
    answer= 'Yes - definitely.';
  }else if (number === 4) {
    answer= 'You may rely on it';
  }else if (number === 5) {
    answer= 'As I see it, yes.';
  }else if (number === 6) {
    answer= 'Most likely';
  }else if (number === 7) {
    answer= 'Outlook good.';
  }else if (number === 8) {
    answer= 'Yes.';
  }else if (number === 9) {
    answer= 'Signs point to yes.';
  }else if (number === 10) {
    answer= 'Reply hazy, try again.';
  }else if (number === 11) {
    answer= 'Ask again later.';
  }else if (number === 12) {
    answer= 'Better not tell you now.';
  }else if (number === 13) {
    answer= 'Concentrate and ask again.';
  }else if (number === 14) {
    answer= 'Don\'t count on it.';
  }else if (number === 15) {
    answer= 'My reply is no.';
  }else if (number === 16) {
    answer= 'My sources say no.';
  }else if (number === 17) {
    answer= 'Outlook not so good.';
  }else if (number === 18) {
    answer= 'Very doubtful.';
  }else if (number === 19) {
    answer= 'very negative';
  }
console.log ("The ball has shaken!");

  return answer;

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
