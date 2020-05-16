/*
    Convert the Function here into a JavaScript Class called 'Person'

    ```
        function createNewPerson(name) {
            const obj = {};
            obj.name = name;
            obj.greeting = function() {
                alert('Hi! I\'m ' + obj.name + '.');
            };
            return obj;
        }

        const simon = createNewPerson('simon');
        simon.name;
        simon.greeting()
    ```

    When you run this code using `node 2-convertion.js` you should be able to
    

*/

// Write your code here
class Person{
    constructor(name){
        this.name = name;
        this.greeting = function() {
            console.log('Hi! I\'m ' + name + '.');
    }
}
}
// Do not edit this section
const person1 = new Person("simon");
console.log(person1.name);
person1.greeting();
 const person2 = new Person("Sara");
 person2.greeting()
// Do not edit this section
