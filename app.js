// ----------------------
// Global State
// ----------------------
let num1;
let num2;
let operator;


// ----------------------
// DOM References
// ----------------------
const button0 = document.querySelector('#button0')
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')
const button4 = document.querySelector('#button4')
const button5 = document.querySelector('#button5')
const button6 = document.querySelector('#button6')
const button7 = document.querySelector('#button7')
const button8 = document.querySelector('#button8')
const button9 = document.querySelector('#button9')

const divideButton = document.querySelector('#divide')
const multiplyButton = document.querySelector('#multiply')
const subtractButton = document.querySelector('#subtract')
const equalButton = document.querySelector('#equal')
const addButton = document.querySelector('#add')
const clearButton = document.querySelector('#clear')
const backButton = document.querySelector('#backspace')
const powerButton = document.querySelector('#power')
const topDiplay = document.querySelector('.topDisplay')
const bottomDiplay = document.querySelector('.bottomDisplay')


// ----------------------
// Global Event Listeners
// ----------------------


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
    else if(operator == "*"){
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






