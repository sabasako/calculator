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
const calculatorShade = document.querySelector(".calculator-shade");
const specials = document.querySelectorAll(".specials");
const displayBtn = document.querySelectorAll(".display-btn");
const displayTextBack = document.querySelector(".display-text-back");
const displayText = document.querySelector(".display-text");
const display = document.querySelector(".display");

//

const specialZero = document.querySelector(".special-zero");
const special1 = document.querySelector(".special-1");
const special2 = document.querySelector(".special-2");
const special3 = document.querySelector(".special-3");
const special4 = document.querySelector(".special-4");
const special5 = document.querySelector(".special-5");
const special6 = document.querySelector(".special-6");
const special7 = document.querySelector(".special-7");
const special8 = document.querySelector(".special-8");
const special9 = document.querySelector(".special-9");
const specialDot = document.querySelector(".special-dot");
const specialEqual = document.querySelector(".special-equal");
const specialDivide = document.querySelector(".special-divide");
const specialMultiply = document.querySelector(".special-multiply");
const specialSubtract = document.querySelector(".special--");
const specialPlus = document.querySelector(".special-plus");
const specialAc = document.querySelector(".special-ac");
const specialDel = document.querySelector(".special-del");

let firstOperand = "";
let secondOperand = "";
let currentOperation;
let operation = false;
let operationTemp;
let temp;

window.onload = () => {
  darkBtn.forEach((item) => {
    item.click();
  });
};

//////////////////////////////
//        FUNCTIONS         //
//////////////////////////////

// This is function for turning on a light mode
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
  specialDel.style.border = "1px solid #fff";
  specialDel.style.backgroundColor = "#fffffffc";
  specials.forEach((item) => {
    item.style.filter =
      "brightness(0) saturate(100%) invert(56%) sepia(0%) saturate(0%) hue-rotate(112deg) brightness(94%) contrast(89%)";
  });
  specialEqual.style.backgroundColor = "#19acff";
  display.style.backgroundColor = "#fff";
}

// This is function for turning on a dark mode
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
  calculatorShade.style.backgroundColor = "rgba(0, 107, 181, 0.63)";
  calculatorShade.style.filter = "blur(140px)";
  buttons.forEach((item) => {
    item.style.backgroundColor = "#303136";
    item.style.border = "none";
    item.classList.remove("hover");
    item.classList.add("dark-hover");
  });
  specialBtn.forEach((item) => {
    item.style.backgroundColor = "#005DB2";
  });
  specialAc.style.backgroundColor = "#616161";
  specialAc.style.border = "none";
  specialDel.style.backgroundColor = "#616161";
  specialDel.style.border = "none";
  specials.forEach((item) => {
    item.style.filter =
      "brightness(0) saturate(100%) invert(85%) sepia(0%) saturate(317%) hue-rotate(145deg) brightness(80%) contrast(84%)";
  });
  specialEqual.style.backgroundColor = "#1991FF";
  display.style.backgroundColor = "#1e1f22";
}

function operate(operator, a, b) {
  // we can use math operations only on numbers, not strings
  a = Number(a);
  b = Number(b);
  if (operator == "+") {
    return add(a, b);
  } else if (operator == "-") {
    return subtract(a, b);
  } else if (operator == "/") {
    return divide(a, b);
  } else if (operator == "*") {
    return multiply(a, b);
  }
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const round = (a) => Math.round(a * 1000) / 1000;

//////////////////////////////
//      EventListeners      //
//////////////////////////////

// light mode event listener
lightBtn.forEach((item) => {
  item.addEventListener("click", lightMode);
});

// dark mode event listener
darkBtn.forEach((item) => {
  item.addEventListener("click", darkMode);
});

displayBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (firstOperand.length >= 17) return;
    if (firstOperand.slice(0, 1) == 0 && firstOperand.slice(1, 2) != ".") {
      firstOperand = firstOperand.slice(1);
    }
    firstOperand += item.value;
    displayText.textContent = firstOperand;
  });
});

specialAc.addEventListener("click", () => {
  firstOperand = "0";
  secondOperand = "";
  displayText.textContent = "0";
  displayTextBack.textContent = "";
  operation = false;
  operationTemp = false;
});

specialDel.addEventListener("click", () => {
  firstOperand = firstOperand.slice(0, -1);
  displayText.textContent = firstOperand;
  if (firstOperand == "") firstOperand = "0";
});

specialDot.addEventListener("click", () => {
  if (firstOperand.includes(specialDot.value) || firstOperand.length >= 17)
    return;
  if (firstOperand == "") firstOperand = "0";
  firstOperand += specialDot.value;
  displayText.textContent = firstOperand;
});

specialBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (operationTemp == true) {
      operation = true;
      if (firstOperand == "") {
        firstOperand += temp;
      }

      currentOperation = item.value;
      secondOperand = firstOperand;
      displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
      temp = firstOperand;
      firstOperand = "";
      operationTemp = false;
    } else if (
      displayTextBack.textContent.includes("+") ||
      displayTextBack.textContent.includes("-") ||
      displayTextBack.textContent.includes("*") ||
      displayTextBack.textContent.includes("/")
    ) {
      if (firstOperand == "") {
        displayTextBack.textContent = `${secondOperand} ${item.value}`;
        currentOperation = item.value;
      } else {
        secondOperand = round(
          operate(currentOperation, secondOperand, firstOperand)
        );
        currentOperation = item.value;
        displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
        displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
        firstOperand = "";
        operation = true;
      }
    } else {
      // Fixing a bug, if you want to change operator in the middle of a calculation;
      operation = true;
      if (firstOperand == "") {
        firstOperand += temp;
      }

      currentOperation = item.value;
      secondOperand = firstOperand;
      displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
      temp = firstOperand;
      firstOperand = "";
    }
  });
});

specialEqual.addEventListener("click", () => {
  if (operation == false || firstOperand == "") return;
  displayTextBack.textContent = `${secondOperand} ${currentOperation} ${firstOperand} =`;
  let displayOutput = round(
    operate(currentOperation, secondOperand, firstOperand)
  );
  if (String(displayOutput).length >= 17) {
  } else {
    displayText.textContent = displayOutput;
  }

  // If user presses another operation when equal button was already pressed, then we need to use that operation on previous answer.
  firstOperand = displayText.textContent;
  operationTemp = true;
});
