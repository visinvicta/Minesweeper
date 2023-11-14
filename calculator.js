let firstNum = '';
let secondNum = '';
let operator = ''; // add subtract
let result = 0;

const display = document.getElementById("display");

function appendToNumber(button) {
    if (operator == '') {                   
        firstNum += button.innerText;
        display.value = firstNum;
        log();
    }
    else {
        secondNum += button.innerText;      
        display.value = secondNum;
        log();
    }

}

function operate(button) {

    if (operator == '') {
        operator = button.id;
        display.value = 0;

    } else if (operator !== '' && firstNum !== '' && secondNum !== '') {
        intermediateCalc();
        operator = button.id;
        log();
    
    } else if (firstNum !== '' && secondNum == '') {
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
    console.log("aids");
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