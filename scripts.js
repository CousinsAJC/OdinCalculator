let firstNum = null;
let operator = null;
let input = null;

let screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

printToScreen("0");

function clearVariables() {
    let firstNum = null;
    let operator = null;
    let input = null;
}

function countDigits(num) {
    const numString = String(Math.abs(num));
    return numString.length;
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



const handleClick = (event) => {
    let keyPressed = event.target.textContent;

    console.log(keyPressed);

    if (keyPressed == "Enter") {
        enterPressed();

    } else if (keyPressed == "C") {
        clearPressed()

    } else if (!isNaN(keyPressed)){
        numberPressed(keyPressed);

    } else if (isNaN(keyPressed)) {
        if (keyPressed == "."){
            decimalPressed(keyPressed);
            
        } else {
            operatorPressed(keyPressed);
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})

function enterPressed() {
    if (operator == null || input == null) {
        //do nothing
    } else {
        if (firstNum != null && input != null && operator != null) {
            firstNum = operate(Number(firstNum), operator, Number(input));
            input = null;
            operator = null;
            printToScreen(firstNum);
            firstNum = null;
        } else {
            clearVariables();
            printToScreen("There seems to be an error.");
            clearVariables;
        }
    }
}





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


function clearPressed() {
    clearVariables();
    printToScreen("0");
}

function numberPressed(keyPressed) {
    //if starting from clear
        if (input == null || input == 0) {
            input = keyPressed
            printToScreen(input);
        //if extending a number (ie 1 becomes 12)    
        } else {
            input = input + keyPressed;
            printToScreen(input);
        }
}

function decimalPressed(keyPressed) {
    if (input == 0 || input == null) {
        if (input.includes(".")) {
            //do nothing
        } else {
            input = ".";
        }
    } else {
        if (input.includes(".")) {
            //do nothing
        } else {
            input = input + keyPressed;
        }
    }
}

function operatorPressed(keyPressed) {
    if (input == null || firstNum == null){
        printToScreen("There seems to be an error.");
        clearVariables();
    }
    if(firstNum == null) {
        operator = keyPressed;
        firstNum = input;
        input = null;
        printToScreen(firstNum + operator);
    } else if (firstNum != null) {
        if (input == null) {
            operator = keyPressed;
        } else {
            firstNum = operate(Number(firstNum), operator, Number(input));
            operator = keyPressed;
            input = null;
            printToScreen(firstNum + " " + operator);
        }
        
    }
}

function printToScreen(a) {
    if (a == "I don't think so!" || a == "There seems to be an error.") {
        screen.style = "font-size:16px;"
        screen.textContent = a;
        clearVariables();
    } else {
        const length = countDigits(a);
        if (length > 8) {
            const newA = a.toFixed(8);
            screen.style = "font-size:24px;";
            screen.textContent = newA;
        }
        else{
            screen.style = "font-size:24px;";
            screen.textContent = a;
        }

    }
    
}



// Test modules

//module.exports = add;
//module.exports = subtract;
//module.exports = multiply;
//module.exports = divide;