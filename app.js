//jshint esversion:6
const contentEl = document.querySelector(".content");
let contentDetailEl = document.querySelector(".content__details");
let dotsColorEl = document.querySelector(".dots");
const hamburgerMenuEl = document.querySelector(".hamburger");
const navEl = document.querySelector(".nav");

const homeBtnEl = document.querySelector(".menu__items").firstElementChild;
const wheelsBtnEl = homeBtnEl.nextElementSibling;
const enginesBtnEl = wheelsBtnEl.nextElementSibling;
const gallaryBtnEl = enginesBtnEl.nextElementSibling;

const modalEl_1 = document.querySelector(".modal_1");
const modalEl_2 = document.querySelector(".modal_2");
const modalEl_3 = document.querySelector(".modal_3");
const modalEl_4 = document.querySelector(".modal_4");
const modalEl_5 = document.querySelector(".modal_5");
const modalEl_6 = document.querySelector(".modal_6");
const modalEl_7 = document.querySelector(".modal_7");
const modalEl_8 = document.querySelector(".modal_8");
const modalEl_9 = document.querySelector(".modal_9");
const modalEl_10 = document.querySelector(".modal_10");
const modalEl_11 = document.querySelector(".modal_11");
const modalEl_12 = document.querySelector(".modal_12");
const modalEl_13 = document.querySelector(".modal_13");
const modalEl_14 = document.querySelector(".modal_14");
const modalEl_15 = document.querySelector(".modal_15");
const modalEl_16 = document.querySelector(".modal_16");
const modalEl_17 = document.querySelector(".modal_17");
const modalEl_18 = document.querySelector(".modal_18");

const closeModalTriggerEl = document.querySelectorAll(".close__modal");
const gallaryCloseModalTriggerEl = document.querySelectorAll(
  ".close__modal__gallary"
);

let whiteColor = dotsColorEl.firstElementChild;
let greyColor = whiteColor.nextElementSibling;
let redColor = dotsColorEl.lastElementChild;

const controllersEl = document.querySelector(".controllers");
const controllerWrapperEl = document.querySelector(".controllers__wrapper");
const carouselEl = document.querySelector(".carousel");
const gallaryModalBody = document.querySelector(".gallary__modal__body");
var gallaryEl;

const rightController = controllerWrapperEl.lastElementChild;
const leftController = controllerWrapperEl.firstElementChild;

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

function engines() {
  enginesBtnEl.addEventListener("click", function () {
    contentEl.innerHTML = ` <div class="content__title">
        <h1>Audi RS7 Engines</h1>
      </>
      <div class="content__details wheel__container">
        <div class="wheels">
          <img src="images/engine__1.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-1 e1">
          <img src="images/engine__2.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-2 e2">
          <img src="images/engine__3.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-3 e3">

        </div>
        <div class="wheels">
          <img src="images/engine__4.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-4 e4">
          <img src="images/engine__5.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-5 e5">
          <img src="images/engine__6.png" alt="audi rs7 wheels image" class="scale-in-ver-bottom-6 e6">

        </div>
      </div>`;
  });
}

function wheelsEnginesGallaryInfos() {
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
    } else if (event.target.classList.contains("e1")) {
      modalEl_7.classList.add("open__modal");
    } else if (event.target.classList.contains("e2")) {
      modalEl_8.classList.add("open__modal");
    } else if (event.target.classList.contains("e3")) {
      modalEl_9.classList.add("open__modal");
    } else if (event.target.classList.contains("e4")) {
      modalEl_10.classList.add("open__modal");
    } else if (event.target.classList.contains("e5")) {
      modalEl_11.classList.add("open__modal");
    } else if (event.target.classList.contains("e6")) {
      modalEl_12.classList.add("open__modal");
    } else if (event.target.classList.contains("g1")) {
      controllersEl.style.display = "block";
      modalEl_13.classList.add("open__modal");
    } else if (event.target.classList.contains("g2")) {
      controllersEl.style.display = "block";
      modalEl_14.classList.add("open__modal");
    } else if (event.target.classList.contains("g3")) {
      controllersEl.style.display = "block";
      modalEl_15.classList.add("open__modal");
    } else if (event.target.classList.contains("g4")) {
      controllersEl.style.display = "block";
      modalEl_16.classList.add("open__modal");
    } else if (event.target.classList.contains("g5")) {
      controllersEl.style.display = "block";
      modalEl_17.classList.add("open__modal");
    } else if (event.target.classList.contains("g6")) {
      controllersEl.style.display = "block";
      modalEl_18.classList.add("open__modal");
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
    closeModalTriggerEl[6].addEventListener("click", function (event) {
      modalEl_7.classList.remove("open__modal");
    });
    closeModalTriggerEl[7].addEventListener("click", function (event) {
      modalEl_8.classList.remove("open__modal");
    });
    closeModalTriggerEl[8].addEventListener("click", function (event) {
      modalEl_9.classList.remove("open__modal");
    });
    closeModalTriggerEl[9].addEventListener("click", function (event) {
      modalEl_10.classList.remove("open__modal");
    });
    closeModalTriggerEl[10].addEventListener("click", function (event) {
      modalEl_11.classList.remove("open__modal");
    });
    closeModalTriggerEl[11].addEventListener("click", function (event) {
      modalEl_12.classList.remove("open__modal");
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
      } else if (event.target === modalEl_7) {
        modalEl_7.classList.remove("open__modal");
      } else if (event.target === modalEl_8) {
        modalEl_8.classList.remove("open__modal");
      } else if (event.target === modalEl_9) {
        modalEl_9.classList.remove("open__modal");
      } else if (event.target === modalEl_10) {
        modalEl_10.classList.remove("open__modal");
      } else if (event.target === modalEl_11) {
        modalEl_11.classList.remove("open__modal");
      } else if (event.target === modalEl_12) {
        modalEl_12.classList.remove("open__modal");
      }
    });
  });
}

