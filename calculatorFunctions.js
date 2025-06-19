let currentInput = ``;
let firstNumber = null; 
let secondNumber = null;
let operator = null;
let calculationHistory = [];

//This function adds two inputs a and b
function add(a, b) {
  return a + b;
}

//This function subtracts input b from input a
function subtract(a, b) {
  return a - b;
}

//This function multiplies input a by input b
function multiply(a, b) {
  return a * b;
}

//This function divides input a by input b 
//if input a is divided by 0 returns error "Error: Undefined"
function divide(a, b) {
  if (b === 0) return 'Error: Undefined'; // handle divide by 0 here only
  return a / b;
}

//This function clears whatever input is currently being displayed 
function clearDisplay(){
    currentInput = ``;
    firstNumber = null; 
    secondNumber = null;
    operator = null;
    document.getElementById('showDisplay').textContent = '0';
}

//This updates the display when an input is pressed 
function showToDisplay(value){
    currentInput += value;
    document.getElementById(`showDisplay`).textContent = currentInput;
} 

//This grabs the first input and converts it from a string to a number. It then grabs the expected operator 
function getOperator(op){
    firstNumber = parseFloat(currentInput);
    operator = op;
    currentInput = ``;
}

/*
This calculates the total and displays it

First I did a check to verify that user has entered a valid operation. I did this to fix a bug when user would press 
"=" button without entering a valid operation the 0 on the display would dissapear and display would shrink. Now it will instead display "Enter a valid operation"

It takes the secondNumber and converts it from a string 
to a number (firstNumber is already converted from a string in the operator function)

Then it checks which operate has been pressed 

It will send the results to the history log and then display results 

After everything is finished the calculator will reset. I added a timeout to ensure there is plenty of time to see the results
*/
function calculate() {
    if (firstNumber === null || currentInput === "" || operator === null) {
        document.getElementById(`showDisplay`).textContent = `Enter a valid operation`;
        return;
    }
    
    secondNumber = parseFloat(currentInput);
    let result;
    let calculation;

    if (operator === `+`){
        result = add(firstNumber, secondNumber)
        calculation = `${firstNumber} + ${secondNumber} = ${result}`;
    } else if (operator === `-`){
        result = subtract(firstNumber, secondNumber)
        calculation = `${firstNumber} - ${secondNumber} = ${result}`;
    } else if (operator === `*`){
        result = multiply(firstNumber, secondNumber)
        calculation = `${firstNumber} * ${secondNumber} = ${result}`;
    } else if(operator === `/`){
        result = divide(firstNumber, secondNumber)
        calculation = `${firstNumber} / ${secondNumber} = ${result}`;
    } 
   
    calculationHistory.push(`${calculation} = ${result}`);
    
    document.getElementById('historyList').innerHTML += `<li>${calculation}</li>`;
  
    document.getElementById(`showDisplay`).textContent = result;

    currentInput = "";
    firstNumber = null;
    secondNumber = null;
    operator = null; 
    setTimeout(() => {
      document.getElementById(`showDisplay`).textContent = "0";
    }, 2000);
}

/*Toggles the history modal. When clicked modal will open 
If user closes it and re-opens again history should still be stored
When user opens History Log the button text should change from Open History Log to Close History Log
*/
function toggleHistory() {
  const historyModal = document.getElementsByClassName(`history`)[0];
  const toggleBtn = document.getElementById(`historyButton`);

  if (historyModal.style.display === `none` || historyModal.style.display === ``) {
    historyModal.style.display = `flex`;
    toggleBtn.textContent = "Close History Log";
  } else {
    historyModal.style.display = `none`;
    toggleBtn.textContent = "Open History Log";
  }
}
