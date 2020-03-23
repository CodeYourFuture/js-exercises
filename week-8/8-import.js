// Modify 8-export.js so that you can access the functions here
//
// For this to work with NodeJS, please modify the extension of both the export and import files to .mjs and
// then run `node --experimental-modules <import-file>.mjs` instead of the normal `node <import-file>.js`

import { getDepartureTime, getArrivalTime } from './8-export.js'

getDepartureTime()
getArrivalTime()
