//run the code - what do you see in the console?
//without changing anything in the code - move the console.log() to a different line so that you get the result "10"

let startingNumber = 0;
let today = "Saturday";

if (today === "Saturday") {
  let startingNumber = 5;
  for (let i = 0; i < 10; i++) {
    startingNumber = startingNumber + 1;
  }
  console.log(startingNumber);
}

for (let i = 0; i < 10; i++) {
  startingNumber = startingNumber + 1;
}
