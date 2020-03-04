function getAllFrequencies() {
  let frequencies = []
  frequencies[0] = 87
  frequencies[21] = 108
  for (let i = 1; i < 21; ++i) {
    frequencies[i] = Math.random(88, 108)
  }
  console.log(frequencies)
  return frequencies
}
getAllFrequencies()
