// ===> Q   u   e   s   t   i   o   n     1  <====
var user = prompt("Enter a Character")
var asci = user.charCodeAt(0)
if (asci >= 65 && asci <= 90) {
    document.write(asci + user + " UpperCase")
}
else if (asci >= 97 && asci <= 122) {
    document.write(asci + user + " LowerCase")

}
else if (asci >= 48 && asci <= 57) {
    document.write(asci + user + " Number")
}
document.write("<br>")
// ===> Q   u   e   s   t   i   o   n     2  <====
var firstNum = +prompt("Enter a first Number")
var secNum = +prompt("Enter a Second Number")
if (firstNum > secNum) {
    document.write(firstNum + " is the largest Number")
}
else if (secNum > firstNum) {
    document.write(secNum + " is the largest Number")
}
else { document.write("Both are Equal") }
document.write("<br>")


// ===> Q   u   e   s   t   i   o   n     3  <====

var user = +prompt("Enter a number")
if (user > 0) {
    document.write(user + " Positive Number")
}
else if (user < 0) {
    document.write(user + " Negative Number")
} else {
    document.write("Zero")
}

document.write("<br>")
// ===> Q   u   e   s   t   i   o   n     4  <===
var user = prompt("Enter a Character")

if (user === "a" || user === "A" || user === "e" || user === "E" || user === "i" || user === "I" || user === "o" || user === "O" || user === "u" || user === "U") {
    document.write(user + " TRUE")
}
else {
    document.write(user + " FALSE")
}
document.write("<br>")
// ===> Q   u   e   s   t   i   o   n     5  <====
var correctPass = "Khadija"
var user = prompt("Enter a Password")
if (user === "" || user === null) {
    document.write("Please Enter your Password")
}
else {
    if (user === correctPass) {
        document.write("Correct! The password you entered matches the original password")
    }
    else {
        document.write("Incorrect Password")
    }
}

document.write("<br>")

// ===> Q   u   e   s   t   i   o   n     6  <====
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else { greeting = "Good evening"; }
document.write(greeting);

document.write("<br>")

// ===> Q   u   e   s   t   i   o   n     7  <====
var time = +prompt("Enter time in 24-hour forma")
if (time >= 0 && time < 1200) {
    document.write("Good Morning")
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon")
}

else if (time >= 1700 && time < 2100) {
    document.write("Good Evening")
}
else if (time >= 2100 && time <= 2359) {
    document.write("Good Night")
}

document.write("<br>")

