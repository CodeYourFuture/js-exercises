/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  constructor() {
    this.myShoppingCart = []
  }
  cartContains() {
    // Use console.log() to output everything contained in your cart
    console.log(this.myShoppingCart)
  }
  addItem(item) {
    this.myShoppingCart.push(item)
  }
  listItems() {
    this.myShoppingCart.map((item)=> {
      console.log(item)
    })
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();

// class Person {
//   constructor() {
//       this.obj = {}
//   }
//   greeting(name) {
//       this.obj.name = name
//       console.log(`Hi! I'm ${this.obj.name} + '.')
//   }
// }