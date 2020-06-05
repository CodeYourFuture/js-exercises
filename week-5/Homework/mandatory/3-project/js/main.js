//Part one
let blueButton = document.getElementById("blueBtn");
let orangeButton = document.getElementById("orangeBtn");
let greenButton = document.getElementById("greenBtn");
let jumBotron = document.querySelector("div.jumbotron");
let bikeBox = document.querySelector("a.btn.btn-primary.btn-lrg");
let volunteerButton = document.querySelector("a.btn.btn-secondary.btn-lrg");
function changeTheme() {
  return (
    (jumBotron.style.backgroundColor = "#588fbd"),
    (bikeBox.style.backgroundColor = `#ffa500`),
    (volunteerButton.style.backgroundColor = "#000000"),
    (volunteerButton.style.color = "#FFFFFF")
  );
}

const newTheme = () => {
  return (
    (jumBotron.style.backgroundColor = `#f0ad4e`),
    (bikeBox.style.backgroundColor = `#5751fd`),
    (volunteerButton.style.backgroundColor = `#31b0d5`),
    (volunteerButton.style.color = "#FFFFFF")
  );
};

const greenTheme = () => {
  return (
    (jumBotron.style.backgroundColor = `#87ca8a`),
    (bikeBox.style.backgroundColor = "#000000"),
    (volunteerButton.style.backgroundColor = "`#8c9c08`")
  );
};
blueButton.addEventListener("click", changeTheme);
orangeButton.addEventListener("click", newTheme);
greenButton.addEventListener("click", greenTheme);

//Part Two;
