// this function generates a random number between 0 and 10(excluded)

function getNumber() {
  return Math.random() * 10
}

// this function Join two strings
function s(w1, w2) {
  return w1.concat(w2)
}

// this function Join three strings
function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(secondWord, thirdWord)
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status
  if (expr) {
    status = 'PASSED'
  } else {
    status = 'FAILED'
  }

  console.log(`${test_name}: ${status}`)
}

test(
  'concatenate function - case 1 works',
  concatenate('code ', 'your ', 'future') === 'code your future',
)
test(
  'concatenate function - case 2 works',
  concatenate('I ', 'like ', 'pizza') === 'I like pizza',
)
test(
  'concatenate function - case 3 works',
  concatenate('I ', 'am ', 13) === 'I am 13',
)
