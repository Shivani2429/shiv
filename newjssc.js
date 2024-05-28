'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].classList.toggle("active");
  }
};

navOpenBtn.addEventListener("click", function () {
  navToggleEvent(navbar);
});

navCloseBtn.addEventListener("click", function () {
  navToggleEvent(navbar);
});

overlay.addEventListener("click", function () {
  navToggleEvent(navbar);
});

/**
 * header scroll
 */

const header = document.querySelector("header");
const goTopBtn = document.querySelector("[data-gotop-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
