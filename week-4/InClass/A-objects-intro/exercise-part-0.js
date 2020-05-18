/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/
let laptop = {
    brand: "HP",
    isTouchScreen: true,
    screenSize: 15,
    colorAvailable: ["light grey", "white", "dark grey", "gold"],
    shopsSellIt: { PCWorld: 500, Argos: 550, Amazon: 530, HPWebsite: 600 }
}
console.log(laptop.shopsSellIt.PCWorld);
