/* First Exercises*/
// // 1.
// function one() {
//     var a = 10;
// }
// one();
// console.log(a); // what is the value of a

// // 2.
// function two() {
//     let b = 10;
//     let b = 20;
// }
// two();
// console.log(b); // what is the value of b and why

// // 3.
// let c;
// function three() {
//     c = 25;
// }
// three();
// console.log(c); // what is the value of c and why

// // 4.
// function four() {
//     d = 25;
// }
// four();
// console.log(d); // what is the value of d and why

// // 5.
// let e;
// function five() {
//     const greeting = "Hello";

//     function greet() {
//         let name = "Eddie";
//         e = `${greeting} ${name}`;
//     }
//     greet();
// }
// five();
// console.log(e); // what is the value of e and why

// // 6.
// function six() {
//     if (true) {
//         let f = 50;
//     }
//     console.log(f); // what is the value of f and why
// }

// six();

/* Second Exercises*/

class RunningTotal {
    constructor() {
        this.currentTotal = 0;
    }

    add(n) {
        // Implement this method
    }
    getTotal() {
        // Implement this method
    }
}

const runningTotal = new RunningTotal();

runningTotal.add(3);
runningTotal.add(7);
runningTotal.add(7);
runningTotal.getTotal();
