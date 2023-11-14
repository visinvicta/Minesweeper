<?php
require('Calculator.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operation = $_POST['operation'];

    $calculator = new Calculator($num1, $num2);

    switch ($operation) {
        case 'add':
            $result = $calculator->add();
            break;
        case 'subtract':
            $result = $calculator->subtract();
            break;
        case 'multiply':
            $result = $calculator->multiply();
            break;
        case 'divide':
            $result = $calculator->divide();
            break;
        default:
            $result = "Invalid operation";
    }

    echo $result;

}
?>