/*You have array named "names" using the forEach method:
-Log the array in the revers order   */

var names = ["Elamin", "Ahmed", "Tayoa", "Nina", "Clement"];
names.forEach(function(nam) {
  return names.reverse();
});
console.log(names);

/*Expected output
['Clement', 'Nina', 'Tayoa', 'Ahmed', 'Elamin']*/
