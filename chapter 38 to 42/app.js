// ==> Q u e s t i o n  1 <==
// function power(a, b) {
//     var res = 1
//     for (var i = 0; i < b; i++) {
//         res = a * res
//     }
//     return res
// }
// var userA = +prompt("Enter a number")
// var userB = +prompt("Enter a number")
// document.write(power(userA, userB))

// ==> Q u e s t i o n  2 <==

// function leapYear(user) {
//     if (user % 400 === 0) {
//         document.write(" Leap year")

//     } else if (user % 100 === 0) {
//         document.write("Not Leap year")
//     }
//     else if (user % 4 === 0) {
//         document.write("Leap year")
//     }
//     else {
//         document.write("Not leap year")
//     }
// }
// var user = +prompt("Enter a year")
// leapYear(user)

// function leapYear(user) {
//     switch (true) {
//         case (user % 400 === 0):
//             document.write(" Leap year")
//             break;
//         case (user % 100 === 0):
//             document.write("Not Leap year")
//             break;
//         case (user % 4 === 0):
//             document.write(" Leap year")
//             break;
//         default:
//             document.write("Not leap year")

//     }
// }
// var user = +prompt("Enter a year")
// leapYear(user)
// ==> Q u e s t i o n  3 <==

// function triangle(a, b, c) {

//     var S = (a + b + c) / 2
//     var area = S * (S - a) * (S - b) * (S - c)
//     var root = Math.sqrt(area)
//     return root
// }
// var aUser = +prompt("Enter a triangle length 1 side")
// var bUser = +prompt("Enter a triangle length 2 side")
// var cUser = +prompt("Enter a triangle length 3 side")

// document.write(triangle(aUser, bUser, cUser))


// ==> Q u e s t i o n  4 <==

// function main(english, urdu, math) {
//     function average() {
//         var ave = (english + urdu + math) / 3
//         return ave

//     }
//     var a = average()
//     document.write(`Average : ${a} <br>`)
//     function percanatge() {
//         var sum = english + urdu + math
//         var total = 300
//         var per = sum / total * 100
//         return per
//     }
//     var p = percanatge()
//     document.write(`Percantage : ${p} <br>`)

// }

// var subject1 = Number(prompt("Enter a English marks"))
// var subject2 = Number(prompt("Enter a Urdu marks"))
// var subject3 = Number(prompt("Enter a Math marks"))
// main(subject1, subject2, subject3)

// ==> Q u e s t i o n  5 <==

// function mineIndexGet(user, character) {
//     var flag = false
//     for (var i = 0; i < user.length; i++) {
//         if (user[i] ===character) {
//             flag =true
//             return i
//         } 
//     }
//    if(flag === false){
//         return -1
//     }

// }
// var user = prompt("Enter a word")
// var character = prompt("Enter a word")
// document.write(mineIndexGet(user, character))

// ==> Q u e s t i o n  6 <==

// function sentence(sen) {
//     if (sen.length > 25) {
//         return "Invalid only 25 character sentence allowed "
//     } else {
//        var result = ""
//         for (var i = 0; i < sen.length; i++) {
//             if (sen[i] !== "a" && sen[i] !== "e" && sen[i] !== "i" && sen[i] !== "o" && sen[i] !== "u") {
//                 result = result + sene[i]
//             }
//         }
//         return result
//     }

// }
// var user = prompt("Enter a sentence")
// document.write(sentence(user))

// ==> Q u e s t i o n  7 <==

// function countVowelPairs() {
//     var user = prompt("Enter sentence");
//     var count = 0;

//     for (var i = 0; i < user.length - 1; i++) {
//         switch (user[i] + user[i + 1]) {
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "aa":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 document.write(user[i] +user[i+1] + "<br>")
//                 break;
//         }
//     }

//     document.write(user + " Total vowel pairs: " +  count);
// }

// countVowelPairs();


// ==> Q u e s t i o n  8 <==


// function diffrenceCities(km) {
//     document.write("Distance: " + km + " kilometers<br>")

//     function meters(km) {
//         var meters = km * 1000
//         return meters + " meters"
//     }
//     document.write(meters(km) + "<br>")

//     function feet(km) {
//         var feet = km * 3280.84
//         return feet + " feet"
//     }
//     document.write(feet(km) + "<br>")

//     function inches(km) {
//         var inches = km * 39370.08
//         return inches + " inches"
//     }
//     document.write(inches(km) + "<br>")

//     function centimeters(km) {
//         var centimeters = km * 100000
//         return centimeters + " centimeters"
//     }
//     document.write(centimeters(km) + "<br>")
// }

// var user = +prompt("Enter distance between two cities in kilometers:")
// diffrenceCities(user)


// ==> Q u e s t i o n  9 <==

// function overtimePay(totalHours) {
//     var hours = 40
//     var overTime = 12

//     if (totalHours > hours) {
//         var minus = totalHours - hours
//         var res = minus * overTime
//         document.write("Your overtime income is Rs. " + res)
//     } else {
//         document.write("Your overtime income is Rs. 0")
//     }
// }

// var totalHours = Number(prompt("Enter total hours"))
// overtimePay(totalHours)

// // ==> Q u e s t i o n  10 <==

// var withdraw = +prompt("Enter withdraw amount")
// var hundred = Math.floor(withdraw / 100)
// var hundredamount = withdraw % 100
// var fifty = Math.floor(hundredamount / 50)
// var fiftyamount = hundredamount % 50
// var ten = Math.floor(fiftyamount / 10)
// var tenamount = fiftyamount % 10


// document.write(withdraw + "Rs You will have " + hundred + " hundreds notes " + fifty + " Fifty notes " +  ten + " Ten notes ." )