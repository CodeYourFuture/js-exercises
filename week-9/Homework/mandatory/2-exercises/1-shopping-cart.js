/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  constructor() {
    this.myShoppingCart = [];
  }
  addItem(item) {
    this.myShoppingCart.push(item);
  }
  listItems() {
    this.myShoppingCart.forEach((item) => console.log(item));
  }

  cartContains() {
    console.log(this.myShoppingCart);
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
