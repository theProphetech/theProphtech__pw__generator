"use strict";
import { integrate__usernamegene } from "./username.js";
import { integrate__pwgene } from "./password.js";

const start__now__btn = document.querySelector(".header__btn__cta");
const main__section = document.getElementById("main__section");
const header__section = document.getElementById("header");
const tab__1 = document.querySelector(".tab__1");
const tab__2 = document.querySelector(".tab__2");
const pw__content__con = document.querySelector(".pw__content__con");
const un__content__con = document.querySelector(".un__content__con");

const un__length = document.getElementById("user__length");
const un__incnum = document.getElementById("inc__num");
const un__incupper = document.getElementById("uppercase__inc__un");
const un__prefix = document.getElementById("add__prefix");
const un__suffix = document.getElementById("suffix__input");
const unsubmit__btn = document.querySelector(".unsubmit__btn");
const username__output = document.querySelector(".username__output__con");
const to__main = document.querySelector(".go2main");

const pw__output__con = document.querySelector(".password__con");
const pw__length = document.getElementById("pw__length");
const pw__incnum = document.getElementById("inc__num__pw");
const pw__special = document.getElementById("sym__inc__pw");
const pw__submit__btn = document.getElementById("pw__btn");

// displaying the main content
function scrollto__main(btn) {
  btn.addEventListener("click", () => {
    main__section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    header__section.style.display = "none";
    main__section.style.display = "grid";
  });
}
scrollto__main(start__now__btn);

to__main.addEventListener("click", (e) => {
  header__section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  header__section.style.display = "block";
  main__section.style.display = "none";
});

/* Switching the active button */

tab__1.addEventListener("click", (e) => {
  tab__2.classList.remove("active__tab");
  tab__1.classList.add("active__tab");
  pw__content__con.classList.add("hidden__tab");
  un__content__con.classList.remove("hidden__tab");
});

tab__2.addEventListener("click", (e) => {
  tab__1.classList.remove("active__tab");
  tab__2.classList.add("active__tab");
  pw__content__con.classList.remove("hidden__tab");
  un__content__con.classList.add("hidden__tab");
});

/* Preventing the submit button from default function */

addEventListener("submit", (e) => {
  e.preventDefault();
});

unsubmit__btn.addEventListener("click", () => {
  integrate__usernamegene(
    username__output,
    un__length,
    un__incnum,
    un__incupper,
    un__prefix,
    un__suffix
  );
});
pw__submit__btn.addEventListener("click", () => {
  integrate__pwgene(pw__output__con, pw__length, pw__incnum, pw__special);
});
integrate__pwgene(pw__output__con, pw__length, pw__incnum, pw__special);

// console.log(un__suffix.value);