function gallary() {
  gallaryBtnEl.addEventListener("click", function () {
    contentEl.innerHTML = ` <div class="content__title">
    <h1>Audi RS7 Gallary</h1>
  </>
  <div class="content__details gallary__container">
    <div class="gallary">
      <img src="images/gallary__1.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-1 g1">
      <img src="images/gallary__2.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-2 g2">
      <img src="images/gallary__3.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-3 g3">

    </div>
    <div class="gallary">
      <img src="images/gallary__4.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-4 g4">
      <img src="images/gallary__5.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-5 g5">
      <img src="images/gallary__6.jpg" alt="audi rs7 wheels image" class="scale-in-ver-bottom-6 g6">

    </div>
  </div>`;

    gallaryEl = document.querySelectorAll(".gallary");
    carousel();
  });
}

function carousel() {
  const image__1 = gallaryEl[0].firstElementChild;
  const image__2 = image__1.nextElementSibling;
  const image__3 = image__2.nextElementSibling;
  const image__4 = gallaryEl[1].firstElementChild;
  const image__5 = image__4.nextElementSibling;
  const image__6 = image__5.nextElementSibling;

  image__1.addEventListener("click", function () {
    controllersNext(modalEl_13);
    controllersPrev(modalEl_13);
  });
  image__2.addEventListener("click", function () {
    controllersNext(modalEl_14);
    controllersPrev(modalEl_14);
  });
  image__3.addEventListener("click", function () {
    controllersNext(modalEl_15);
    controllersPrev(modalEl_15);
  });
  image__4.addEventListener("click", function () {
    controllersNext(modalEl_16);
    controllersPrev(modalEl_16);
  });
  image__5.addEventListener("click", function () {
    controllersNext(modalEl_17);
    controllersPrev(modalEl_17);
  });
  image__6.addEventListener("click", function () {
    controllersNext(modalEl_18);
    controllersPrev(modalEl_18);
  });
}

function closeGallaryImages() {
  gallaryCloseModalTriggerEl[0].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_13.classList.remove("open__modal");
  });
  gallaryCloseModalTriggerEl[1].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_14.classList.remove("open__modal");
  });
  gallaryCloseModalTriggerEl[2].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_15.classList.remove("open__modal");
  });
  gallaryCloseModalTriggerEl[3].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_16.classList.remove("open__modal");
  });
  gallaryCloseModalTriggerEl[4].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_17.classList.remove("open__modal");
  });
  gallaryCloseModalTriggerEl[5].addEventListener("click", function (event) {
    controllersEl.style.display = "none";
    modalEl_18.classList.remove("open__modal");
  });
}
function controllersNext(modal_X) {
  // close gallary button
  closeGallaryImages();

  rightController.addEventListener("click", function () {
    if (modal_X === modalEl_13) {
      modalEl_13.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_14.classList.add("open__modal");
      controllersNext(modalEl_14);
    } else if (modal_X === modalEl_14) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_15.classList.add("open__modal");
      controllersNext(modalEl_15);
    } else if (modal_X === modalEl_15) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_16.classList.add("open__modal");
      controllersNext(modalEl_16);
    } else if (modal_X === modalEl_16) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_17.classList.add("open__modal");
      controllersNext(modalEl_17);
    } else if (modal_X === modalEl_17) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.add("open__modal");
      controllersNext(modalEl_18);
    } else if (modal_X === modalEl_18) {
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_13.classList.add("open__modal");
      controllersNext(modalEl_13);
    }
  });
}

function controllersPrev(modal_Y) {
  closeGallaryImages();

  leftController.addEventListener("click", function () {
    if (modal_Y === modalEl_13) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.add("open__modal");
      controllersPrev(modalEl_18);
    } else if (modal_Y === modalEl_14) {
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_13.classList.add("open__modal");
      controllersPrev(modalEl_13);
    } else if (modal_Y === modalEl_15) {
      modalEl_13.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_14.classList.add("open__modal");
      controllersPrev(modalEl_14);
    } else if (modal_Y === modalEl_16) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_15.classList.add("open__modal");
      controllersPrev(modalEl_15);
    } else if (modal_Y === modalEl_17) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_17.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_16.classList.add("open__modal");
      controllersPrev(modalEl_16);
    } else if (modal_Y === modalEl_18) {
      modalEl_13.classList.remove("open__modal");
      modalEl_14.classList.remove("open__modal");
      modalEl_15.classList.remove("open__modal");
      modalEl_16.classList.remove("open__modal");
      modalEl_18.classList.remove("open__modal");
      modalEl_17.classList.add("open__modal");
      controllersPrev(modalEl_17);
    }
  });
}
openMenu();
home();
wheels();
wheelsEnginesGallaryInfos();
engines();
gallary();
