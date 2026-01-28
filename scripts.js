let firstNum = null;
let operator = null;
let input = null;

let screen = document.querySelector(".screen");
screen.textContent = "0";

const buttons = document.querySelectorAll(".button");

const handleClick = (event) => {
    console.log(event.target.textContent);

    //If press Enter Button
    if (event.target.textContent == "Enter") {
        if (operator == null || input == null) {
            //do nothing
        } else {
            if (firstNum != null && input != null && operator != null) {
                firstNum = operate(Number(firstNum), operator, Number(input));
                input = null;
                operator = null;
                screen.textContent = firstNum;
            } else {
                screen.textContent = "There seems to be an error.";
                input = null;
                firstNum = null;
                operator = null;
            }
        }

    //If press Clear button
    } else if (event.target.textContent == "C") {
        input = null;
        firstNum = null;
        operator = null;
        screen.textContent = "0";
    
    //If press a number
    } else if (!isNaN(event.target.textContent)){
        //if starting from clear
        if (input == null || input == 0) {
            input = event.target.textContent
            screen.textContent = input
        //if extending a number (ie 1 becomes 12)    
        } else {
            input = input + event.target.textContent;
            screen.textContent = input;
        }

    //If input is an operator
    } else if (isNaN(event.target.textContent)) {
        //If first number is empty
        if(firstNum == null) {
            operator = event.target.textContent;
            firstNum = input;
            input = null;
            screen.textContent = firstNum + operator;
        } else if (firstNum != null) {
            if (input == null) {
                operator = event.target.textContent;
            } else {
                firstNum = operate(Number(firstNum), operator, Number(input));
                operator = event.target.textContent;
                input = null;
                screen.textContent = firstNum + " " + operator;
            }
            
        }
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
    if (num2 == 0) {
        return "I don't think so!";
    }else {
        return num1 / num2;
    }
    
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