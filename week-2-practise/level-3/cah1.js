function twoSort(s) {
    // return s.sort()[0].split('').join('***');
    let sorted = s.sort()[0];
    return sorted
      .split("")
      .map(e => e + "***")
      .join("")
      .slice(0, -3);
}
console.log(twoSort(['string one','ating two']));