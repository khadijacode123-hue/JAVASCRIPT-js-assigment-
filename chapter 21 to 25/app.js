// ===>  Q   U   E   S   T   I   O   N     1 <===

// var firstName = prompt("Enter first name")
// var lastName = prompt("Enter last name")
// fullName = firstName + " " + lastName
// document.write(`Welcome <b> ${fullName} </b> <br>`)

// ===>  Q   U   E   S   T   I   O   N     2 <===

// var user = prompt('Enter your favorite phone')
// var mblLength = user.length
// document.write(`My favorite phone is <b> ${user} </b> <br> Length of string is <b> ${mblLength} </b> <br>`)


// ===>  Q   U   E   S   T   I   O   N     3 <===

// var word = "Pakistani"
// var wordFind = word.indexOf("n")
// document.write(`String : ${word} <br> Index of "n" is : ${wordFind} <br>`)

// ===>  Q   U   E   S   T   I   O   N     4 <===

// var word = "Hello World "
// var wordFindLast = word.lastIndexOf("l")
// document.write(`String : ${word} <br> Index of 'l' is : ${wordFindLast} <br>`)

// ===>  Q   U   E   S   T   I   O   N     5 <===

// var char = "Pakistani"
// var charIndex = char.charAt(3)
// document.write(`String  : ${char} <br> Character at Index 3 is :  ${charIndex}`)

// ===>  Q   U   E   S   T   I   O   N     6 <===

// var firstName = "Kahdija"
// var lastName = "Ali"
// var fullName = firstName.concat(" ", lastName)
// document.write(fullName + "<br>")


// ===>  Q   U   E   S   T   I   O   N     7 <===

// var city = "Hyderabad"
// var cityReplace = city.replace("Hyder","Islam")
// document.write(`City : ${city} <br> After Replacement : ${cityReplace} <br>`)

// ===>  Q   U   E   S   T   I   O   N     8 <===

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var messageReplace = message.replaceAll("and", "&")
// document.write(`Message and : ${message} <br> Message & : ${messageReplace}<br>`)

// var message = "Ali and Sami are best friends. They play cricket and football together"
// var messageReplace = message.replace(/and/g, "&")
// document.write(`Message and : ${message} <br> Message & : ${messageReplace} <br>`)

// ===>  Q   U   E   S   T   I   O   N     9 <===

// var stringNum = "472"
// var stringNumType = typeof stringNum
// document.write(`Value : ${stringNum} <br> Type: ${stringNumType} <br>`)
// var stringNumber = Number(stringNum)
// var stringNumberType = typeof stringNumber
// document.write(`Value : ${stringNumber} <br> Type: ${stringNumberType} <br>`)




// ===>  Q   U   E   S   T   I   O   N     10 <===

// var capitalNumber = prompt("Enter a word")
// var capitalNumberCon = capitalNumber.toUpperCase()
// document.write(`User Input : ${capitalNumber} <br> Upper Case : ${capitalNumberCon} <br>`)

// ===>  Q   U   E   S   T   I   O   N     11 <===

// var userInput = prompt("Enter a sentence")

// var word = userInput.toLowerCase().split(" ")

// for (var i = 0; i < word.length; i++) {
//     word[i] = word[i][0].toUpperCase() + word[i].slice(1)
// }

// var titleCase = word.join(" ")

// document.write(`${titleCase} <br>`)

// // ===>  Q   U   E   S   T   I   O   N     12 <===

// var num = 35.36
// var numCon = String(num)
// var result = numCon.replace(".", "")
// document.write("Number :" + num + "<br>Result : " + result + "<br>")

// ===>  Q   U   E   S   T   I   O   N     13 <===
// var user = prompt('Enter a username ')
// var flag = false
// for (var i = 0; i < user.length; i++) {
//     if (user[i] === "@" || user[i] === "." || user[i] === "," || user[i] === "!") {
//         flag = true

//     }
// }
// if (flag === true) {
//     document.write(`Please Enter a valid username <br> `)
// }
// else {
//     document.write(`Valid Username `)
// }

// A  S  C  i    M e t h o d

// var asci = prompt("Enter a username")
// var flag = false

// for (var i = 0; i < asci.length; i++) {

//     var code = asci[i].charCodeAt(0)

//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         flag = true
//     }
// }

// if (flag === true) {
//     document.write(`Please Enter a valid username <br>`)
// }
// else {
//     document.write(`Valid Username`)
// }

// ===>  Q   U   E   S   T   I   O   N     14 <===

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var user = prompt("Enter a bakery items")
// var flag = false
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === user.toLowerCase()) {

//         flag = true
//     }
// }
// if (flag === true) {
//     document.write(user + "  is avaiable in our bakery")
// }
// else {
//     document.write(user + "  is  not avaiable in our bakery")

// }


// ===>  Q   U   E   S   T   I   O   N     15 <===

// var pass = prompt("Enter your password")
// var hasAlpha = false
// var hasNum = false
// var hasStartNum = false
// for (var i = 0; i < pass.length; i++) {
//     password = pass[i].charCodeAt(0)
//     if ((password >= 65 && password <= 90) || (password >= 97 && password <= 122)) {
//         hasAlpha = true

//     }
//     if (password >= 48 && password <= 57) {
//         hasNum = true
//     }

// }
// if (pass[0].charCodeAt(0) >= 48 && pass[0].charCodeAt(0) <= 57) {
//    hasStartNum = true

// }
// if (pass.length < 6) {
//     alert("It must at least 6 characters long")
// }
// if (!hasAlpha) {
//     alert("Alphabets must contain in password")
// }
// if (!hasNum) {
//     alert("Numbers must contain in password")
// }
// if (hasStartNum) {
//     alert("It should not start with a number")
// }

// ===>  Q   U   E   S   T   I   O   N     16 <===

// var arr = "University of Karachi"
// var arrSplit = arr.split("")
// for (var i = 0; i < arrSplit.length; i++) {
//     document.write(arrSplit[i] + "<br>")

// }

// ===>  Q   U   E   S   T   I   O   N     17 <===


// var user = prompt("Enter a Character")
// var userInp = user[user.length - 1]
// document.write(`User Input : ${user} <br> Last Character of Input : ${userInp} <br>`)


// // ===>  Q   U   E   S   T   I   O   N     18 <===


// var sentence = "the quick brown fox jumps the over the lazy dog"
// var senSplit = sentence.toLowerCase().split(" ")
// var count = 0
// for (var i = 0; i < senSplit.length; i++) {

//     if (senSplit[i] === "the") {
//         count++
//         document.write(`TExt : ${sentence} <br>There are ${count} occurance of word 'the'`)
//     }
// }

// document.write(`Text : ${sentence} <br>There are ${count} occurance of word 'the'`)

