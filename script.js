// Add a placeholder text in the HTML with a "0"
    // Create a variable called displayValue to store what should go in the screen

const displayValue = document.querySelector('#display-value');
let value = displayValue.textContent;

console.log(value);

// Create a variable for the first variable, the operator, and the second variable

let n1; // First number

let operator; // Sign

let n2; // Second number

// Create functions for add(), subtract(), multiply(), and divide()

function add() {
    return n1 + n2;
}

function subtract() {
    return n1 - n2;
}

function multiply() {
    return n1 * n2;
}

function divide() {
    // Round answers with long decimals so that they don't overflow the screen
    return n1 / n2;
}

// Add functionality to each button that adds a number into the screen
let newChar;
let numArray1 = [];
let numArray2 = [];
let concatenatedArray1;
let concatenatedArray2
let operatorAlreadyClicked = false;

function concatChar() {
    newChar = event.target.innerText;
    console.log(operatorAlreadyClicked);
    if (operatorAlreadyClicked == false) {
        numArray1.push(newChar);
        concatenatedArray1 = numArray1.join('').toString();
        n1 = parseFloat(concatenatedArray1);
        console.log("n1 is" + concatenatedArray1);
        console.log("n2 is" + concatenatedArray2);
    }
    else if (operatorAlreadyClicked == true) {
        numArray2.push(newChar);
        concatenatedArray2 = numArray2.join('').toString();
        n2 = parseFloat(concatenatedArray2);
        console.log("n1 is" + concatenatedArray1);
        console.log("n2 is" + concatenatedArray2);
    }
}

// Add functionality to clear button
    // MAKE SURE THAT WHEN YOU PRESS CLEAR, LITERALLY EVERYTHING IS CLEARED!! INCLUDING ALL VARIABLES

// Add functionality to backspace button

// Add functionality to operators (no evaluations, just adding to screen)

let newOperator;

function getNewOperator() {
    newOperator = event.target.innerText;
    operatorAlreadyClicked = true;
    decimalAlreadyClicked = false;
    console.log(operatorAlreadyClicked);
    console.log("newOperator =" + " " + newOperator);
}

// Add functionality to decimal 
    // Ensure that decimal becomes invalid when there is already a decimal on the screen 
let decimalAlreadyClicked = false;

function concatDecimal() {
    if (!decimalAlreadyClicked) {
        newChar = '.';
        concatChar();
        decimalAlreadyClicked = true;
    }
    else {
        return;
    }
}

// Add functionality to equal sign 
    // When equal sign is pressed, evaluates expression
    // Create a new operate() function
    // Check the "newOperator" variable
    // This will call on ANOTHER function, one of the mathematical functions you created
    // This will combine the two operands and the operator variables you created before
    // Expression result shows on screen
    // An expression with more than 2 numbers should evaluate the expressions two variables at a time (so forget PEMDAS)
let solution; 

function operate(newOperator) {
    console.log(newOperator);
    console.log(n1);
    console.log(n2);
    if (newOperator === "+") {
        solution = add();
    } else if (newOperator === "−") {
        solution = subtract();
    } else if (newOperator === "×") {
        solution = multiply();
    } else if (newOperator === "÷") {
        // Display error message if user tries to divide by 0
        if (n2 === 0) {
            alert('No dividing by 0!');
        }
        else{
        solution = divide();
        }
    }

    solution = solution.toFixed(4);
    console.log("Solution: " + solution);
}