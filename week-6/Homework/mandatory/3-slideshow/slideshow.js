// Write your code here

let images = [
  {
    src: "https://cdn.pixabay.com/photo/2020/03/16/17/44/tram-4937785_1280.jpg",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2017/01/12/02/20/lisbon-1973531_1280.jpg",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2020/02/24/12/56/lisbon-4876136_1280.jpg",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2019/08/02/12/52/lisbon-4379663_1280.jpg",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2018/12/26/05/12/portugal-3895332_1280.jpg",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2020/02/07/19/26/portugal-4828134_1280.jpg",
  },
];

let i = 0;

let imgEl = document.querySelector("#slide");
let forwardBtn = document.querySelector("#forwardBtn");
let backBtn = document.querySelector("#backBtn");
let autoBck = document.querySelector("#autoBack");
let autoFwd = document.querySelector("#autoForward");
let stopBtn = document.querySelector("#stop");

function forward() {
  i++;
  if (i > images.length - 1) {
    i = 0;
  }

  imgEl.setAttribute("src", `${images[i].src}`);
}

forwardBtn.addEventListener("click", forward);

function backward() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }

  imgEl.setAttribute("src", `${images[i].src}`);
}
backBtn.addEventListener("click", backward);

autoBck.addEventListener("click", () => {
  slideBck = setInterval(backward, 1000);
});
autoFwd.addEventListener("click", () => {
  slideFwd = setInterval(forward, 1000);
});

stopBtn.addEventListener("click", () => {
  if (window.slideBck) {
    clearInterval(window.slideBck);
  }
  if (window.slideFwd) {
    clearInterval(window.slideFwd);
  }
});
