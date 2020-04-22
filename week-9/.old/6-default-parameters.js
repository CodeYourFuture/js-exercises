// Correct this function so that it is using ES6 default parameter syntax

function feedCat(type, amount) {
  var type = type || 'wet'
  var amount = amount || 1  

  return `Okay, I will feed your cat ${amount} packets of ${type} food`
}

// What is wrong with this function?

function binCollection(collect_day = 'Thursday', address, time = 'morning') {
  return `Your bins will be collected on ${collect_day} ${time} from ${address}`
}
