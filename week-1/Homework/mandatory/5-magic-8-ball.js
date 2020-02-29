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

//Created a switch 


function shakeBall() {
  console.log("The ball has shaken!");
let randomNumber = Math.floor(Math.random() * 20);
let eightBall = " ";
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'without a doubt';
    break;
  case 3:
    eightBall = 'yes-definantly' ;
    break;
  case 4:
    eightBall = 'You may rely on it';
    break;

  case 5:
    eightBall = 'As I see it, yes.';
    break;
  case 6:
    eightBall = 'Most likely.';
    break;
  case 7:
    eightBall = 'Outlook good.';
    break;

  case 8:
     eightBall = 'Yes.';
    break;

  case 9:
     eightBall = 'Signs point to yes.';
   break;
  
  case 10:
     eightBall = 'Reply hazy, try again.';
   break;
   
  case 11:
    eightBall = 'Ask again later.';
   break; 
  
   case 12:
    eightBall = 'Better not tell you now.';
   break; 
  
  case 13:
    eightBall = 'Cannot predict now.';
   break; 
  
   case 14:
    eightBall = 'Concentrate and ask again.';
   break; 
  
   case 15:
    eightBall = 'Don\'t count on it.';
   break; 

  case 16:
   eightBall = 'My reply is no.';
  break; 
  
  case 17:
    eightBall = 'My sources say no.';
   break; 

   case 18:
    eightBall = 'Outlook not so good.';
   break;

   case 19:
    eightBall = 'Very doubtful.';
   break;
}

return eightBall;
}


// The answer should come from shaking the ball


// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer() {}

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
