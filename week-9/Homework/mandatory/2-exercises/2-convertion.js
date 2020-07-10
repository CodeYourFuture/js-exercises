
    //Convert the Function here into a JavaScript Class called 'Person'


       // function createNewPerson(name) {
class Person{
    constructor(name) {
        
        this.name = name;
    }
            greeting()  {
                console.log('Hi! I\'m ' + this.name + '.');
                
            };
            
        }
    


    // When you run this code using `node 2-convertion.js`, what should you see?
    



// Write your code here

// Do not edit this section
const simon = new Person("simon");
console.log(simon.name);
simon.greeting();

const Taslima = new Person('Taslima');
Taslima.greeting();
// Do not edit this section
