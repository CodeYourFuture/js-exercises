// this function does validate any password within the password array
function validatePasswordSimple(password) {
  return (
    password.length >= 5 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!#$%.]/.test(password)
  )
}
//this function validates all the passwords in the array.
function validatePasswordsSimple(passwords) {
  return passwords.map(validatePasswordSimple)
}

// this function validate the password uniqueness on the array besid validating the acctual password on the array.
function validatePasswords(passwords) {
  let prevElemts = []
  let results = passwords.map(password => {
    let valid =
      validatePasswordSimple(password) && !prevElemts.includes(password)
    prevElemts.push(password)
    return valid
  })
  return results
}

const passwords1 = ['Se%5', 'TktE.TJTU', '384#HsHF', 'dvyyeyy!5', 'tryT3729']
const passwords2 = ['StUFf27%', 'Pl3nty!', 'Jai33', 'shajsaUA**&&', 'Pl3nty!']

function arraysEqual(a, b) {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length != b.length) return false

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }

  return true
}

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
  'validatePasswords function works - case 1',
  arraysEqual(validatePasswords(passwords1), [
    false,
    false,
    true,
    false,
    false,
  ]),
)

test(
  'validatePasswords function works - case 2',
  arraysEqual(validatePasswords(passwords2), [true, true, false, false, false]),
)
