class Person {
  constructor(name) {
    this.name = name
  }
  greeting() {
    console.log("Hi! I'm " + this.name + '.')
  }
}

// Do not edit this section
const simon = new Person('simon')
console.log(simon.name)
simon.greeting()
// Do not edit this section
