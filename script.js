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

lightBtn.forEach((item) => {
  item.addEventListener("click", () => {
    darkDiv.classList.add("hidden");
    lightDiv.classList.remove("hidden");
    body.style.background = "#daf0ff";
    calculator.style.background = "#f7f8fb";
    buttons.forEach((item) => {
      item.style.background =
        "linear-gradient(129.7deg, rgba(255, 255, 255, 0.6) -9.69%, rgba(255, 255, 255, 0.4) 114.23%)";
      item.style.border = "1px solid #ffffff";
    });
    modsDiv.style.backgroundColor = "hsl(0, 0%, 93%)";
    equal.style.boxShadow =
      "-9px 13px 23px rgba(0, 163, 255, 0.65), inset -3px 4px 11px #b0dfff;";
    calculatorShade.style.cssText =
      "background: rgba(96, 190, 255, 0.55); filter: blur(123px);";
    specialBtn.forEach((item) => {
      item.style.backgroundColor = "#ade2ff";
    });
    specialAc.style.cssText = "background: #fff;";
    specialDel.style.cssText = "border: 1px solid #ffffff;";
    specials.forEach((item) => {
      item.style.cssText =
        "filter: brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(112deg) brightness(94%) contrast(89%)";
    });
    specialEqual.style.cssText =
      "background: #19acff; box-shadow: -9px 13px 23px rgba(0, 163, 255, 0.65), inset -3px 4px 11px #b0dfff; border: none;";
  });
});

darkBtn.forEach((item) => {
  item.addEventListener("click", () => {
    darkDiv.classList.remove("hidden");
    lightDiv.classList.add("hidden");
    body.style.background = "#343f46";
    calculator.style.background =
      "linear-gradient(191.34deg, #17181A -4.95%, #17181A 103.74%)";
    buttons.forEach((item) => {
      item.style.background = "#303136";
      item.style.border = "none";
    });
    modsDiv.style.backgroundColor = "#303136";
    equal.style.boxShadow = "none";
    calculatorShade.style.cssText =
      "background: rgba(0, 107, 181, 0.63); filter: blur(140px);";
    specialBtn.forEach((item) => {
      item.style.backgroundColor = "#005DB2";
    });
    specialAc.style.cssText = "background: #616161; border: none;";
    specialDel.style.cssText = "background: #616161; border: none;";
    specials.forEach((item) => {
      item.style.cssText =
        "filter: brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(317%) hue-rotate(145deg) brightness(80%) contrast(84%)";
    });
    specialEqual.style.background = "#1991FF";
  });
});
