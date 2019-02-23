// Destructure this object

function destructureObj() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40"
  }

  /* destructure here */

  // Should show "red, 20, 40"
  console.log(`${colour}, ${height}, ${width}`)
}

// Destructure this object literal and map colour to variable a, height to b and width to c

function mapToVars() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40"
  }

  /* destructure here */

  // Should show "red, 20, 40"
  console.log(`${a}, ${b}, ${c}`)
}

// Only destructure the colour and width variables

function selectiveDestructure() {
  const rectangle = {
    colour: "red",
    height: "20",
    width: "40"
  }

  /* destructure here */

  // Should show "red, 20, 40"
  console.log(`${colour}, ${width}`)
}

// Destructure this list

function destructureList() {
  const names = ["Alice", "Bob", "Charlie", "David"]

  /* destructure here */

  // Should show "Alive, Bob, Charlie, David"
  console.log(`${a}, ${b}, ${c}, ${d}`) 
}
