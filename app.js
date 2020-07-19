//jshint esversion:6
const contentEl = document.querySelector(".content");
let contentDetailEl = document.querySelector(".content__details");
let dotsColorEl = document.querySelector(".dots");
const hamburgerMenuEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");

const homeBtnEl = document.querySelector(".menu__items").firstElementChild;
const wheelsBtnEl = homeBtnEl.nextElementSibling;
const monitorsBtnEl = wheelsBtnEl.nextElementSibling;
const categoriesBtnEl = monitorsBtnEl.nextElementSibling;

const modalEl_1 = document.querySelector(".modal_1");
const modalEl_2 = document.querySelector(".modal_2");
const modalEl_3 = document.querySelector(".modal_3");
const modalEl_4 = document.querySelector(".modal_4");
const modalEl_5 = document.querySelector(".modal_5");
const modalEl_6 = document.querySelector(".modal_6");

const closeModalTriggerEl = document.querySelectorAll(".close__modal");

let whiteColor = dotsColorEl.firstElementChild;
let greyColor = whiteColor.nextElementSibling;
let redColor = dotsColorEl.lastElementChild;

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
    contentDetailEl = document.querySelector(".content__details");
    dotsColorEl = document.querySelector(".dots");
    whiteColor = dotsColorEl.firstElementChild;
    greyColor = whiteColor.nextElementSibling;
    redColor = dotsColorEl.lastElementChild;

    changeCarColor();
  });

  changeCarColor();
}


function changeCarColor() {
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
    hamburgerMenuEl.firstElementChild.nextElementSibling.classList.toggle(
      "change"
    );
    hamburgerMenuEl.lastElementChild.classList.toggle("change");
  });
}



function wheels() {
  wheelsBtnEl.addEventListener("click", function () {
    contentEl.innerHTML = ` <div class="content__title">
        <h1>Audi RS7 Wheels</h1>
      </>
      <div class="content__details wheel__container">
        <div class="wheels">
          <img src="images/wheel__4.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-1 w1">
          <img src="images/wheel__2.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-2 w2">
          <img src="images/wheel__3.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-3 w3">
        </div>
        <div class="wheels">
          <img src="images/wheel__1.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-4 w4">
          <img src="images/wheel__5.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-5 w5">
          <img src="images/wheel__6.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-6 w6">
        </div>
      </div>`;
  });

}

const wheelsInfo = () => {
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("w1")) {
      modalEl_1.classList.add("open__modal");
    } else if (event.target.classList.contains("w2")) {
      modalEl_2.classList.add("open__modal");
    } else if (event.target.classList.contains("w3")) {
      modalEl_3.classList.add("open__modal");
    } else if (event.target.classList.contains("w4")) {
      modalEl_4.classList.add("open__modal");
    } else if (event.target.classList.contains("w5")) {
      modalEl_5.classList.add("open__modal");
    } else if (event.target.classList.contains("w6")) {
      modalEl_6.classList.add("open__modal");
    }

    closeModalTriggerEl[0].addEventListener("click", function (event) {
      modalEl_1.classList.remove("open__modal");
    });
    closeModalTriggerEl[1].addEventListener("click", function (event) {
      modalEl_2.classList.remove("open__modal");
    });
    closeModalTriggerEl[2].addEventListener("click", function (event) {
      modalEl_3.classList.remove("open__modal");
    });
    closeModalTriggerEl[3].addEventListener("click", function (event) {
      modalEl_4.classList.remove("open__modal");
    });
    closeModalTriggerEl[4].addEventListener("click", function (event) {
      modalEl_5.classList.remove("open__modal");
    });
    closeModalTriggerEl[5].addEventListener("click", function (event) {
      modalEl_6.classList.remove("open__modal");
    });

    window.addEventListener("click", function (event) {
      if (event.target === modalEl_1) {
        modalEl_1.classList.remove("open__modal");
      } else if (event.target === modalEl_2) {
        modalEl_2.classList.remove("open__modal");
      } else if (event.target === modalEl_3) {
        modalEl_3.classList.remove("open__modal");
      } else if (event.target === modalEl_4) {
        modalEl_4.classList.remove("open__modal");
      } else if (event.target === modalEl_5) {
        modalEl_5.classList.remove("open__modal");
      } else if (event.target === modalEl_6) {
        modalEl_6.classList.remove("open__modal");
      }
    });
  });
};

openMenu();
home();
wheels();
wheelsInfo();