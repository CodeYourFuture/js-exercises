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

// This should log "The ball has shaken!"
*/

function shakeBall() {
  let number = Math.ceil(Math.random() * 4);
  console.log("The ball has shaken!");
  if (number === 1) {
    answer = "Very positive";
  } else if (number === 2) {
    answer = "Positive";
  } else if (number === 3) {
    answer = "Negative";
  } else if (number === 4) {
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
  let number = Math.ceil(Math.random() * 5);
  // ## Very positive
  // It is certain.
  // It is decidedly so.
  // Without a doubt.
  //   Yes - definitely.
  // You may rely on it.
  if (answer === "Very positive") {
    if (number === 1) {
      return "It is certain.";
    } else if (number === 2) {
      return "It is decidedly so.";
    } else if (number === 3) {
      return "Without a doubt.";
    } else if (number === 4) {
      return "Yes - definitely.";
    } else if (number === 5) {
      return "You may rely on it.";
    }
    // ## Positive
    // As I see it, yes.
    // Most likely.
    // Outlook good.
    //   Yes.
    // Signs point to yes.
  }
  if (answer === "Positive") {
    if (number === 1) {
      return "As I see it, yes.";
    } else if (number === 2) {
      return "Most likely.";
    } else if (number === 3) {
      return "Outlook good.";
    } else if (number === 4) {
      return "Yes.";
    } else if (number === 5) {
      return "Signs point to yes.";
    }
  }
  // ## Negative
  // Reply hazy, try again.
  // Ask again later.
  // Better not tell you now.
  // Cannot predict now.
  // Concentrate and ask again.
  if (answer === "Negative") {
    if (number === 1) {
      return "Reply hazy, try again.";
    } else if (number === 2) {
      return "Ask again later.";
    } else if (number === 3) {
      return "Better not tell you now.";
    } else if (number === 4) {
      return "Cannot predict now.";
    } else if (number === 5) {
      return "Concentrate and ask again.";
    }
  }
  // ## Very negative
  // Don't count on it.
  // My reply is no.
  // My sources say no.
  // Outlook not so good.
  // Very doubtful.
  if (answer === "Very negative") {
    if (number === 1) {
      return "Don't count on it.";
    } else if (number === 2) {
      return "My reply is no.";
    } else if (number === 3) {
      return "My sources say no.";
    } else if (number === 4) {
      return "Outlook not so good";
    } else if (number === 5) {
      return "Very doubtful";
    }
  }
}
// and return the answer.
console.log(`level of posibility : ${answer}`);
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
