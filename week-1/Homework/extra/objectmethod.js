// /*
// You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. 
// You want to return an array of mentors with the names in uppercase.
// You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.
// */

// let mentorsAges = {
//     james: 29,
//     JOSH: 35,
//     JAMIE: 25,
//     Mozafar: 30
//   };
  
//   // ONLY EDIT BELOW THIS LINE
  
//   let mentorsNames = Object.keys(mentorsAges).map(name => name.toUpperCase());

//   console.log(mentorsNames)
  
// //   let mentorsNamedUppercased = ;
  
//   // ONLY EDIT ABOVE THIS LINE
  
// //   console.log(mentorsNamedUppercased);
// //   // prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]




/*
Objects very often contain other objects.
This exercise will give you practice in getting the keys of objects inside other objects.
Use the provided console.log statements below and follow the instructions above them.
*/

// let storeBranches = {

//     glasgow: {
//       manager: 'Andrew',
//       assistant: 'Laura',
//       interns: {
//         head_intern: 'Mozafar',
//         intern: 'James'
//       }
//     },
  
//     edinburgh: {
//       director: 'Kelly',
//       manager: 'Sally',
//       assistant: 'Derek',
//       interns: {
//         head_intern: 'John',
//         intern: 'Sarah'
//       }
//     }
//   }

  
//   // ONLY EDIT BELOW THIS LINE
  
//   // # 1 get the names of the cities 
//   // prints [ 'glasgow', 'edinburgh' ]
//   console.log(Object.keys(storeBranches))
  
//   // # 2 get the positions in Glasgow
//   // prints [ 'manager', 'assistant', 'interns' ]
//   console.log(Object.keys(storeBranches.glasgow))
  
//   // # 3 get the positions for internt in Glasgow
//   // prints [ 'head_intern', 'intern' ]
//   console.log(Object.keys(storeBranches.glasgow.interns))
  
//   // ONLY EDIT ABOVE THIS LINE


/*
The given object shows the population of largest cities in UK
You need to extract some information from it
The numbers are fake
*/
var UKBigCitiesInMillions = {
    Manchester: 2.5,
    London: 12.5,
    Birmingham: 1.8,
    Glasgow: 2,
    Newcastle: 1.5,
    Cardiff: 0.9,
    Swansea: 0.25,
    Edinburgh: 0.7,
  };
  //1- We discovered a small error in the calculations, we need to add 200 thousdands to each city under 1 million
  //create a loop that write the names of the city over 1 million only to the console
  // Example : "The city of x has a popluation of 1.5 million"
  for (let city in UKBigCitiesInMillions) {
       if (UKBigCitiesInMillions[city]< 1){
        UKBigCitiesInMillions[city] += 0.2
        console.log(UKBigCitiesInMillions[city])
       } 
}

for (let city UKBigCitiesInMillions[city]
  
  //2-We need to know in which area each city is
  //we looking for an output like "x is in Scotland and has population of y millions"
  
  var Scotland = ["Glasgow", "Edinburgh"];
  var England = ["Manchester", "Birmingham", "London", "Newcastle"];
  var Wales = ["Cardiff", "Swansea"];
  
  for (let city in UKBigCitiesInMillions) {
  }