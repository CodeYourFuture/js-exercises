let  person1 = {  name:   "Alice",   age:  25
};
let  person2 = {  name:   "Bob",   age:  30
};
let  person3 = {  name:   "John",   age:  20
};

let persons = [person1, person2, person3]

let personNames = persons.map(person => person.name) 

let  personsYoungerThan28YearsOld = persons.filter(person => person.age < 28)

let  destination1 = {
    destinationName :  "Edinburgh" ,  distanceKms :  80 ,
    transportations:  [ "car",   "bus" , "  train"] 
   


console .log("  Question 1: array defined with 3 persons -> ", 
(persons[0   ]===person1&&persons[1   ]===person2&&persons[2   ]===
person3) ? '  Passed :)'  : '  Not yet :(' );

console .log("  Question 2: array containing the person names -> " , (personNames[0   ] ===  "Alice"  && personNames[ 1]  ===  "Bob"  &&
personNames[2   ]=== "John" )?' Passed:)' : 'Notyet:(') ;

console .log("  Question 3: array containing the persons younger than 28 years old -> " , (personsYoungerThan28YearsOld[ 0]  === person1 && personsYoungerThan28YearsOld[1   ]===person3)?' Passed:)' :' Notyet:(' );