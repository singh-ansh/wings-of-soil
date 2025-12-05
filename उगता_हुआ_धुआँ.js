let body = document.querySelectorAll("body");
let mq = window.matchMedia("(max-width: 1285px)");
let box1 = document.querySelector(".box1");
let box3 = document.querySelector(".box3");
let box2 = document.querySelector(".box2");
box1.remove();
box3.remove();
box2.style.width="85%";
box2.style.marginTop = "0px";
