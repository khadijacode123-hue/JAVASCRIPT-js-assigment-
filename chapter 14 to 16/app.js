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



// =====> Q  U  E  S   T  I  O  N  ___   1 <=====
var colors = ["Red", "Green", "Blue"]
// =====> Q  U  E  S   T  I  O  N  ___   2 <=====
document.write(colors + "<br>")
// =====> Q  U  E  S   T  I  O  N  ___   3 <=====
var user = prompt("which color add in beginnings?")
colors.unshift(user)
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   4 <=====
var user = prompt("Which color add in your ends?")
colors.push(user)
document.write(colors + "<br>")
// =====> Q  U  E  S   T  I  O  N  ___   5 <=====
colors.unshift("Olive", "Black")
document.write(colors + "<br>")
// =====> Q  U  E  S   T  I  O  N  ___   6 <=====
colors.shift()
document.write(colors + "<br>")
// =====> Q  U  E  S   T  I  O  N  ___   7 <=====
colors.pop()
document.write(colors + "<br>")
// =====> Q  U  E  S   T  I  O  N  ___   8 <=====
var userIndex = prompt("Which color add index positions")
var userAdd = prompt("Which Color add ?")
colors.splice(userIndex, 0, userAdd)
document.write(colors + "<br>")

// =====> Q  U  E  S   T  I  O  N  ___   9 <=====

var userIndex = prompt("Which color delete index positions")
var userDlt = prompt("kitny color delete kerny hein?")
colors.splice(userIndex, userDlt)
document.write(colors + "<br>")





