/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: toilet roll, pasta, eggs
*/

class ShoppingCart {
  // Add your code here
   constructor(){
        this.cart = [];// empty array in the constructor function
   }
    
      addItem(item){// add Item function  item that are in our basket
      this.cart.push(item)// pushes the items into our card
        
     }
     listItems(){
       console.log(`${this.cart} is in your basket`);// console.logs the item that are present in the function
     }
    }
  

let myCart = new ShoppingCart(); // Creates an empty shopping cart
   
 /*calls add item function with an item passed on*/

 myCart.addItem("toilet roll");
myCart.addItem("pasta");
myCart.addItem("eggs");
myCart.addItem("bread");
myCart.listItems();
