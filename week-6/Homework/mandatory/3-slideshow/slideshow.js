// Write your code here
let a = "https://alicerosehome.files.wordpress.com/2019/12/20191203_164312-1-copy.jpg?w=906"
let b = "https://alicerosehome.files.wordpress.com/2019/12/img-20191219-wa0008-1.jpg?w=616"
let c = "https://alicerosehome.files.wordpress.com/2020/02/anna-and-olaf.jpg?w=1024"
let d = "https://alicerosehome.files.wordpress.com/2019/02/20190209_152248_signature-1.jpg?w=616"
let e = "https://alicerosehome.files.wordpress.com/2018/12/HarryPotter_20180327.jpg?w=616"
let f = "https://alicerosehome.files.wordpress.com/2018/12/IceDragon_201705.jpg?w=616"

links = [a, b, c, d, e, f];

const autoBack = document.querySelector('#auto-back')
const frwBtn = document.querySelector('#forwardbtn')
const stopBtn = document.querySelector('#stop')
const backBtn = document.querySelector('#backbtn')
const autoFrw = document.querySelector('#auto-forward')
let images = document.querySelector('#images')

images.src = links[0]
let i = 0
let j;

function forwardImg() {
  images.src = links[i];
  i++;
  j = i - 2;
  i > links.length - 1 ? i = 0 : i;
}

function backwardImg() {
  images.src = links[j];
  j--;
  i = j + 2;
  j < 0 ? j = links.length - 1 : j;
}

frwBtn.addEventListener("click", forwardImg);
backBtn.addEventListener("click", backwardImg);

autoFrw.addEventListener("click", function() {
  let setFrwInt = setInterval(forwardImg, 1000);
  stopBtn.addEventListener("click", function() {
    clearInterval(setFrwInt);
  });
});

autoBack.addEventListener('click', function() {
    let setBackInt = setInterval(backwardImg, 1000)
    stopBtn.addEventListener('click', function() {
        clearInterval(setBackInt)
    })
})