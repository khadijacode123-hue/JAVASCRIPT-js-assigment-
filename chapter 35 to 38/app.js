// ===> Q  u  e  s  t  i  o  n   1 <===

// function fun() {
//     var date = new Date()
//     var time = date.getHours() + " : " + date.getMinutes()
//     document.write(date + " <br> " + time)

// }
// fun()

// ===> Q  u  e  s  t  i  o  n   2 <===

// function user(firstName, LastName) {

//     var first = prompt("Enter your first Name")
//     var Last = prompt("Enter your Last Name")
//     document.write("Welcome " + first + " " + Last + "<br>")
// }
// user()

// function user(firstName, LastName) {

//     document.write("Welcome " + firstName + " " + LastName + "<br>")
// }
// var first = prompt("Enter your first Name")
// var Last = prompt("Enter your Last Name")
// user(first, Last)


// ===> Q  u  e  s  t  i  o  n   3 <===

// function sum(add1, add2) {
//     var res = add1 + add2
//     return res
// }
// var ad1 = +prompt("Enter first a value")
// var ad2 = +prompt("Enter a second value")
// document.write("Sum: " + ad1 + " + " + ad2 + " = " +sum(ad1, ad2))

// ===> Q  u  e  s  t  i  o  n   4 <===

// function calculation(num1, operation, num2) {
//     if (operation === "+") {
//         var res = num1 + num2
//     }
//     if (operation === "-") {
//         var res = num1 - num2
//     } if (operation === "*") {
//         var res = num1 * num2
//     } if (operation === "/") {
//         var res = num1 / num2
//     }
//     return res
// }
// var number1 = + prompt("Enter a number")
// var op = prompt("Enter a Operator")
// var number2 = + prompt("Enter a number")

// document.write("Calculator : " + number1 + " " + op + " " + number2 + " = " + calculation(number1, op, number2))


// ===> Q  u  e  s  t  i  o  n   5 <===

// function square(user) {

//     var res = user * user
//     return res

// }
// var user = prompt("Enter a number")
// document.write(`${user} square is  ${square(user)}`)

// ===> Q  u  e  s  t  i  o  n   6 <===

// function factorial(user) {
//     var res = 1
//     for (var i = user; i >= 1; i--) {
//         res = res * i
//         document.write(i)
//         if (i > 1) {
//             document.write(" * ")
//         }
//     }
//     document.write(" = " + res)
//     return res

// }
// var user = +prompt("Enter a number :")
// document.write(`${factorial(user)}`)

// ===> Q  u  e  s  t  i  o  n   7 <===

// function numbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + " <br>")
//     }
// }
// var start = +prompt("Enter a start counting number ")
// var end = +prompt("Enter a end counting number ")
// numbers(start, end)

// ===> Q  u  e  s  t  i  o  n   8 <===

// function hypothenius(base, perpandicular) {
//     function square(base, perpandicular) {
//         var baseSquare = base * base
//         var perSquare = perpandicular * perpandicular
//         var res = baseSquare + perSquare
//         return res
//     }
//     res = square(base, perpandicular)
//     return Math.sqrt(res)
// }
// var base = +prompt("Enter a base")
// var perpandicular = +prompt("Enter a  perpandicular")
// document.write(hypothenius(base, perpandicular))


// ===> Q  u  e  s  t  i  o  n   9 <===

// function rectangle(width, height) {
//     var a = width * height
//     return a
// }
// var user1 = +prompt("Enter a width")
// var user2 = +prompt("Enter a  height")
// document.write(rectangle(user1, user2))

// function rectangle(width, height) {
//     var a = width * height
//     return a

// }
// document.write(rectangle(12, 8))

// ===> Q  u  e  s  t  i  o  n   10 <===
// function palindrome(user) {
//     var loopWord = ""

//     for (var i = user.length - 1; i >= 0; i--) {
//         loopWord = loopWord + user[i]
//     }

//     if (user === loopWord) {
//         document.write("This is palindrome word")
//     } else {
//         document.write("Invalid word")
//     }
// }

// var word = prompt("Enter a palindrome")
// palindrome(word)

// ===> Q  u  e  s  t  i  o  n   11 <===

// function titleCase(sentence) {

//     var sentence = sentence.split(" ")
//     var word =[]
//     for (var i = 0; i < sentence.length; i++) {
//         var word = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1).toLowerCase()
//         word.push(word)

//     }
//     var complete = word.join(" ")
//     return complete


// }
// var user = prompt("Enter a sentences")
// document.write(titleCase(user))

// ===> Q  u  e  s  t  i  o  n   12 <===

// function longest(sentence) {
//     var splited = sentence.split(" ")
//     var firstWord = splited[0]
//     for (var i = 0; i < splited.length; i++) {
//         if (firstWord.length < splited[i].length) {
//             firstWord = splited[i]
//         }
//     }
//     return firstWord
// }
// var user = prompt("ENter a word")
// document.write(longest(user))

// ===> Q  u  e  s  t  i  o  n   13 <===

// function counting(user, word) {
//     var counter = 0
//     for (var i = 0; i < user.length; i++) {
//         if (user[i] === word) {
//             counter++

//         }
//     }
//     return counter

// }
// var user = prompt("Enter a sentence")
// var word = prompt("Enter a word")
// document.write(counting(user, word))



// ===> Q  u  e  s  t  i  o  n   14 <===
// function calcircumfrence(radius) {
//     var formula = 2 * Math.PI * radius
//     return formula
// }
// var user = prompt("Enter Radius")
// document.write("The Circumferences is " + calcircumfrence(user) + "<br>")




// function calcArea(radius) {
//     var formula = Math.PI * radius * radius
//     return formula
// }
// var user = prompt("Enter Radius")
// document.write("The area is " + calcArea(user) + "<br>")
