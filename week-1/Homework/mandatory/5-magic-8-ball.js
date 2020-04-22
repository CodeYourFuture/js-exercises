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
  let answer;
  console.log("The ball has shaken!");
  


// The answer should come from shaking the ball



// When checking the answer, we should tell someone if the answer is
// - very positive
// - positive
// - negative
// - very negative

var outcomes =     ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "Better not tell you now",
                   "Cannot predict now", 
                   "Concentrate and ask again"];

                   answer=Math.floor(Math.random()*outcomes.length);
                   

                   switch(answer){
                    
                      case 0:
                      return "It is certain";
                      break;
                      case 1: 
                      return "It is decidedly so";
                      break;
                      case 2:
                      return  "Without a doubt";
                      break;
                      case 3:
                      return "Yes - definitely.";
                      break;
                      case 4:
                      return "You may rely on it";
                      break;
                      case 5:
                      return  "As I see it, yes";
                      break;
                      case 6:
                      return "Most likely";
                      break;
                      case 7:
                    return "Outlook good";
                    break;
                    case 8: 
                    return "Yes", "Signs point to yes";
                      break;
                      case 9:

                    return "Don't count on it";
                    break;
                    case 10:
                    return "My reply is no";
                    break;
                    case 11:
                    return "My sources say no";
                    break;
                    case 12:
                    return "Outlook not so good";
                    break;
                    case 13:
                    return "Very doubtful";
                    break;
                    case 14:
                      return "Reply hazy, try again";
                      break;
                      case 15:
                    return "Ask again later";
                    break;
                    case 16:
                    return  "Better not tell you now" ;
                    break;
                    case 17:

                    return "Cannot predict now";
                    break;
                    case 18:
                    return"Concentrate and ask again" ;
                    break;
                    

                   }
                 
                  
}
console.log(shakeBall());
 
  ///This function check that outcome fit in to which criteria!!

  function checkAnswer()
  {
    
    var outcomes =  ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes - definitely",
                   "You may rely on it", 
                   "As I see it, yes", 
                   "Most likely", 
                   "Outlook good", 
                   "Yes", "Signs point to yes",
                   "Don't count on it", 
                   "My reply is no",
                   "My sources say no", 
                   "Outlook not so good",
                   "Very doubtful", 
                   "Reply hazy, try again", 
                   "Ask again later", 
                   "Better not tell you now",
                   "Cannot predict now", 
                   "Concentrate and ask again"];

    answer=Math.floor(Math.random()*outcomes.length);
    let result;
    if(answer===0 || answer===1 || answer===2 || answer===3){
      result='very positive';
      return result;
    }
    if(answer===4 || answer===5 || answer===6 || answer===7){
      result='positive';
      return result;
    }
    if(answer===8 || answer===9 || answer==10 || answer===11){
      result= 'negative';
      return result;
    }
    if(answer===12 || answer===13 || answer===14 || answer===15){
      result='negative';
      return result;
    }
    console.log(result);
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
