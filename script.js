"use strict";

const upperDisplay = document.querySelector("[data-upper-display");
const lowerDisplay = document.querySelector("[data-lower-display");
const operations = document.querySelectorAll("[data-operations]");
const numbers = document.querySelectorAll("[data-numbers]");
const clearBtn = document.querySelector("[data-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");

const darkBtn = document.querySelector("[data-dark]");
const lightBtn = document.querySelector("[data-light]");

const root = document.querySelector(":root");

// / / / / / / /
// * Main Class
// / / / / / / /

class Calculator {
  constructor(upperDisplayValue, lowerDisplayValue, currentOperator) {
    this.upperDisplayValue = upperDisplayValue;
    this.lowerDisplayValue = lowerDisplayValue;
    this.currentOperator = currentOperator;
  }

  // Changes upper display value
  changeUpperDisplay() {
    upperDisplay.textContent = this.upperDisplayValue;
  }

  // Changes lower display value
  changeLowerDisplay() {
    lowerDisplay.textContent = this.lowerDisplayValue;
  }

  // When user clicks on numbers, they show up on lower display
  addNumbers(nums) {
    // if ((nums === "0" && this.lowerDisplayValue.slice(0, 1)) === "0") return;
    if (nums === "." && this.lowerDisplayValue.includes(".")) return;
    if (nums === "." && this.lowerDisplayValue === "") {
      this.lowerDisplayValue = "0.";
      this.changeLowerDisplay();
      return;
    }

    // If user tries to start a number with zeros, this code removes extra ones
    if (
      this.lowerDisplayValue.slice(0, 1) === "0" &&
      !this.lowerDisplayValue.includes(".") &&
      nums !== "."
    ) {
      this.lowerDisplayValue = this.lowerDisplayValue.slice(1, -1);
    }
    this.lowerDisplayValue += nums;
    this.changeLowerDisplay();
  }

  // When user clicks on operations, numbers move to upper display and lower display clears
  addOperator(op) {
    if (this.currentOperator !== "" && this.lowerDisplayValue !== "") {
      // If user tries to divide by zero, alert will show up
      if (this.lowerDisplayValue == 0 && this.currentOperator === "÷") {
        alert('You can"t divide by 0!');
        return;
      }

      // If user presses operators instead of equals button, this code will calculate value
      if (this.currentOperator === "+") {
        this.upperDisplayValue =
          Number(this.upperDisplayValue) + Number(this.lowerDisplayValue);
      } else if (this.currentOperator === "-") {
        this.upperDisplayValue =
          Number(this.upperDisplayValue) - Number(this.lowerDisplayValue);
      } else if (this.currentOperator === "÷") {
        this.upperDisplayValue =
          Number(this.upperDisplayValue) / Number(this.lowerDisplayValue);
      } else if (this.currentOperator === "×") {
        this.upperDisplayValue =
          Number(this.upperDisplayValue) * Number(this.lowerDisplayValue);
      }

      upperDisplay.textContent = this.upperDisplayValue + op;
      this.currentOperator = op;
      this.lowerDisplayValue = "";
      lowerDisplay.textContent = "0";
      return;
    }

    this.currentOperator = op;

    // If user clicks operator without inputing numbers, 0 will be selected
    if (this.lowerDisplayValue === "" && this.upperDisplayValue === "") {
      this.upperDisplayValue = 0;
      upperDisplay.textContent = this.upperDisplayValue + this.currentOperator;
      return;
    }

    // If user wants to change operator
    if (this.lowerDisplayValue === "") {
      upperDisplay.textContent = this.upperDisplayValue + this.currentOperator;
      return;
    }

    this.upperDisplayValue = this.lowerDisplayValue;
    upperDisplay.textContent = this.upperDisplayValue + this.currentOperator;
    this.lowerDisplayValue = "";
    lowerDisplay.textContent = "0";
  }

  // When user presses equals button, this code will calculate final value
  calculate(firstNum, secondNum, operator) {
    // Removes extra =
    if (upperDisplay.textContent.includes("=")) return;

    // If user clicks equals button, when there are no inputs
    if (this.upperDisplayValue === "") return;

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    // Alert, if user tries to divide by 0
    if (secondNum == 0 && this.currentOperator === "÷") {
      alert('You can"t divide by 0!');
      return;
    }

    // Calculates based on selected operator
    let finalValue = 0;
    if (operator === "+") finalValue = firstNum + secondNum;
    else if (operator === "-") finalValue = firstNum - secondNum;
    else if (operator === "÷") finalValue = firstNum / secondNum;
    else if (operator === "×") finalValue = firstNum * secondNum;

    this.lowerDisplayValue = finalValue;
    this.changeLowerDisplay();
    upperDisplay.textContent = `${firstNum} ${operator} ${secondNum} =`;
    this.currentOperator = "";
  }

