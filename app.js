//jshint esversion:6
const contentDetailEl = document.querySelector(".content__details");
const dotsColorEl = document.querySelector(".dots");



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

changeCarColor();