// Take a look at this code:
let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  menu: ["pizza", "calzone", "salad"],
};

let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  menu: ["salad", "chocolate cake", "roast lamb"],
};

let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  menu: ["stew", "chocolate cake", "panini"],
};

let restaurants = [restaurant1, restaurant2, restaurant3];

var sum = Object.values(restaurants);
console.log(sum[1].totalSeats);


// let restaurants = [restaurant1, restaurant2, restaurant3];
// let totS1 = (Object.values(restaurants[0]))[1];
// let totS2 = (Object.values(restaurants[1]))[1];
// let totS3 = (Object.values(restaurants[2]))[1];
// console.log(totS1 + totS2 + totS3);




  

        // // Array Methods - reduce

        // // reduce means REDUCES DOWN to ONE single value
        // // reduce - decrease it down to something small

        // // not the same as REDUCER - reduce means REDUCES DOWN to ONE single value

        // const strings = [1, 2, 3, 4] // number type

        // const sum = array => array.reduce(
        //   (previousValue, currentValue) => previousValue + currentValue
        // )

        // // [1, 2, 3, 4]
        // // [3, 3, 4]
        // // [6, 4]
        // // [10]
        // // 10

        // // console.log(sum(strings))

        // const laetitiaBank = {
        //   name: 'Laetita',
        //   gender: 'female',
        //   currency: 'euro',
        //   amount: [
        //     { // 1st item starts 
        //       currentAccount: [
        //         { shopping: 1500 },
        //         { groceries: 30 },
        //         { transportation: 0 },
        //         { bill: 10000 },
        //         { entertainment: 0 },
        //       ]
        //     }, // 1st item ends

        //     { savingAccount: 120000.00 }, // 2nd item
        //   ],
        // }

        // const targetSpending = "groceries"

        // const getBackTotal = item => item[targetSpending]

        // const targetAmount = laetitiaBank.amount[0].currentAccount
        //   .filter(getBackTotal)
        //   .map(getBackTotal)
        //   .reduce(getBackTotal)

        // const categories = laetitiaBank.amount[0].currentAccount
        //   .map(amount => Object.keys(amount)[0])

        // const totalAmount = laetitiaBank.amount[0].currentAccount
        //   .map(amount => {
        //     const categoryName = Object.keys(amount)[0]
        //     return amount[categoryName]
        //   })
        //   .reduce((previousValue, currentValue) => previousValue + currentValue)

        // console.log(totalAmount)





// //Look at this code:
                    // let house = {
                    //   address: "1 Kinning Park",
                    //   previousOwners: ["Claire M.", "John A."],
                    //   currentOwner: function () {
                    //     return " Margeret" + " Conway";
                    //     //firstName: "Margaret",
                    //     //lastName: "Conway",
                    //   },
                    // };

                    // // let fullNameOfCurrentOwner = Object.values(house.currentOwner);
                    // // console.log(fullNameOfCurrentOwner);

                    // // console.log(Object.values(house.currentOwner));

                    // //console.log(house.currentOwner());

                    // //house.currentOwner()

                    // console.log(Object.keys(house));

