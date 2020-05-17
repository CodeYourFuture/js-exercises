let i = 0
const testRecursion = (condition) => {
  if (condition) {
    i++ 
    console.log(i)
    return testRecursion(condition) //function call itself - this is how loops work
  }
}

testRecursion(i < 10)
