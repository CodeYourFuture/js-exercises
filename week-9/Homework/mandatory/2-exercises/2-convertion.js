class Person{
    constructor(nameOfPerson){
        this.name = nameOfPerson;
    }
    greeting(){
        console.log('Hi! I\'m ' + this.name + '.');
        // alert is not working instead of alert I used console.log
    }
}

// Do not edit this section
const simon = new Person("simon");
console.log(simon.name);
simon.greeting();
// Do not edit this section
