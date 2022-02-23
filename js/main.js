"use strict";

// AOS init

// AOS.init();

// Слайдер
$(function () {
  $(".slider-download").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

// Коментарии

const header = document.querySelector(".header");

function headerScroll() {
  const headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight / 2) {
    header.classList.add("header__active");
  } else {
    header.classList.remove("header__active");
  }
}

window.addEventListener("scroll", () => {
  headerScroll();
});

function headerDropdownHidden(elem) {
  elem.style.opacity = "0";
  elem.style.visibility = "hidden";
}

const headerSelect = document.querySelector(".header__select");
const headerDropdown = document.querySelector(".dropdown-header");

headerSelect.addEventListener("click", () => {
  if (window.getComputedStyle(headerDropdown).opacity === "0" || window.getComputedStyle(headerDropdown).visibility === "hidden") {
    headerDropdown.style.opacity = "1";
    headerDropdown.style.visibility = "visible";
  } else {
    headerDropdownHidden(headerDropdown);
  }
});

window.addEventListener("click", () => {
  if (window.getComputedStyle(headerDropdown).opacity === "1" || window.getComputedStyle(headerDropdown).visibility === "visible") {
    headerDropdownHidden(headerDropdown);
  }
});

const bubbles = document.querySelectorAll(".clients__bubble");
const foreignObjects = document.querySelectorAll(".clients__foreignObject");

bubbles.forEach((bubble, index) => {
  bubble.addEventListener("mouseenter", () => {
    for (let i = 0; i < foreignObjects.length; i++) {
      if (foreignObjects[i].classList.contains("clients__foreignObject-active")) {
        foreignObjects[i].classList.remove("clients__foreignObject-active");
      }
    }
    foreignObjects[index].classList.add("clients__foreignObject-active");
  });

  bubble.addEventListener("mouseout", () => {
    foreignObjects[index].classList.remove("clients__foreignObject-active");
    foreignObjects[2].classList.add("clients__foreignObject-active");
  });
});

// Бургер меню

const burgerBtn = document.querySelector(".burger__menu");
const menuList = document.querySelector(".menu__list");

burgerBtn.addEventListener("click", () => {
  if (!menuList.classList.contains("active")) {
    menuList.classList.add("active");
    burgerBtn.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    menuList.classList.remove("active");
    burgerBtn.classList.remove("active");
    document.body.style = "";
  }
});

// Анимация при скролле

const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemTop = animItem.getBoundingClientRect().top;
      const animItemOffset = animItemTop + window.pageYOffset;
      const animPercent = 4;

      const animPoint = window.innerHeight - animItemHeight / animPercent;

      if (window.scrollY > animItemOffset - animPoint && window.scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add("active");
        animItem.classList.add("anim-hide");
      } else {
        if (!animItem.classList.contains("anim-hide")) {
          animItem.classList.remove("active");
        }
      }
    }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}
