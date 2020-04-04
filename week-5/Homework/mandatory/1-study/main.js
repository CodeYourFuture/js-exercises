const MOUNTAINS = [
  {
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania"
  },
  {
    name: "Everest",
    height: 8848,
    place: "Nepal"
  },
  {
    name: "Mount Fuji",
    height: 3776,
    place: "Japan"
  },
  {
    name: "Vaalserberg",
    height: 323,
    place: "Netherlands"
  },
  {
    name: "Denali",
    height: 6168,
    place: "United States"
  },
  {
    name: "Popocatepetl",
    height: 5465,
    place: "Mexico"
  },
  {
    name: "Mont Blanc",
    height: 4808,
    place: "Italy/France"
  }
];

// Your code here
let h1 = document.querySelector("h1");
console.log(h1);
h1.style.textAlign = "center";

function createTableWithMountains(mountains) {
  let div = document.getElementById("mountains");
  let table = document.createElement("table");
  table.setAttribute(
    "style",
    "display: flex; justify-content: space-around; flex-wrap: wrap"
  );
  div.appendChild(table);
  mountains.forEach(function(allmountains) {
    let column = document.createElement("tr");
    table.appendChild(column);
    let row = document.createElement("th");
    column.appendChild(row);
    let h3 = document.createElement("h3");
    row.appendChild(h3);
    h3.innerHTML = allmountains.name;
    let pHeigths = document.createElement("p");
    row.appendChild(pHeigths);
    pHeigths.innerHTML = allmountains.height;
    let pPlace = document.createElement("p");
    row.appendChild(pPlace);
    pPlace.innerHTML = allmountains.place;
  });
}

createTableWithMountains(MOUNTAINS);
