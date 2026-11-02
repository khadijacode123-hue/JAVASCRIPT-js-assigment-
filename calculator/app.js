var display = document.getElementById("display")

var firstNumber;
var secondNumber = "";
var operator;

function addValue(value) {
    display.value = display.value + value

    if (operator) {
        secondNumber = secondNumber + value
    }
}

function clearValue() {
    display.value = ""
    firstNumber = undefined
    secondNumber = ""
    operator = undefined
}

function del() {
    display.value = display.value.slice(0, -1)
}

function plus(value) {
    firstNumber = Number(display.value)
    operator = value
    display.value = display.value + value
}

function equal() {
    secondNumber = Number(secondNumber)

    if (operator === "+") {
        display.value = firstNumber + secondNumber
    }
    else if (operator === "-") {
        display.value = firstNumber - secondNumber
    }
    else if (operator === "*") {
        display.value = firstNumber * secondNumber
    }
    else if (operator === "/") {
        display.value = firstNumber / secondNumber
    } else if (operator === "%") {
        display.value = firstNumber % secondNumber
    }

    operator = undefined
    secondNumber = ""
}