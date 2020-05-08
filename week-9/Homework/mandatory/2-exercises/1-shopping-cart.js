/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs
*/

class ShoppingCart {
  constructor(){
    this.cart=[];

  
  }
  // Add your code here
  addItem(item){
    this.cart.push(item)
  }

  listItems(){
    this.cart.forEach(item => console.log(item))
  }


  cartContains() {
    console.log(this.cart)

    // Use console.log() to output everything contained in your cart
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
