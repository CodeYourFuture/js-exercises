/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

var storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James"
    }
  },

  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah"
    }
  }
};

// ONLY EDIT BELOW THIS LINE

// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(Object.keys(storeBranches));

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow));

// # 3
// prints [ 'head_intern', 'intern' ]
console.log(Object.keys(storeBranches.glasgow.interns));

// ONLY EDIT ABOVE THIS LINE

function revrot(str, sz) {
  let transformedStr = "";
  if (str.length >= sz && sz > 0) {
    for (let i = 0; i < Math.floor(str.length / sz); i++) {
      let newStr = str.slice(i * sz, (i + 1) * sz);
      let sumOfCubes = 0;
      for (let j = 0; j < newStr.length; j++) {
        sumOfCubes += Math.pow(newStr[j], 3);
      }
      if (sumOfCubes % 2 === 0) {
        transformedStr += newStr.substr(1) + newStr.charAt(0);
      } else {
        transformedStr += newStr.charAt(newStr.slice(-1));
      }
    }
  }
  return transformedStr;
}
