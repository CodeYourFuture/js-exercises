//An array of integer arrays.
//1st item = people get in the bus.
//2nd item = people who get off the bus in a bus stop.
//Task: return the number of people still in the bus after the last bus stop. 
let array1 = [[10,0],[3,5]];   //expected result = 5.
// let array1 = [[10,0],[3,5],[5,8]];
// let array2 = ([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// let array3 = ([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);

//[[10-0],[3-5],[5-8]]
//[10],[-2],[-3]]
//[10-2-3]
//5
// var number = function(busStops){
    
//   }

// const calculatePeopleLeftInBus = array1 => array1.reduce(([a,b]) => a - b)
function calculatePeopleLeftInBus (array1) {
  for (let i = 0; i < array1.length; i++){
      let reduceNum 
      reduceNum = array1.reduce(([a,b]) => a - b)
    //   console.log(reduceNum)
    return reduceNum
  }

}

console.log(calculatePeopleLeftInBus(array1)) 
