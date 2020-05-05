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

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting = () => {
    console.log("Hi! I'm " + this.name + ".");
    return this.name;
  };
}

// Do not edit this section
const simon = new Person("simon");
console.log(simon.name);
simon.greeting();
// Do not edit this section
