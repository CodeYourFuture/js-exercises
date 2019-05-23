function groupPercStud(numStud, numMent) {
  return Math.round((100 / (numMent + numStud)) * numStud);
}

function groupPercMent(numStud, numMent) {
  return Math.round((100 / (numMent + numStud)) * numMent);
}

function messaggio(nS, nM) {
  var studentiPercentuale = groupPercStud(nS, nM);
  var mentorPercentuale = groupPercMent(nS, nM);
  return (
    "Percentage students: " +
    studentiPercentuale +
    "%" +
    "\n" +
    "Percentage mentor: " +
    mentorPercentuale +
    "%"
  );
}
console.log(messaggio(15, 8));
