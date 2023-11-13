let firstNum = '';
let secondNum = '';
let operator = '';
let result = 0;

const display = document.getElementById("display")

function appendToNumber(button) {
    if (operator == '') {                   //if operator is emtpy, input is firstnum
        firstNum += button.innerText;
        display.value = firstNum;
        log();
    }
    else {
        secondNum += button.innerText;      // else (if operator is filled), input is secondnum
        display.value = secondNum;
        log();
    }
    
}

function operate(button) {
    if (operator == '') {
        operator = button.id;
        display.value = 0;
        log();
    }
    else {
        intermediateCalc();
        operator = button.id;
        log();
    }
}

function calculateResult() {
    switch (operator) {
        case 'add':
            result = parseInt(firstNum) + parseInt(secondNum);
            break;

        case 'subtract':
            result = parseInt(firstNum) - parseInt(secondNum);
            break;

        case 'multiply':
            result = parseInt(firstNum) * parseInt(secondNum);
            break;

        case 'divide':
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
    }
    log();

    display.value = result;

    firstNum = '';
    secondNum = '';
    operator = '';
    result = 0;
}   

function intermediateCalc() {
    switch (operator) {
        case 'add':
            result = parseInt(firstNum) + parseInt(secondNum);
            break;

        case 'subtract':
            result = parseInt(firstNum) - parseInt(secondNum);
            break;

        case 'multiply':
            result = parseInt(firstNum) * parseInt(secondNum);
            break;

        case 'divide':
            result = parseInt(firstNum) / parseInt(secondNum);
            break;
    }
    

    display.value = result;
    firstNum = result;
    secondNum = '';
    log();
}   


function clearDisplay() {
    display.value = "0";
    firstNum = '';
    secondNum = '';
    operator = '';
    result = 0;
    log();
}


function log() {
    console.log("num1:", firstNum, "num2:", secondNum, "operator:", operator, "result:", result, "display:", display.value);
}