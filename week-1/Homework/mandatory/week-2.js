
// function boolChecker(bool) {
//     if (typeof bool === `boolean`) {
//       return "You've given me a bool, thanks!";
//     }
//     return "No bool, not cool.";
// }
// console.log(boolChecker(true))

// const assert = require('assert')
// const mentorCount = 10; 
// const studentCount = 11;
// assert(mentorCount < studentCount);

// const capacity = 25;
// const people = 15;
// assert(capacity > people);

// const name1 = "class"
// const name2 = "class"
// assert(name1 === name2);

// const number1 = 2;
// const number2 = 3;
// assert(number1 !== number2);

// const thisNumber = 3;
// const thatNumber = 3;
// assert(thisNumber === thatNumber);

// const thisArray = [1, 2, 3, 4, 5];
// const thatArray = [1, 2, 3, 4, 5];
// thisArray = thatArray;
// assert(thisArray === thatArray);




function numberChecker() {
    let num= Math.round(Math.random()*40);

    if (num > 20) {
      return `${num} is greater than 20`;
    } else if (num === 20) {
      return `${num} is equal to 20`;
    } else if (num < 20) {
      return `${num} is less than 20`;
    } else {
      return `${num} isn't even a number :(`;
    }
   
  }
  console.log( numberChecker());
  


  function mood(){
      let possibleAnswer =[`happy`, `sad`, 1 ]
      answer= possibleAnswer[Math.round(Math.random()*2)]
      console.log(answer)
      if(answer === "happy"){
          return `Good job, you'r doin great`
      }
      if(answer==="sad"){
        return `Every cloud has a silver lining`
    }
    if(answer === 1){
        return `Beep beep boop`
    };
    
  };
  console.log(mood());


  let fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
    fruits[1] = `raspburry`
    fruits[4] = `pineapple`
    console.log(fruits)



