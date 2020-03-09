
// // let arr = ["Alisina","Constantin", "Kyaw", "Tayfun"];
// // console.log(arr)

// // arr.unshift("Serkan")
// // console.log(arr)

// // arr.push("Mo")
// // console.log(arr)

// let arr1 = ["Alisina","Constantin","Kyaw", "Tayfun", "MinKo", "cAlisina","MConstantin","cKyaw", "cTayfun", "cMinKo", "gAlisina","gConstantin","gKyaw", "gTayfun", "gMinKo"];

// // Only use the first 10 items in a list
// // let arr2 = arr1.splice(0,10);
// // console.log(arr2)
// // Get people from a list whose name starts with a M
// let Mfinder = arr1.filter(person => person.charAt(0) == 'M');
// console.log(Mfinder)
// Find the first person in a list to be over 100 years old
// let Mfinder = arr1.filter(person => person.charAt(0) > 100);
// Arrange people in a list alphabetically
// arr1.sort()
// console.log(arr1)
// Get the last 10 items in an array
// let arr3 = arr1.splice(arr1.length-11, 10)
// console.log(arr3)
// // // Add all the numbers up in a list
// // var sum = array.reduce(function(a, b){
// //     return a + b;
// // }, 0);

// // console.log(sum); // Prints: 15
// // // Get all the cats in an array of animals 
// // let arr4 = ["bear","bird","dog", "cat" , "tiger", "leopard", "elephand","giraffe", "fish", "chita"];
// // let arr5 = arr4.includes("cat") //RETURNS BOOLEAN

// // From a list of numbers, add a £ sign prefix

// // Combine a list of romance films and thrillers


// // Use the array of the people from your table
// // Combine it with another array filled with the names from another table
// // console.log the names in alphabetical order
// // Create a new value with the 2nd, 3rd and 4th people in it
// // Create a function that takes a name and an array of names and returns a string. If the name is not in an array, it should retuern <name> is not sitting at the table with <people in the array>. If the name is in the array, it should return <name> is sitting at the table with <people in the array>.


// let arr1 = ["Alisina","Constantin", "Kyaw", "Tayfun"];
// let arr2 = ["Nader","Alex", "Tania", "Serkan"];
// arr1 = arr1.concat(arr2);
// console.log(arr1.sort());
// let arr3 = arr1.slice(1,4);
// console.log(arr3.sort());

// function isInMyTable(name,arr5){
    
//     if (arr5.includes(name)){
//         return `${name} is sitting at the table with people ${arr5.join()}`
//     } else{
//         return `${name} is not sitting at the table with people ${arr5.join()}` //can you not repeat that line, CHALLENGE
//     }
// }
//     const result = isInMyTable("xx", ["Alisina","Constantin", "Kyaw", "Tayfun"]);
//     console.log (result);





//.map
        
    // let mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
    // const formattedMentors = mentors.map(function(name) {
    //   return name.trim().toLowerCase();
    // });
    // console.log(formattedMentors);

    //OR 

    function trimT(name) {
        return name.trim().toLowerCase();
      }
    let mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];
    const formattedMentors = mentors.map(trimT);
    console.log(formattedMentors);


//     Exercise (10 minutes)
// I have a function defined below as:

// This function does not need to be modified. Can you pass in a callback function which will mutate abracaArray such that it:

// Upper cases all letters in the array
// Sorts abracaArray in alphabetical order




/*function abracaFunction(yourFunc) {
  console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!")
  const abracaArray = ['James', 'Elamin', 'Ismael', 'Sanyia', 'Chris', 'Antigoni'];

  const abracaOutput = yourFunc(abracaArray)

  return abracaOutput
}

function myUpperCase (arr) {

    arr.toUpperCase();
    arr.sort();

    const
    
}*/

let testScores = [11, 23, 44 , 54, 233, 556]
console.log(testScores.map(x => x*2))
console.log(testScores.filter(x=> x>30)) 
console.log(testScores) //the original array not changes


console.log(testScores.find(x => x>24)) // does not return the array but return a value. this returns the first item from the array that is bigger than 24. Notice that the return is not an array, no [].