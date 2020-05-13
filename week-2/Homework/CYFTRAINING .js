let num = 0
while (num <= 10) {
console.log(num);
num +=1
}

console.log("THis is good")
for(let i = 1; i < 11; i += 1){
    console.log(i);
}

console.log("This is fine")
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// Array in javascript: first word start from 0,1,2,3 and so on. e.g. banana is 0, apple is 1, strawberry is 2 and so on//

const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange']
fruits[1]= "raspberry";
console.log(fruits);

fruits[4]= "pineapple"
console.log(fruits);

//Array properties exercise//

let names1 = ["John", "Paul", "Luke", "King"];
console.log(names1.length);

let names2 = ["Kit", "Mat", "hurt"];
console.log = names2.concat(names1);


const mentors = ["Daniel", "Richard", "Irina", "Astrid"]
mentor = mentors.sort();
console.log(mentor);


const unorderedLetters = ["z", "v", "b", "f", "g"];
const orderedLetters = unorderedLetters.sort();

const unorderedNumbers = [8, 5, 1, 4, 2];
const orderedNumbers = unorderedNumbers.sort();

console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]
console.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]

console.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]
console.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]


let newArr = [1, 2, 3]


// newArr.concat(4)
[ 1, 2, 3, 4 ]
newArr
[ 1, 2, 3 ]
newArr = newArr.concat(4)
[ 1, 2, 3, 4 ]
newArr
[ 1, 2, 3, 4 ]//
  