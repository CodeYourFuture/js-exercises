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
let allAnswers  = [
  //very positive
  "It is certain.", 
  "It is decidedly so."
  ,"Without a doubt.", 
  "Yes - definitely.", 
  "You may rely on it.", 
  ///positive
  "As I see it, yes.", 
  "Most likely.", 
  "Outlook good.", 
  "Yes.", 
  "Signs point to yes.",
//negative
    "Reply hazy, try again." ,
    "Ask again later.", 
    "Better not tell you now.", 
    "Cannot predict now.", 
    "Concentrate and ask again.", 
    //very negative
    "Don't count on it.", 
    "My reply is no.",  
    "My sources say no.", 
    "Outlook not so good." ]

function shakeBall() {
  console.log("The ball has shaken!");
  let answer = allAnswers[Math.floor(Math.random()* allAnswers.length)];
  return answer;
};

// The answer should come from shaking the ball

let answer = shakeBall();

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
let indexOfAnswer = allAnswers.indexOf(answer); 
  
  if (indexOfAnswer <= 4) {
    return "very positive"
   } else if (indexOfAnswer > 4 && indexOfAnswer <= 9){
    return "positive"
   }  else if (indexOfAnswer > 9 && indexOfAnswer <= 14){
    return "negative"
   }  else { 
    return "very negative"
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
