 /*
let names = ["Rayhan", "Hamid", "Madiha", "James"];
let get = names[1];//gets first 1th element hamid
names.unshift("hell0");//adding to beginning of array
names.push("bye");
console.log(names);
names.prototype.reverse();
console.log(Array);


//const doesn't allow you to rename the variable you can't redfine the array but you can manipulate it, let is the rule of the array you can't change it
//use let in modren web development
//global varialbes don't change even if you create a function and change it/variable scope

//1). slice (0,9)
//2). 
//3). loop through array and if arr[i] > 100 return the index's or return score > 100
//4).sort method
//5).

let alphabet = ["a", "b", "c", "h", "p"];
let x  = alphabet.slice(1,4);
console.log(x);


let numbers = [1,2,3];
let doubledNumbers = [];
function double(number){
    return number * 2;
}

for(let i=0; i < numbers.length;i++){
    doubledNumbers.push(double(numbers[i]))
}

console.log(doubledNumbers);
*/

function abracaFunction(yourFunc) {
    console.log("I am abracaFunction! Watch as I mutate an array of strings to your heart's content!")
    const abracaArray = ['James', 'Elamin', 'Ismael', 'Sanyia', 'Chris', 'Antigoni']
  
    const abracaOutput = yourFunc(abracaArray)
  
    return abracaOutput
  }
//uppercase all letters
//sort abraca in alphabetical order
const uppercase = 
    abracaArray.map(function(callback) {
    return callback.trim().sort().toUpperCase();
  });
 

console.log(uppercase);

