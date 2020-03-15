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

function shakeBall() {
}
let answer = checkAnswer
checkAnswer()
if (answer === 'It is certain.'
  || answer === 'It is decidedly so.'
  || answer === 'Without a doubt.'
  || answer === 'Yes - definitely.'
  || answer === 'You may rely on it.') {
  return 'Very positive'
} else if (answer === 'As I see it, yes.'
  || answer === 'Most likely.'
  || answer === 'Outlook good.'
  || answer === 'Yes.'
  || answer === 'Signs point to yes.') {
  return 'Positive'
} else if (answer === 'Reply hazy, try again.'
  || answer === 'Ask again later.'
  || answer === 'Better not tell you now.'
  || answer === 'Cannot predict now.'
  || answer === 'Concentrate and ask again.') {
  return 'Negative'
} else if (answer === "Don't count on it."
  || answer === 'My reply is no.'
  || answer === 'My sources say no.'
  || answer === 'Outlook not so good.'
  || answer === 'Very doubtful.') {
  answer === 'Very negative'
}



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