  // Ac button functionality, resets everything
  clear() {
    this.upperDisplayValue = "";
    this.changeUpperDisplay();

    this.lowerDisplayValue = "";
    lowerDisplay.textContent = "0";

    this.currentOperator = "";
  }

  // Backspace button functionality, removes one number
  delete() {
    // If user removes whole number, 0 will be automaticaly selected
    if (this.lowerDisplayValue.toString().length === 1) {
      this.lowerDisplayValue = "0";
      this.changeLowerDisplay();
      return;
    }
    this.lowerDisplayValue = this.lowerDisplayValue.toString().slice(0, -1);
    this.changeLowerDisplay();
  }
}

// Creates instance, which will store all values.
const displayData = new Calculator("", "", "");

// / / / / / / / / / /
// * Event Listeners
// / / / / / / / / / /

// Event listener for all numbers
numbers.forEach((el) => {
  el.addEventListener("click", () => {
    displayData.addNumbers(el.textContent);
  });
});

// Event listener for all operators
operations.forEach((el) => {
  el.addEventListener("click", () => {
    displayData.addOperator(el.textContent);
  });
});

// Event listener for equals button
equalsBtn.addEventListener("click", () => {
  displayData.calculate(
    displayData.upperDisplayValue,
    displayData.lowerDisplayValue,
    displayData.currentOperator
  );
});

// Event listener for AC button
clearBtn.addEventListener("click", displayData.clear.bind(displayData));

// Event listener for backspace button
deleteBtn.addEventListener("click", displayData.delete.bind(displayData));

// Keyboard functionality
window.addEventListener("keydown", (e) => {
  const keyboardKey = e.key;
  if (keyboardKey >= 0 && keyboardKey <= 9) displayData.addNumbers(keyboardKey);
  if (keyboardKey === ".") displayData.addNumbers(".");
  if (keyboardKey === "Delete") displayData.clear();
  if (keyboardKey === "Backspace") displayData.delete();
  if (keyboardKey === "Enter" || keyboardKey === "=")
    displayData.calculate(
      displayData.upperDisplayValue,
      displayData.lowerDisplayValue,
      displayData.currentOperator
    );
  if (keyboardKey === "+") displayData.addOperator("+");
  if (keyboardKey === "-") displayData.addOperator("-");
  if (keyboardKey === "/") displayData.addOperator("÷");
  if (keyboardKey === "*") displayData.addOperator("×");
});

// / / / / / / / / / / / / / / /
// * Dark and Light mode toggle
// / / / / / / / / / / / / / / /

darkBtn.addEventListener("click", () => {
  darkBtn.setAttribute("name", "moon");
  lightBtn.setAttribute("name", "sunny-outline");
  root.style.cssText =
    "  --background-color: #343f46; --calculator-background-color: #17181a; --calculator-shade-background-color: #60beff8c; --buttons-background-color: #303136; --display-background-color: #1e1f22; --operations-background-color: #005db2; --delete-background-color: #606060; --equals-background-color: #1991ff; --delete-color: #a8a8aa; --equals-color: #b2daff; --primary-color: #38b9ff; --hover-color: #3c5187; --hover-delete: #444; --hover-border-color: #3c5187; --hover-border-delete: #444; --hover-equals: #1a70a1;";
});

lightBtn.addEventListener("click", () => {
  lightBtn.setAttribute("name", "sunny");
  darkBtn.setAttribute("name", "moon-outline");
  root.style.cssText =
    "--background-color: #daf0ff; --calculator-background-color: #f7f8fb; --calculator-shade-background-color: #60beff8c; --buttons-background-color: #fff;--display-background-color: #fff;--operations-background-color: #ade2ff;--delete-background-color: #fffffffc;--equals-background-color: #1991ff;--delete-color: #858586;--equals-color: #b2daff;--primary-color: #109dff;--hover-color: #8ee3ff;--hover-delete: #ccc;--hover-border-color: #70bfda;--hover-border-delete: #acacac;--hover-equals: #1581e5;";
});
