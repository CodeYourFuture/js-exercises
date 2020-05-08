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
//let answer = function shakeBall() {
// The answer should come from shaking the ball
// let arr = [
//   'Ask a question',
//   'Shake the ball',
//   'Get an answer',
//   "Decide if it's positive or negative",
//   'It is certain',
//   'It is decidedly so',
//   'Without a doubt',
//   'Yes - definitely',
//   'You may rely on it',
//   'Reply hazy, try again',
//   'Ask again later',
//   'Better not tell you now',
//   'Cannot predict now',
//   'Concentrate and ask again',
//   "Don't count on it",
//   'My reply is no',
//   'My sources say no',
//   'Outlook not so good',
//   'Very doubtful',
// ];
//let answer = arr[Math.floor(Math.random() * arr.lenght)];
// return arr[Math.floor(Math.random() * arr.lenght)];
//};

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
// function checkAnswer() {}

// /* ======= TESTS - DO NOT MODIFY ===== */
// const log = console.log;
// let logged;
// console.log = function() {
//   log(...arguments);
//   logged = arguments[0];
// };

// function test(test_name, expr) {
//   let status;
//   if (expr) {
//     status = 'PASSED';
//   } else {
//     status = 'FAILED';
//   }

//   logged = undefined;
//   console.log(`${test_name}: ${status}`);
// }

// const validAnswers = [];
// function testAll() {
//   const answer = shakeBall();
//   test(
//     `shakeBall logs "The ball has shaken!"`,
//     logged === 'The ball has shaken!'
//   );
//   test(`shakeBall returns an string answer"`, typeof answer === 'string');
//   test(
//     `checkAnswer returns the level of positivity"`,
//     ['very positive', 'positive', 'negative', 'very negative'].includes(
//       checkAnswer(answer)
//     )
//   );
// }

// testAll();
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
## Very positive
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
    let arr = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes - definitely',
        'You may rely on it',
        'As I see it, yes.',
        'Most likely',
        'Outlook good, Yes.',
        'Signs point to yes.',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
    ];
    let arrAnswer = arr[Math.floor(Math.random() * arr.length)];
    console.log('The ball has shaken!');
    return arrAnswer;
}

// The answer should come from shaking the ball
let answer = shakeBall();

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(paramAnswer) {
    let yourAnswer = '';
    switch (paramAnswer) {
        case 'It is certain':
            yourAnswer = 'very positive';
            break;
        case 'It is decidedly so':
            yourAnswer = 'very positive';
            break;
        case 'Without a doubt':
            yourAnswer = 'very positive';
            break;
        case 'Yes - definitely':
            yourAnswer = 'very positive';
            break;
        case 'You may rely on it':
            yourAnswer = 'very positive';
            break;
        case 'As I see it, yes.':
            yourAnswer = 'positive';
            break;
        case 'Most likely':
            yourAnswer = 'positive';
            break;
        case 'Outlook good, Yes.':
            yourAnswer = 'positive';
            break;
        case 'Signs point to yes.':
            yourAnswer = 'positive';
            break;
        case 'Reply hazy, try again':
            yourAnswer = 'Negative';
            break;
        case 'Ask again later':
            yourAnswer = 'Negative';
            break;
        case 'Better not tell you now':
            yourAnswer = 'Negative';
            break;
        case 'Cannot predict now':
            yourAnswer = 'Negative';
            break;
        case 'Concentrate and ask again':
            yourAnswer = 'Negative';
            break;
        case "Don't count on it":
            yourAnswer = 'very negative';
            break;
        case 'My reply is no':
            yourAnswer = 'very negative';
            break;
        case 'My sources say no':
            yourAnswer = 'very negative';
            break;
        case 'Outlook not so good':
            yourAnswer = 'very negative';
            break;
        case 'Very doubtful':
            yourAnswer = 'very negative';
            break;
        default:
            yourAnswer = 'Sorry';
    }
    return yourAnswer;
}
checkAnswer(answer);

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
        status = 'PASSED';
    } else {
        status = 'FAILED';
    }

    logged = undefined;
    console.log(`${test_name}: ${status}`);
}

const validAnswers = [];

function testAll() {
    const answer = shakeBall();
    test(
        `shakeBall logs "The ball has shaken!"`,
        logged === 'The ball has shaken!'
    );
    test(`shakeBall returns an string answer"`, typeof answer === 'string');
    test(
        `checkAnswer returns the level of positivity"`, ['very positive', 'positive', 'negative', 'very negative'].includes(
            checkAnswer(answer)
        )
    );
}

testAll();