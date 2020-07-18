//jshint esversion:6
const contentEl = document.querySelector(".content");
const contentDetailEl = document.querySelector(".content__details");
const dotsColorEl = document.querySelector(".dots");
const hamburgerMenuEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");
const homeBtnEl = document.querySelector(".menu__items").firstElementChild;
const wheelsBtnEl = homeBtnEl.nextElementSibling;
const monitorsBtnEl = wheelsBtnEl.nextElementSibling;
const categoriesBtnEl = monitorsBtnEl.nextElementSibling;

console.log(categoriesBtnEl);




function changeCarColor() {
    const whiteColor = dotsColorEl.firstElementChild;
    const greyColor = whiteColor.nextElementSibling;
    const redColor = greyColor.nextElementSibling;


    whiteColor.addEventListener("click", function () {
        contentDetailEl.innerHTML = `
        <img src="images/rs7__white.png" alt="audi rs7 image" class="slide-in-blurred-left">
        `;
    });

    greyColor.addEventListener("click", function () {
        contentDetailEl.innerHTML = `
        <img src="images/rs7__grey.png" alt="audi rs7 image" class="slide-in-blurred-left">
        `;
    });

    redColor.addEventListener("click", function () {
        contentDetailEl.innerHTML = `
        <img src="images/rs7__red.png" alt="audi rs7 image" class="slide-in-blurred-left">
        `;
    });
}

function openMenu() {
    hamburgerMenuEl.addEventListener("click", function () {
        navEl.classList.toggle("open");
        navEl.classList.toggle("close");
        contentEl.classList.toggle("shift__content");
        hamburgerMenuEl.classList.toggle("shift__hamburger__menu");
        hamburgerMenuEl.firstElementChild.classList.toggle("change");
        hamburgerMenuEl.firstElementChild.nextElementSibling.classList.toggle("change");
        hamburgerMenuEl.lastElementChild.classList.toggle("change");

    });
}

function home() {
    homeBtnEl.addEventListener("click", function () {
        contentEl.innerHTML = `<div class="content__title">
        <h1>Audi RS7</h1>
      </div>
      <div class="content__details">
        <img src="images/rs7__white.png" alt="audi rs7 image" class="slide-in-blurred-left">
      </div>
      <div class="dots">
        <div class="dot white"></div>
        <div class="dot grey"></div>
        <div class="dot red"></div>
      </div>`;
    });
}

function wheels(){
    wheelsBtnEl.addEventListener("click", function(){
        contentEl.innerHTML = ` <div class="content__title">
        <h1>Audi RS7 Wheels</h1>
      </div>
      <div class="content__details wheel__container">
        <div class="wheels">
          <img src="images/wheel__4.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-1">
          <img src="images/wheel__2.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-2">
          <img src="images/wheel__3.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-3">
        </div>
        <div class="wheels">
          <img src="images/wheel__1.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-4">
          <img src="images/wheel__5.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-5">
          <img src="images/wheel__6.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-6">
        </div>
      </div>`;
    });
}

changeCarColor();
openMenu();
home();
wheels();