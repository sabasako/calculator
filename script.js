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
const specialDot = document.querySelector(".special-dot");
const specialEqual = document.querySelector(".special-equal");
const specialAc = document.querySelector(".special-ac");
const specialDel = document.querySelector(".special-del");

let firstOperand = "0";
let secondOperand = "";
let currentOperation;
let operation = false;
let operationTemp;
let temp;

// Dark screen to be chosen automatically
window.onload = () => {
  darkBtn.forEach((item) => {
    item.click();
  });
};

//////////////////////////////
//        FUNCTIONS         //
//////////////////////////////

// turns on a light mode;
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

// turns on a dark mode;
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

// calculates a and b with specific operation, if operator = +, a = 3, b = 4, function will return 3 + 4;
function operate(operator, a, b) {
  // we can use math operations only on numbers, not strings;
  a = Number(a);
  b = Number(b);
  if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else if (operator == "/") {
    return a / b;
  } else if (operator == "*") {
    return a * b;
  }
}

// rounds to one thousandth;
const round = (a) => Math.round(a * 1000) / 1000;

// i had a repeated code and took care of it;
function displayOperator() {
  operation = true;
  if (firstOperand == "") {
    firstOperand += temp;
  }

  secondOperand = firstOperand;
  displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
  temp = firstOperand;
  firstOperand = "";
}

// Displays numbers on calculator;
function addNumbers(item) {
  // if numbers are >= 17 stop execution, because there isn't enough space. 17 isn't some magical number, I checked and display has space only for 17 numbers ;
  if (firstOperand.length >= 17) return;
  // fix for using dot(.)
  if (firstOperand.slice(0, 1) == 0 && firstOperand.slice(1, 2) != ".") {
    firstOperand = firstOperand.slice(1);
  }
  // I change fontSize because there are some cases when numbers still get too big, so i needed to make them smaller;
  displayText.style.fontSize = "32px";
  firstOperand += item;
  displayText.textContent = firstOperand;
}

// "Ac" button, removes everything on calculator and displays 0;
function removeAc() {
  firstOperand = "0";
  secondOperand = "";
  displayText.textContent = "0";
  displayTextBack.textContent = "";
  operation = false;
  operationTemp = false;
  displayText.style.fontSize = "32px";
}

// removes number one by one;
function del() {
  firstOperand = firstOperand.slice(0, -1);
  displayText.textContent = firstOperand;
  if (firstOperand == "") firstOperand = "0";
  if (firstOperand.length < 17) {
    displayText.style.fontSize = "32px";
  }
}

// makes dots work;
function dots() {
  // if numbers are >= 17 stop execution, because there isn't enough space.;
  if (firstOperand.includes(specialDot.value) || firstOperand.length >= 17)
    return;
  // if user presses . before 0, then it should automatically display it;
  if (firstOperand == "") firstOperand = "0";
  firstOperand += specialDot.value;
  displayText.textContent = firstOperand;
}

// equal function;
function equal() {
  // same as before, you can't divide by 0;
  if (displayTextBack.textContent.includes("/") && firstOperand == "0") {
    alert("'You can't divide by 0!");
    firstOperand = "";
    return;
  }
  // makes equal unclickable
  if (operation == false || firstOperand == "") return;
  // displays our equation in the back;
  displayTextBack.textContent = `${secondOperand} ${currentOperation} ${firstOperand} =`;
  // displayOutput is a final value, which we got from our calculation;
  let displayOutput = round(
    operate(currentOperation, secondOperand, firstOperand)
  );
  // decreasing numbers font size if it is bigger than display;
  if (String(displayOutput).length >= 17) {
    displayText.style.fontSize = "26px";
    displayText.textContent = displayOutput;
  } else {
    // if it isn't bigger than we don't need to decrease it;
    displayText.textContent = displayOutput;
  }
  // if user presses another operation when equal button was already pressed, then we need to use that operation on previous answer.
  firstOperand = displayText.textContent;
  operationTemp = true;
  operation = false;
}

// That is a big function, which I used for displaying operators and also using them without equal, so if you need to calculate 2 + 2 and then press *;
function operators(item) {
  // if you want to continue calculation after pressing =;
  if (operationTemp == true) {
    currentOperation = item;
    displayOperator();
    operationTemp = false;
  } else if (
    // item.value doesn't work here, I know there are other other functions which do same as includes() with multiple options, but I just wanted to use includes();
    displayTextBack.textContent.includes("+") ||
    displayTextBack.textContent.includes("-") ||
    displayTextBack.textContent.includes("*") ||
    displayTextBack.textContent.includes("/")
  ) {
    // You can't divide by 0, but if user doesn't know that, then there will be strange behavior, so I avoided like this: If user divides number by 0, then it will alert them, that it is impossible. (First i created custom alert, but i think this is better);
    if (displayTextBack.textContent.includes("/") && firstOperand == "0") {
      alert("'You can't divide by 0!");
      firstOperand = "";
      return;
    }
    // to change operator in the middle of a calculation;
    if (firstOperand == "") {
      displayTextBack.textContent = `${secondOperand} ${item}`;
      currentOperation = item;
    } else {
      // calculating without equal;
      secondOperand = round(
        operate(currentOperation, secondOperand, firstOperand)
      );
      currentOperation = item;
      displayTextBack.textContent = `${secondOperand} ${currentOperation}`;
      firstOperand = "";
      operation = true;
    }
  } else {
    // Fixing a bug, if you want to change operator in the middle of a calculation;
    currentOperation = item;
    displayOperator();
  }
}

// Keyboard functionality;
function keyboard(e) {
  const keyboardKey = e.key;
  if (keyboardKey >= 0 && keyboardKey <= 9) addNumbers(keyboardKey);
  if (keyboardKey === "Delete") removeAc();
  if (keyboardKey === "Backspace") del();
  if (keyboardKey === ".") dots();
  if (keyboardKey === "Enter") equal();
  if (keyboardKey === "=") equal();
  if (
    keyboardKey === "+" ||
    keyboardKey === "-" ||
    keyboardKey === "/" ||
    keyboardKey === "*"
  )
    operators(keyboardKey);
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

displayBtn.forEach((item) => {
  item.addEventListener("click", () => {
    addNumbers(item.value);
  });
});

specialBtn.forEach((item) => {
  item.addEventListener("click", () => {
    operators(item.value);
  });
});

specialAc.addEventListener("click", removeAc);

specialDel.addEventListener("click", del);

specialDot.addEventListener("click", dots);

specialEqual.addEventListener("click", equal);

window.addEventListener("keydown", keyboard);
