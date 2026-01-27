let firstNum = null;
let secondNum = null;
let operator = null;
let operationRequest = null;
let calculatedTotal = null;

let screen = document.querySelector(".screen");
screen.textContent = "0";

const buttons = document.querySelectorAll(".button");

const handleClick = (event) => {
    console.log(event.target.textContent);

    //If press Enter Button
    if (event.target.textContent == "Enter" && operator != null) {
        secondNum = operationRequest;
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        calculatedTotal = operate(firstNum, operator, secondNum);
        operationRequest = null;
        screen.textContent = calculatedTotal;

    //If press Clear button
    } else if (event.target.textContent == "C") {
        operationRequest = null;
        firstNum = null;
        secondNum = null;
        operator = null;
        screen.textContent = "0";

    //If clear screen and is a number    
    } else if ((operationRequest == null || operationRequest == 0)
                && (!isNaN(event.target.textContent))) {
        operationRequest = event.target.textContent;
        screen.textContent = operationRequest;

    //If screen is not clear and is a number    
    } else if (!isNaN(event.target.textContent)) {
        operationRequest = operationRequest + event.target.textContent;
        calculatedTotal = null;
        screen.textContent = operationRequest;

    //If an operator and an operator hasn't been entered yet.
    } else if (isNaN(event.target.textContent) && operator == null) {
        operator =event.target.textContent;
        firstNum = operationRequest;
        operationRequest = null;
        calculatedTotal = null;
        screen.textContent = operator;

    //If an operator and an operator HAS been entered.    
    } else if (isNaN(event.target.textContent) && operator != null) {

    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})



function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2){
    //perhaps parse string data received from a user

    console.log(num1);
    console.log(num2);
    console.log(operator);

    let total = null;
    switch(operator){
        case "+":
            total = add(num1, num2);
            break;
        case "-":
            total = subtract(num1, num2);
            break;
        case "*":
            total = multiply(num1, num2);
            break;
        case "/":
            total = divide(num1, num2);
            break;
    }

    return total;
}



document.addEventListener("keypress", checkForKey)


function checkForKey(e) {
    buttons.forEach((button) => {
        key = e.key;
        if (key == "c") {
            key = key.toUpperCase();
        }
        if (key == button.textContent) {
            button.click();
        }
    });
}



// Test modules

//module.exports = add;
//module.exports = subtract;
//module.exports = multiply;
//module.exports = divide;