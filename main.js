let emailregex = /[a-z]+[0-9]*[a-z]*@[a-z]+.com/gi;

let email = document.querySelector("[id=email]");
let button1 = document.querySelector(".subscribe");
let button2 = document.querySelector(".dismiss");

let box1 = document.querySelector(".container");
let box2 = document.querySelector(".container2");
let txt = document.querySelector(".container2 p span");

button1.onclick = function () {
  let x = email.value;
  if (emailregex.test(x)) {
    box1.classList.add("hide");
    box2.classList.remove("hide");
    txt.innerHTML = `${x}`;
  }
};
button2.onclick = function () {
  box2.classList.add("hide");
  box1.classList.remove("hide");
};
