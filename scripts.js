let firstNum = null;
let operator = null;
let input = null;

let screen = document.querySelector(".screen");
screen.textContent = "0";

const buttons = document.querySelectorAll(".button");

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


buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
})


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

function enterPressed() {
    if (operator == null || input == null) {
        //do nothing
    } else {
        if (firstNum != null && input != null && operator != null) {
            firstNum = operate(Number(firstNum), operator, Number(input));
            input = null;
            operator = null;
            printToScreen(firstNum);
        } else {
            screen.textContent = "There seems to be an error.";
            input = null;
            firstNum = null;
            operator = null;
        }
    }
}

function clearPressed() {
    input = null;
    firstNum = null;
    operator = null;
    screen.textContent = "0";
}

function numberPressed(keyPressed) {
    //if starting from clear
        if (input == null || input == 0) {
            input = keyPressed
            screen.textContent = input
        //if extending a number (ie 1 becomes 12)    
        } else {
            input = input + keyPressed;
            screen.textContent = input;
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
    if(firstNum == null) {
        operator = keyPressed;
        firstNum = input;
        input = null;
        screen.textContent = firstNum + operator;
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
    screen.textContent = a;
}



// Test modules

//module.exports = add;
//module.exports = subtract;
//module.exports = multiply;
//module.exports = divide;