const blueButton = document.querySelector("#blueBtn");
const orangeButton = document.querySelector("#orangeBtn");
const greenButton = document.querySelector("#greenBtn");

const changeBackgroundOne = document.querySelector(".Jumbotron");
const changeBackgroundTwo = document.querySelector(".buttons .btn-primary");
const changeBackgroundThree = document.querySelector(".buttons .btn-secondary");

blueButton.addEventListener("click", () => {
  changeBackgroundOne.style.backgroundColor = `#588fbd`;
  changeBackgroundTwo.style.backgroundColor = `#ffa500`;
  changeBackgroundThree.style.backgroundColor = `black`;
  changeBackgroundThree.style.color = `white`;
});
orangeButton.addEventListener("click", () => {
  changeBackgroundOne.style.backgroundColor = `#f0ad4e`;
  changeBackgroundTwo.style.backgroundColor = `#5751fd`;
  changeBackgroundThree.style.backgroundColor = `#31b0d5`;
  changeBackgroundThree.style.color = `white`;
});
greenButton.addEventListener("click", () => {
  changeBackgroundOne.style.backgroundColor = `#87ca8a`;
  changeBackgroundTwo.style.backgroundColor = `#black`;
  changeBackgroundThree.style.backgroundColor = `8c9c08`;
});

const submitButton = document.querySelector("form .btn");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const userEmail = document.querySelector("#exampleInputEmail1");
  const userName = document.querySelector("#example-text-input");
  const userDescribe = document.querySelector("#exampleTextarea");

  const isUserEmailEmpty = userEmail.value.length <= 1;
  const userEmailValueInclude = userEmail.value.includes("@");
  const isEmailvalid = !userEmailValueInclude && !isUserEmailEmpty;
  const isUserNameEmpty = userName.value.length <= 1;
  const isuserDescribeEmpty = userDescribe.value.length <= 1;

  if (isEmailvalid) {
    userEmail.style.backgroundColor = "red";
  }
  if (isUserNameEmpty) {
    userName.style.backgroundColor = "red";
  }
  if (isuserDescribeEmpty) {
    userDescribe.style.backgroundColor = "red";
  }

  if (!isUserNameEmpty && !isuserDescribeEmpty && !isEmailvalid) {
    alert("thank you for filling out the form");
  }
});
