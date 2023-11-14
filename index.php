<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>My PHP HTML Page</title>
    <link rel="stylesheet" href="style.css">
</head>

<body style="background-color:grey;">

    <div id="calculator">
        <input class="inputfield" type="text" id="display" value="0">
       
        <div>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num1">1</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num2">2</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num3">3</button>
            <button class="calc-button-func" onclick="operate(this)" id="add">+</button>
        </div>
        <div>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num4">4</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num5">5</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num6">6</button>
            <button class="calc-button-func" onclick="operate(this)" id="subtract">-</button>
        </div>
        <div>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num7">7</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num8">8</button>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num9">9</button>
            <button class="calc-button-func" onclick="operate(this)" id="multiply">x</button>
        </div>
        <div>
            <button class="calc-button-num" onclick="appendToNumber(this)" id="num1">0</button>
            <button class="calc-button-func" onclick="appendToNumber(this)" id="num1">,</button>
            <button class="calc-button-func" onclick="clearDisplay()" id="num1">C</button>
            <button class="calc-button-func" onclick="operate(this)" id="divide">/</button>
        </div>
        <div>
            <button class="calc-button-calc" onclick="calculateResult()" id="calc">Calculate</button>
        </div>





        <footer>

        </footer>
        <script src="calculator.js"></script>
     
</body>

</html>