/*

Think of 5 different real world "things" that you 
can describe with a JavaScript object

Assign each of them to a separate variable

*/
let car = {
  make: "Nissan",
  model: "Micra",
  color: "silver",
  maxSpeed: "130mph",
  doors: 5,
  start: function() {
    console.log("starting...");
  },
  stop: function() {
    console.log("stopinging...");
  }
};

let mobilePhone = {
  brand: "apple",
  price: "£500",
  hasPrimaryCamera: true,
  hasSecondaryCamera: true,
  call: function() {
    console.log("calling...");
  },
  disconnect: function() {
    console.log("disconnecting...");
  }
};
let person = {
  firstName: "Raj",
  lastName: "Raju",
  age: 30,
  run: function() {
    console.log("Raj is runnig...");
  },
  sit: function() {
    console.log("Raj is sitting...");
  },
  walk: function() {
    console.log("Raj is walking...");
  }
};

let apple = {
  color: "green",
  from: 'china',
  price: '£1',
  eat: function() {
    console.log("eating...");
  },
  throw: function() {
    console.log("throwing...");
  }
};
let post = {
    title: 'Aaout a holiday',
    subtile: 'holiday in some place',
    createdBy: 'Name',
    date: '1st July 2017',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, repellendus veritatis et animi dignissimos nemo laudantium explicabo! Consectetur qui magnam dicta doloribus dolor iusto animi eum repellendus officia, possimus neque?',
    delete: function (){
        console.log('deleting')
    },
    rating: 5,
    commetnts: ['one', 'two', 'three']
}