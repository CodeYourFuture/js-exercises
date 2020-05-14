class ShoppingCart {
  constructor(){
    this.listOfShopping = [];
    this.shoppings = "";
  }
  addItem(item){
    this.listOfShopping.push(item)
  }
  listItems(){
    this.listOfShopping.forEach(element => this.shoppings += element + ", ")
  }
  cartContains() {
    console.log(this.shoppings);
  }
}


let myCart = new ShoppingCart();
myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.listItems();

myCart.cartContains();
