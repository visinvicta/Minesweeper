let firstNum = '';
let secondNum = '';
let operator = ''; 
let result = 0;

const display = document.getElementById("display");

function appendToNumber(button) {
    if (operator == '') {
        firstNum += button.innerText;
        display.value = firstNum;
    }
    else {
        secondNum += button.innerText;
        display.value = secondNum;
    }
}

function operate(button) {
    if (operator == '') {
        operator = button.id;
        display.value = 0;

    } else if (operator !== '' && firstNum !== '' && secondNum !== '') {
        calculate();
        operator = button.id;

    } else if (firstNum !== '' && secondNum == '') {
        operator = button.id;
    }
}

function calculate() {
    switch (operator) {
        case 'add':
            result = parseFloat(firstNum) + parseFloat(secondNum);
            break;

        case 'subtract':
            result = parseFloat(firstNum) - parseFloat(secondNum);
            break;

        case 'multiply':
            result = parseFloat(firstNum) * parseFloat(secondNum);
            break;

        case 'divide':
            result = parseFloat(firstNum) / parseFloat(secondNum);
            break;
    }
    display.value = result;
    firstNum = result;
    secondNum = '';
}

function clearDisplay() {
    display.value = "0";
    firstNum = '';
    secondNum = '';
    operator = '';

    result = 0;
}

