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
*/

//Math.random generates a random number between 0 and 1. *20 brings the range to between 0 and 20. 
const randomNumber= Math.random()*20; 
//Math.floor rounds the random numbers down.
const randomNumberFloor= Math.floor(randomNumber);
//Array of all possible answers

1. // This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
console.log("The ball has shaken!")


let answers = [

  //## Very positive
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  
  //## Positive
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  
  //## Negative
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  
  //## Very negative
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."];

return `${answers[randomNumberFloor]}`;
}

2. // The answer should come from shaking the ball
console.log(shakeBall());

3. // When checking the answer, we should tell someone if the answer is
	// - very positive
	// - positive
	// - negative
	// - very negative

function checkAnswer() {
  //Very positive
  if (randomNumberFloor === 0 || randomNumberFloor === 1 || randomNumberFloor === 2 || randomNumberFloor === 3 || randomNumberFloor === 4) {
    return "very positive";
  }


  //Positive
  if (randomNumberFloor === 5 || randomNumberFloor === 6 || randomNumberFloor === 7 || randomNumberFloor === 8 || randomNumberFloor === 9) {
    return "positive";
  }


  //Negative
  if (randomNumberFloor === 10 || randomNumberFloor === 11 || randomNumberFloor === 12 || randomNumberFloor === 13 || randomNumberFloor === 14) {
    return "negative";
  }
  // very Negative
  if (randomNumberFloor === 15 || randomNumberFloor === 16 || randomNumberFloor === 17 || randomNumberFloor === 18 || randomNumberFloor === 19) {
    return "very negative";
  }
}


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
