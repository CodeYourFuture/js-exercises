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
glasgow = {
  glasgow: "glasgow"
};
edinburgh = {
  edinburgh: "edinburgh"
};
// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(glasgow.glasgow, edinburgh.edinburgh);

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
glasgow = {
  assistant: "laura"
};
edinburgh = {
  assistant: "Derek"
};
console.log(
  glasgow.manager.assistant.interns,
  edinburgh.manager.assistant.interns
);

// # 3
// prints [ 'head_intern', 'intern' ]
console.log(glasgow.interns, edinburgh.intern);

// ONLY EDIT ABOVE THIS LINE
