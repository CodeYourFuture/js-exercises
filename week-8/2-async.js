// Turn getFlightDetails() into an async function and use the .then(..) method
// to implement the following functions in order
// - getFlightDetails()
// - selectFlight(..)
// - bookFlight(..)
//
// Hint: use the `async` keyword to create an async function

function getFlightDetails () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('LDN -> JPN')
    }, 3000)
  })
}

// async function getFlightDetails () {
//   await setTimeout(() => {}, 3000)
//   // return flightDetails
//   return 'LDN -> JPN'
// }

function selectFlight (flight) {
  return `Flight ${flight} selected`
}

function bookFlight (flight) {
  return `Flight ${flight} booked`
}

getFlightDetails().then(flight => {
  console.log(selectFlight(flight))
  console.log(bookFlight(flight))
})

async function printFlight () {
  const flight = await getFlightDetails()
  console.log(flight)
}
printFlight()
