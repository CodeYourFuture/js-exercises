// Modify this script so that you may access these functions in 8-import.js
//
// For this to work with NodeJS, please modify the extension of both the export and import files to .mjs and
// then run `node --experimental-modules <import-file>.mjs` instead of the normal `node <import-file>.js`

function getArrivalTime(source, dest) {
  console.log(`Your flight from ${source} to ${dest} arrives at 10:00 GMT`)
}

function getDepartureTime(source, dest) {
  console.log(`Your flight from ${source} to ${dest} departs at 06:00 GMT`)
}
