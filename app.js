//jshint esversion:6
const contentEl = document.querySelector(".content");
const contentDetailEl = document.querySelector(".content__details");
const dotsColorEl = document.querySelector(".dots");
const hamburgerMenuEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");



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

changeCarColor();
openMenu();