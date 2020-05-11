/* Exercise 1*/

class RunningTotal {
    constructor() {
        this.currentTotal = 0;
    }

    add(n) {
        // Implement this method
        this.currentTotal+= n;
    }
    getTotal() {
        // Implement this method
        return this.currentTotal;
    }
}

const runningTotal = new RunningTotal();

runningTotal.add(3);
runningTotal.add(7);
runningTotal.add(7);
console.log(runningTotal.getTotal());

// /*Exercise 2*/

class StopWatch {
    constructor() {
        this.secondsElapsed = 0;

        //Finish implementing the rest of the constructor so that secondsElapsed is updated
        setInterval(() =>{this.secondsElapsed++;},1000)
    }

    getTime() {
        return `Seconds elapsed: ${this.secondsElapsed}`;
    }
}

const stopWatch = new StopWatch();

// Wait a few seconds...

stopWatch.getTime();
// 'Seconds elapsed: 3'

// Wait a few more seconds...

console.log(stopWatch.getTime());
// 'Seconds elapsed: 7'

/* Exercise 3 */

class AddressBook {
  // Implement the constructor method
  // Implement the store method
  // Implement the lookup method
  constructor() {
    this.addressBook = {};
  }

  store(name, email) {
    this.addressBook[name] = email;
    console.log(this.addressBook);
  }
  lookup(name) {
    return this.addressBook[name] || "not found";
  }
}

const myAddressBook = new AddressBook();

myAddressBook.store("bart", "bart@simpsons.com");
myAddressBook.store("maggie", "maggie@simpsons.com");

console.log(myAddressBook.lookup("bart"));
// 'bart@simpsons.com'

console.log(myAddressBook.lookup("homer"));
// 'address not found'
