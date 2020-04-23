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

let answerIndx = 0;

function shakeBall() {
    console.log("The ball has shaken!")
    answerIndx = Math.floor(Math.random() * 20);
    // console.log(answerIndx);
    // console.log(answer[answerIndx]);
    return answer[answerIndx];
}

// The answer should come from shaking the ball
let answer = ["It is certain", "As I see it, yes", "Reply hazy, try again", "Don't count on it",
    "It is decidedly so", "Most likely", "Ask again later", "My reply is no",
    "Without a doubt", "Outlook good", "Better not tell you now", "My sources say no",
    "Yes - definitely", "Yes", "Cannot predict now", "Outlook not so good",
    "You may rely on it", "Signs point to yes", "Concentrate and ask again", "Very doubtful"
]


// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

function checkAnswer() {
    console.log(shakeBall());
    const result = answer.indexOf(`${shakeBall()}`);
    if (result % 4 === 1) {
        console.log("very positive")
        return `very positive`
    } else if (result % 4 === 2) {
        console.log("positive")
        return `positive`
    } else if (result % 4 === 3) {
        console.log("negative")
        return `negative`
    } else {
        console.log("very negative")
        return `very negative`
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
        `checkAnswer returns the level of positivity"`, ["very positive", "positive", "negative", "very negative"].includes(
            checkAnswer(answer)
        )
    );
}

testAll();