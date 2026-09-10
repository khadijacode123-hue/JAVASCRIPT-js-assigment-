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





