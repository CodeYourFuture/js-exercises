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
function shakeBall() {
  /*
  I made a random number and I multiply it by 4 to get 
  numbers more than zero to 4
  then I round to the ceil becuase we will have 4 answers   
  */
  var rand = Math.ceil(Math.random() * 4);
  console.log("The ball has shaken!");
  if (rand === 1) {
    answer = "Very positive";
  } else if (rand === 2) {
    answer = "Positive";
  } else if (rand === 3) {
    answer = "Negative";
  } else if (rand === 4) {
    answer = "Very negative";
  }
  return answer;
}

// The answer should come from shaking the ball
let answer;

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(answer) {
  // Rand will be from 1 to 5 becuase I'm going to check 5 possibilities
  var rand = Math.ceil(Math.random() * 5);

  if (answer === "Very positive") {
    if (rand === 1) {
      return "It is certain.";
    } else if (rand === 2) {
      return "It is decidedly so.";
    } else if (rand === 3) {
      return "Without a doubt.";
    } else if (rand === 4) {
      return "Yes - definitely.";
    } else if (rand === 5) {
      return "You may rely on it.";
    }
  } else if (answer === "Positive") {
    if (rand === 1) {
      return "As I see it, yes.";
    } else if (rand === 2) {
      return "Most likely.";
    } else if (rand === 3) {
      return "Outlook good.";
    } else if (rand === 4) {
      return "Yes.";
    } else if (rand === 5) {
      return "Signs point to yes.";
    }
  } else if (answer == "Negative") {
    if (rand === 1) {
      return "Reply hazy, try again.";
    } else if (rand === 2) {
      return "Ask again later.";
    } else if (rand === 3) {
      return "Better not tell you now.";
    } else if (rand === 4) {
      return "Cannot predict now.";
    } else if (rand === 5) {
      return "Concentrate and ask again.";
    }
  } else if (answer == "Very negative") {
    if (rand === 1) {
      return "Don't count on it.";
    } else if (rand === 2) {
      return "My reply is no.";
    } else if (rand === 3) {
      return "My sources say no.";
    } else if (rand === 4) {
      return "Outlook not so good.";
    } else if (rand === 5) {
      return "Very doubtful.";
    }
  }
}

console.log("--------------------------");
shakeBall();
console.log(`ANSWER : ${answer}`);
console.log("level of posibility : " + checkAnswer(answer));

console.log("--------------------------");

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
