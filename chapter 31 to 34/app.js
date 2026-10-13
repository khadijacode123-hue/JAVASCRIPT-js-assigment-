// ===> Q u e s t i o n  1 <===

// var today = new Date()
// document.write(today + "<br>")

// ===> Q u e s t i o n  2 <===
// var today = new Date()
// var months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]
// var currentMonth = today.getMonth()
// var resMonth = months[currentMonth]
// document.write(resMonth + "<br>")

// ===> Q u e s t i o n  3 <===

// var today = new Date()
// var str =  today.toString()
// var copy = str.slice(0,3)
// console.log(copy)
// document.write(`${copy}`)

// var today = new Date()
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var days = today.getDay()
// var res = dayName[days]
// console.log(dayName[days])
// document.write(`Today is ${res} <br>`)

// ===> Q u e s t i o n  4 <===
// var today = new Date()
// var day = today.getDay()
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// if (day === 0 || day === 6) {
//     document.write(dayName[day] + " Its fun day <br>")
// }

// var user = +prompt("Enter a day number 0 or 6")
// var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// if(user === 0 || user ===6){
//     document.write(`${dayName[user]} Its fun day <br>`)
// }


// ===> Q u e s t i o n  5 <===
// var todayDate = new Date()
// var dates = todayDate.getDate()
// if (dates >= 1 && dates <= 15){
//     document.write(`First fifteen days of the month <br>`)
// }
// else if (dates >= 16 && dates<= 31){
//     document.write(`Last  days of the month <br>`)
// }

// var today = new Date()
// var dates = today.getDate()
// if (dates < 16) {
//     document.write(`First fifteen days of the month <br>`)

// }
// else {
//     document.write(`Last  days of the month <br>`)

// }

// ===> Q u e s t i o n  6 <===

// var today = new Date()
// var oldDate = new Date("1 January 1970")

// var seconds = today.getTime()
// var minutes = seconds / (1000 * 60)


// document.write(`Current Date: ${today} <br>`)
// document.write(`Elapsed milliseconds since January 1, 1970: ${seconds} <br>`)
// document.write(`Elapsed minutes since January 1, 1970: ${minutes}`)

// ===> Q u e s t i o n  7 <===

// var datee = new Date()
// var hours = datee.getHours()
// if (hours < 12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }
// //  second method
// var today = new Date()
// var hour = today.getHours()
// var min = today.getMinutes()
// var sec = today.getSeconds()
// var ampm = 'am'
// if (hour === 0) {
//     hour = 12

// }
// else if (hour === 12) {
//     ampm = 'pm'
// }
// else if (hour > 12) {
//     hour = hour - 12
//     ampm = 'pm'
// }

// document.write(`Current Time : ${hour} : ${min} : ${sec} ${ampm}`)

// ===> Q u e s t i o n  8 <===

// var later = new Date("2020, 11, 31")
// document.write(`Later Date : ${later}`)

// ===> Q u e s t i o n  9 <===

// var today = new Date()
// var ramadan = new Date("June 18, 2015")
// var mil1 = today.getTime()
// var mil2 = ramadan.getTime()
// var res = mil1 - mil2
// var diff = Math.floor(res / (1000 * 60 * 60 * 24))
// document.write(`${diff} days have passed since 1st Ramadan,2015`)

// ===> Q u e s t i o n  10 <===


// var date = new Date()
// var date1 = new Date("January 1, 2015")

// var date1mil = date.getTime()
// var date2mil = date1.getTime()

// var minus = date1mil - date2mil

// var dif = Math.floor(minus / 1000)
// document.write(`On reference date ${date}, ${dif} seconds had passed since beginning of 2015`)


// ===> Q u e s t i o n  11 <===

// var today = new Date()
// today.setHours(today.getHours() + 1)
// var hour = today.getHours()
// if (hour > 12) {
//     hour = hour - 12
// }
// else if (hour === 0) {
//     hour = 12
// }
// document.write(hour)

// var today = new Date()
// var set = today.getTime() + (1000 * 60 * 60)
// today.setTime(set)
// var hours = today.getHours()
// document.write(hours)

// // ===> Q u e s t i o n  12 <===

// var current = new Date()
// var today = new Date()
// var year = today.getFullYear() - 100
// today.setFullYear(year)
// alert("Current Date : " + current + "\n 100 Years Back : " + today)

// ===> Q u e s t i o n  13 <===

// var today = new Date()
// var cur = today.getFullYear()
// var user = prompt("ENter your Age")
// var minus = cur - user
// document.write("your age is " + minus +"<br>")
// document.write(`Your Birth Year is ${user} <br>`)


// ===> Q u e s t i o n  14 <===

// var customer = prompt("Enter your name ")
// var month = new Date().getMonth() + 1
// var units = +prompt("Enter your Unit")
// var perUnit = 16
// var netAmount = units * perUnit
// var latePay = 350
// var Gross = netAmount + latePay


// document.write(`
// <h1>K-Electric Bill!</h1> <br>
// <b>Customer Name : </b> ${customer} <br>
// <b>Month : </b> ${month} <br>
// <b>Number of Units : </b> ${units} <br>
// <b>Charges per Unit : </b> ${perUnit} <br>
// <b>Net Amount Payble (within Due Date) : </b> ${netAmount.toFixed(2)} <br>
// <b>Late Payment SurCharge : </b> ${latePay} <br>
// <b>Gross Amount Payble (after Due Date) : </b> ${Gross.toFixed(2)} <br>
// `)