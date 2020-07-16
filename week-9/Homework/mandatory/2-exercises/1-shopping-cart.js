/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  constructor() {
    this.total = 0;
    this.array = [];
  }

  addItem(item) {
    this.array.push(item);
    this.total++;
  }

  cartContains() {
    console.log(`Your shopping cart has ${this.total} items : ${this.array} `);
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
