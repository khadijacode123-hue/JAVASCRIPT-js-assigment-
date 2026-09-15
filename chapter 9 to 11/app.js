// ====> Q  u   e   s   t   i   o  n    1 <====
var user = prompt("Enter a city name?")
if (user == "Karachi") {
    document.write("Welcome to city of lights" + user + "<br>")
}

// ====> Q  u   e   s   t   i   o  n    2 <====
var user = prompt("Enter your Gender")
if (user == "male") {
    document.write("Good Morning Sir!" + "<br>")
}
if (user == "female") {
    document.write("Good Morning Ma'am!" + "<br>")
}
// ====> Q  u   e   s   t   i   o  n    3 <====
var user = prompt("Enter color of traffic signal")
if (user == "red") {
    document.write("Must Stop" + "<br>")
}
if (user == "yellow") {
    document.write("Ready to Move" + "<br>")
}
if (user == "green") {
    document.write("Move Now" + "<br>")
}
// ====> Q  u   e   s   t   i   o  n    4 <====
var user = prompt("how fuel in your car")
if (user < 0.25) {
    document.write("Please refill the fuel in your car <br>")
}
// ====> Q  u   e   s   t   i   o  n    5 (a) <====// 
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// Answer = true

// ====> Q  u   e   s   t   i   o  n    5 (b) <====
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// Answer = false

// ====> Q  u   e   s   t   i   o  n    5 (c) <====
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
// Answer = false

if (c === 13) {
    alert("condition 2 is true");
}
// Answer = true

if (++c < 14) {
    alert("condition 3 is true");
}
// Answer = false

if (c === 14) {
    alert("condition 4 is true");
}
// Answer = true


// ====> Q  u   e   s   t   i   o  n    5 (d) <====
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// Answer = true


// ====> Q  u   e   s   t   i   o  n    5 (e) <====
if (true) {
    alert("True");
}
// Answer = true
if (false) {
    alert("False");
}
// Answer = false

// ====> Q  u   e   s   t   i   o  n    5 (f) <====
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Answer = true


// ====> Q  u   e   s   t   i   o  n    6 <====
var totalMarks = 300;
var obtainedMarks = +prompt("Enter your obtained marks");
var percentage = obtainedMarks / totalMarks * 100;
document.write("<h1>Marks Sheet</h1>")
document.write(`Total Marks: ${totalMarks} <br>`);
document.write(`Marks Obtained: ${obtainedMarks} <br>`);
document.write(`Percentage: ${percentage}% <br>`);

if (percentage >= 80) {
    document.write("Grade: A-One <br> Remarks: Excellent!");
} else if (percentage >= 70) {
    document.write("Grade: A <br> Remarks: Good!");
} else if (percentage >= 60) {
    document.write("Grade: B <br> Remarks: You Need to Improve!");
} else {
    document.write("Grade: Fail <br> Remarks: Sorry!");
}
document.write("<br>")
// ====> Q  u   e   s   t   i   o  n    7 <====
var secretNum = 5
var guessNum = +prompt("Guess Secret Number")
if (secretNum === guessNum) {
    document.write("Bingo ! Correct Answer")
}
else if (guessNum + 1 === secretNum) {
    document.write("Close Enough to Correct Answer")
}
else {
    document.write("Sorry ! Try Again")
}
document.write("<br>")
// ====> Q  u   e   s   t   i   o  n    8 <====
var user = +prompt("Enter a number to check divisibility by 3 ")
var userNum = user % 3
if (userNum === 0) {
    document.write(`Number is Divisible 3`)
}
else {
    document.write(`Number is not Divisible 3`)

}
document.write("<br>")

// ====> Q  u   e   s   t   i   o  n    9 <====


var user = +prompt("Enter a number");

var num = user % 2;

if (num === 0) {
    document.write(`${user} is an Even Number`);
} else {
    document.write(`${user} is an Odd Number`);
}

// ====> Q  u   e   s   t   i   o  n    10 <====
var user = +prompt("Enter Current Weather")
if (user > 40) {
    document.write("It is too hot outside.")
}
else if (user > 30) {
    document.write("The Weather today is Normal.")
}
else if (user > 20) {
    document.write("Today's Weather is cool.")
}
else if (user > 10) {
    document.write("OMG! Today's weather is so Cool.")
}
// ====> Q  u   e   s   t   i   o  n    11 <====

var firstNumber = +prompt("Enter a first number");
var secondNumber = +prompt("Enter a second number");
var operation = prompt("Enter operation (+, -, *, /, %)");

if (operation === "+") {
    document.write(`First Number: ${firstNumber} <br>`);
    document.write(`Second Number: ${secondNumber} <br>`);
    document.write(`Operation: Addition <br>`);
    document.write(`Result: ${firstNumber + secondNumber}`);
}

else if (operation === "-") {
    document.write(`First Number: ${firstNumber} <br>`);
    document.write(`Second Number: ${secondNumber} <br>`);
    document.write(`Operation: Subtraction <br>`);
    document.write(`Result: ${firstNumber - secondNumber}`);
}

else if (operation === "*") {
    document.write(`First Number: ${firstNumber} <br>`);
    document.write(`Second Number: ${secondNumber} <br>`);
    document.write(`Operation: Multiplication <br>`);
    document.write(`Result: ${firstNumber * secondNumber}`);
}

else if (operation === "/") {
    document.write(`First Number: ${firstNumber} <br>`);
    document.write(`Second Number: ${secondNumber} <br>`);
    document.write(`Operation: Division <br>`);
    document.write(`Result: ${firstNumber / secondNumber}`);
}

else if (operation === "%") {
    document.write(`First Number: ${firstNumber} <br>`);
    document.write(`Second Number: ${secondNumber} <br>`);
    document.write(`Operation: Modulus <br>`);
    document.write(`Result: ${firstNumber % secondNumber}`);
}

else {
    document.write("Invalid Operation");
}

