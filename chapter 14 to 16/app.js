// ===>Q   u   e   s   t   i   o   n     1 <====
var arr = []
console.log(arr);
// ===>Q   u   e   s   t   i   o   n     2 <====
var arr2 = new Array()
console.log(arr2);

// ===>Q   u   e   s   t   i   o   n     3 <====
var stringArr = ["Apple", "Banana ", "Mango"]
console.log(stringArr);
// ===>Q   u   e   s   t   i   o   n     4 <====
var numberArr = [1, 2, 3, 4, 5, 6]
console.log(numberArr);
// ===>Q   u   e   s   t   i   o   n     5 <====
var booleanArr = [true, false]
console.log(booleanArr);
// ===>Q   u   e   s   t   i   o   n     6 <====
var mixArr = ["Khadija", true, "787", 10, "Ali"]
console.log(mixArr);
// ===>Q   u   e   s   t   i   o   n     7 <====
var pakEducation = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M Phil", "PhD"];

document.write(pakEducation[0] + "<br>");
document.write(pakEducation[1] + "<br>");
document.write(pakEducation[2] + "<br>");
document.write(pakEducation[3] + "<br>");
document.write(pakEducation[4] + "<br>");
document.write(pakEducation[5] + "<br>");
document.write(pakEducation[6] + "<br>");
document.write(pakEducation[7] + "<br>");

// ===>Q   u   e   s   t   i   o   n     8 <====
var studentName = ["Michael", "john", "Tony"]
var studentScore = [320, 230, 480]
document.write(`Score of" ${studentName[0]} is ${studentScore[0]}. Percantage :  ${studentScore[0] / 500 * 100} % <br>`)
document.write(`Score of" ${studentName[1]} is ${studentScore[1]}. Percantage :  ${studentScore[1] / 500 * 100} % <br>`)
document.write(`Score of" ${studentName[2]} is ${studentScore[2]}. Percantage :  ${studentScore[2] / 500 * 100} % <br>`)


// =====> Q  U  E  S   T  I  O  N  ___   9 <=====
var colors = ["Red", "Green", "Blue"]

// =====> Q  U  E  S   T  I  O  N  ___   9(a) <=====
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(b) <=====
var user = prompt("which color add in beginnings?")
colors.unshift(user)
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(c) <=====
var user = prompt("Which color add in your ends?")
colors.push(user)
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(d) <=====
colors.unshift("Olive", "Black")
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(e) <=====
colors.shift()
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(f) <=====
colors.pop()
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(g) <=====
var userIndex = +prompt("Which color add index positions")
var userAdd = prompt("Which Color add ?")
colors.splice(userIndex, 0, userAdd)
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9(h) <=====

var userIndex = +prompt("Which color delete index positions")
var userDlt = +prompt("kitny color delete kerny hein?")
colors.splice(userIndex, userDlt)
document.write(colors + "<br>")


// ===>Q   u   e   s   t   i   o   n     10 <====
var studentScore = [320, 230, 480, 120]
document.write(`Scores of Students : ${studentScore} <br>`)
studentScore.sort()
document.write(`Ordered Scores of Students : ${studentScore} <br>`)

// ===>Q   u   e   s   t   i   o   n     11 <====
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
document.write(`Cities List : <br> ${cities} <br>`)
var selectedCities = cities.slice(2, 4)
document.write(`Selected cities list : <br> ${selectedCities} <br>`)

// ===>Q   u   e   s   t   i   o   n     12 <====
var cat = ["This", "is", "my", "Cat"]
document.write(`Array : <br> ${cat} <br>`)
var catJoin = cat.join("  ")
document.write(`String : <br> ${catJoin}`)


// ===>Q   u   e   s   t   i   o   n     13 <====

// ===>Q   u   e   s   t   i   o   n     14 <====

// ===>Q   u   e   s   t   i   o   n     15 <====







