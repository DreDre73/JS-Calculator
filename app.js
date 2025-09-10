// ----------------------
// Global State
// ----------------------
let num1;
let num2;
let operator;
let currentInput = "";
let result = ""
let isOn = true;

// ----------------------
// DOM References
// ----------------------
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator')
const decimalButton = document.querySelector('#decimal');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#backspace');
const plusMinusButton = document.querySelector('#plusMinus')
const powerButton = document.querySelector('#power');
const topDiplay = document.querySelector('.topDisplay');
const bottomDiplay = document.querySelector('.bottomDisplay');

// ----------------------
// Global Event Listeners
// ----------------------
clearButton.addEventListener("click", clearDisplay);
displayNumbers();

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(currentInput !== ""){
        num1 = Number(currentInput)
        }
        operator = button.textContent
        currentInput = ""
        bottomDiplay.textContent = currentInput
    })
})

equalButton.addEventListener("click", () => {
    num2 = Number(currentInput)
    result = (operate(num1, operator, num2));
    topDiplay.textContent = result
    currentInput = ""
    num1 = result
    num2 = ""
    operator = ""
})

backButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0,-1);
    bottomDiplay.textContent = currentInput
})

decimalButton.addEventListener("click", () => {
    if(!currentInput.includes(".")){
        currentInput += decimalButton.textContent
        bottomDiplay.textContent = currentInput
    }
})

plusMinusButton.addEventListener("click", () => {
    if(currentInput === "") return;
    
    if(currentInput[0] === "-"){
        currentInput = currentInput.slice(1);
    }
    else{
        currentInput = "-" + currentInput;
    }
    bottomDiplay.textContent = currentInput
})

powerButton.addEventListener("click", () => {
    isOn = !isOn;

    const allButtons = [...digitButtons, ...operatorButtons, decimalButton, equalButton, clearButton, backButton, plusMinusButton];
    allButtons.forEach(btn => {
        btn.disabled = !isOn;
        btn.style.filter = isOn ? "brightness(1)" : "brightness(0.4)";
        btn.style.cursor = isOn ? "pointer" : "default";
    });

    topDiplay.style.backgroundColor = isOn ? "#6c5ce7" : "#555";
    bottomDiplay.style.backgroundColor = isOn ? "#6c5ce7" : "#555";

    if (!isOn) clearDisplay();
});

// ----------------------
// Functions
// ----------------------
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(num1, operator, num2){
    let result;

    if (operator == "+"){
        result = add(num1, num2)
    }
    else if(operator == "-"){
        result = subtract(num1,num2)
    }
    else if(operator == "x"){
        result = multiply(num1,num2)
    }
    else if(operator == "/"){
        result = divide(num1,num2)
    }
    else{
        result = "Doesnt work twin"
    }
    return result;
}

function displayNumbers(){
    digitButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            bottomDiplay.textContent = currentInput;
        })
    })
}

function clearDisplay(){
    topDiplay.textContent = "";
    bottomDiplay.textContent = "";
    currentInput = "";
    num1 = "";
    num2 = "";
}





