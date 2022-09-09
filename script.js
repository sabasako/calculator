"use strict";

const darkDiv = document.querySelector(".dark");
const lightDiv = document.querySelector(".light");
const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll(".btn");
const modsDiv = document.querySelector(".mods-div");
const specialBtn = document.querySelectorAll(".special-btn");
const lightBtn = document.querySelectorAll(".light-btn");
const darkBtn = document.querySelectorAll(".dark-btn");
const body = document.querySelector("body");
const equal = document.querySelector(".special-equal");
const calculatorShade = document.querySelector(".calculator-shade");
const specials = document.querySelectorAll(".specials");
const specialAc = document.querySelector(".special-ac");
const specialDel = document.querySelector(".special-del");
const specialEqual = document.querySelector(".special-equal");

//////////////////////////////
//        FUNCTIONS         //
//////////////////////////////

function lightMode() {
  darkDiv.classList.add("hidden");
  lightDiv.classList.remove("hidden");
  specialAc.classList.add("hover-gray");
  specialDel.classList.add("hover-gray");
  specialEqual.classList.add("hover-equal");
  specialAc.classList.remove("dark-hover-gray");
  specialDel.classList.remove("dark-hover-gray");
  specialEqual.classList.remove("dark-hover-equal");
  body.style.backgroundColor = "#daf0ff";
  calculator.style.background = "#f7f8fb";
  modsDiv.style.backgroundColor = "hsl(0, 0%, 93%)";
  // calculatorShade.style.cssText =
  //   "background-color: rgba(96, 190, 255, 0.55); filter: blur(123px);";
  calculatorShade.style.backgroundColor = "rgba(96, 190, 255, 0.55)";
  calculatorShade.style.filter = "blur(123px)";

  buttons.forEach((item) => {
    item.style.backgroundColor = "#fffffffc";
    item.style.border = "1px solid #ffffff";
    item.classList.add("hover");
    item.classList.remove("dark-hover");
  });
  specialBtn.forEach((item) => {
    item.style.backgroundColor = "#ade2ff";
  });
  specialAc.style.backgroundColor = "#fff";
  // specialDel.style.cssText =
  //   "border: 1px solid #fff; background-color: #fffffffc;";
  specialDel.style.border = "1px solid #fff";
  specialDel.style.backgroundColor = "#fffffffc";
  specials.forEach((item) => {
    // item.style.cssText =
    //   "filter: brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(112deg) brightness(94%) contrast(89%)";
    item.style.filter =
      "brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(112deg) brightness(94%) contrast(89%)";
  });
  // specialEqual.style.cssText = "background-color: #19acff;";
  specialEqual.style.backgroundColor = "#19acff";
}

function darkMode() {
  darkDiv.classList.remove("hidden");
  lightDiv.classList.add("hidden");
  specialAc.classList.remove("hover-gray");
  specialDel.classList.remove("hover-gray");
  specialEqual.classList.remove("hover-equal");
  specialAc.classList.add("dark-hover-gray");
  specialDel.classList.add("dark-hover-gray");
  specialEqual.classList.add("dark-hover-equal");
  body.style.backgroundColor = "#343f46";
  calculator.style.backgroundColor = "#17181A";
  modsDiv.style.backgroundColor = "#303136";
  equal.style.boxShadow = "none";
  // calculatorShade.style.cssText =
  //   "background-color: rgba(0, 107, 181, 0.63); filter: blur(140px);";
  calculatorShade.style.backgroundColor = "rgba(0, 107, 181, 0.63)";
  calculatorShade.style.filter = "blur(140px)";
  buttons.forEach((item) => {
    // item.style.cssText = "background-color: #303136;";
    item.style.backgroundColor = "#303136";
    item.style.border = "none";
    item.classList.remove("hover");
    item.classList.add("dark-hover");
  });
  specialBtn.forEach((item) => {
    item.style.backgroundColor = "#005DB2";
  });
  // specialAc.style.cssText = "background-color: #616161; border: none;";
  specialAc.style.backgroundColor = "#616161";
  specialAc.style.border = "none";
  specialDel.style.backgroundColor = "#616161";
  specialDel.style.border = "none";
  // specialDel.style.cssText = "background-color: #616161; border: none;";
  specials.forEach((item) => {
    // item.style.cssText =
    //   "filter: brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(317%) hue-rotate(145deg) brightness(80%) contrast(84%)";
    item.style.filter =
      "brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(317%) hue-rotate(145deg) brightness(80%) contrast(84%)";
  });
  specialEqual.style.backgroundColor = "#1991FF";
  // specialEqual.style.cssText = "background-color: #1991FF;";
}

//////////////////////////////
//      EventListeners      //
//////////////////////////////

lightBtn.forEach((item) => {
  item.addEventListener("click", lightMode);
});

darkBtn.forEach((item) => {
  item.addEventListener("click", darkMode);
});
