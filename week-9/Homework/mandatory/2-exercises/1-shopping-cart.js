/*
Complete the rest of this code to create an online shopping cart.
The output of running your code should be:
    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  constructor() {
    this.shoppingCart = [];
  }

  cartContains() {
    console.log(myCart);
  }

  addItem(itemName) {
    this.shoppingCart.push(itemName);
  }

  listItems() {
    this.shoppingCart.map((item) => {
      console.log(item);
    });
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
