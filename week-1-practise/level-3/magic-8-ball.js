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
let eightballValid = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
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
]

function shakeBall() {
  console.log('The ball has shaken!')
  randomNumber = Math.floor(Math.random() * 20)
  let eightBall = ''
  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain'
      break
    case 1:
      eightBall = 'It is decidedly so'
      break
    case 2:
      eightBall = 'Without a doubt'
      break
    case 3:
      eightBall = 'Yes - definitely'
      break
    case 4:
      eightBall = 'You may rely on it'
      break
    case 5:
      eightBall = 'As I see it, yes'
      break
    case 6:
      eightBall = 'Most likely'
      break
    case 7:
      eightBall = 'Outlook good'
      break
    case 8:
      eightBall = 'Yes'
      break
    case 9:
      eightBall = 'Signs point to yes'
      break
    case 10:
      eightBall = 'Reply hazy, try again'
      break
    case 11:
      eightBall = 'Ask again later'
      break
    case 12:
      eightBall = 'Better not tell you now'
      break
    case 13:
      eightBall = 'Cannot predict now'
      break
    case 14:
      eightBall = 'Concentrate and ask again'
      break
    case 15:
      eightBall = "Don't count on it"
      break
    case 16:
      eightBall = 'My reply is no'
      break
    case 17:
      eightBall = 'My sources say no'
      break
    case 18:
      eightBall = 'Outlook not so good'
      break
    case 19:
      eightBall = 'Very doubtful'
      break
  }
  return eightBall
}

// The answer should come from shaking the ball
let answer

// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative
function checkAnswer(message) {
  if (message == 'It is certain') {
    answer = 'Very positive'
  } else if (message == 'It is decidedly so') {
    answer = 'very positive'
  } else if (message == 'Without a doubt') {
    answer = 'very positive'
  } else if (message == 'Yes - definitely') {
    answer = 'very positive'
  } else if (message == 'You may rely on it') {
    answer = 'very positive'
  } else if (message == 'As I see it, yes') {
    answer = 'positive'
  } else if (message == 'Most likely') {
    answer = 'positive'
  } else if (message == 'Outlook good') {
    answer = 'positive'
  } else if (message == 'Yes') {
    answer = 'positive'
  } else if (message == 'Signs point to yes') {
    answer = 'positive'
  } else if (message == 'Reply hazy, try again') {
    answer = 'very negative'
  } else if (message == 'Ask again later') {
    answer = 'very negative'
  } else if (message == 'Better not tell you now') {
    answer = 'very negative'
  } else if (message == 'Cannot predict now') {
    answer = 'very negative'
  } else if (message == 'Concentrate and ask again') {
    answer = 'very negative'
  } else if (message == "Don't count on it") {
    answer = 'negative'
  } else if (message == 'My reply is no') {
    answer = 'negative'
  } else if (message == 'My sources say no') {
    answer = 'negative'
  } else if (message == 'Outlook not so good') {
    answer = 'negative'
  } else {
    answer = 'negative'
  }

  return answer
}

/* ======= TESTS - DO NOT MODIFY ===== */
const log = console.log
let logged
console.log = function() {
  log(...arguments)
  logged = arguments[0]
}

function test(test_name, expr) {
  let status
  if (expr) {
    status = 'PASSED'
  } else {
    status = 'FAILED'
  }

  logged = undefined
  console.log(`${test_name}: ${status}`)
}

const validAnswers = []
function testAll() {
  const answer = shakeBall()
  test(
    `shakeBall logs "The ball has shaken!"`,
    logged === 'The ball has shaken!',
  )
  test(`shakeBall returns an string answer"`, typeof answer === 'string')
  test(
    `checkAnswer returns the level of positivity"`,
    ['very positive', 'positive', 'negative', 'very negative'].includes(
      checkAnswer(answer),
    ),
  )
}

testAll()
