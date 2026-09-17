// =====>  Q  U  E  S  T  I  O  N      1  <=====
// var arr = [[[], [], []], [[], [], []]]
// =====>  Q  U  E  S  T  I  O  N      2  <=====
var arr = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 8]]
document.write(arr[0][0], arr[0][1], arr[0][2], arr[0][3] + "<br>")
document.write(arr[1][0], arr[1][1], arr[1][2], arr[0][3] + "<br>")
document.write(arr[2][0], arr[2][1], arr[2][2], arr[0][3] + "<br>")


// =====>  Q  U  E  S  T  I  O  N      3  <=====
for (var a = 1; a <= 10; a++) {
    document.write(`${a} <br>`)
}
// =====>  Q  U  E  S  T  I  O  N      4  <=====
var user = +prompt("Enter your table number") || 5
var multiply = +prompt("Enter a table length") || 10
for (var table = 1; table <= multiply; table++) {
    document.write(`${user} * ${table} = ${user * table} <br>`)
}
// =====>  Q  U  E  S  T  I  O  N      5  <=====
var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]
document.write(fruits[0] + "<br>")
document.write(fruits[1] + "<br>")
document.write(fruits[2] + "<br>")
document.write(fruits[3] + "<br>")
document.write(fruits[4] + "<br>")
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}
// =====>  Q  U  E  S  T  I  O  N      6  <=====
document.write("<h3>COUNTING</h3>")
for (var i = 1; i <= 15; i++) {
    document.write(i + " , ")
}
document.write("<h3>REVERSE COUNTING</h3>")
for (var i = 15; i >= 15; i--) {
    document.write(i + " , ")

}

document.write("<h3>EVEN</h3>")
for (var i = 0; i <= 20; i += 2) {
    document.write(i + " , ")

}
document.write("<h3>ODD</h3>")
for (var i = 1; i <= 20; i += 2) {
    document.write(i + " , ")

}

document.write("<h3>SERIES</h3>")

for (var i = 0; i <= 20; i += 2) {
    document.write(i + "k" + " , ")

}
document.write("<br>")

// =====>  Q  U  E  S  T  I  O  N      7  <=====
var user = prompt("Welcome to my bakery! What do you want to order sir/ma'am")

var cookies = ["cake", "applepie", "cookies", "chips", "patties"]

var flag = false

for (var i = 0; i < cookies.length; i++) {

    if (user === cookies[i]) {

        flag = true

        document.write(user + " is available at index " + i + " in our bakery")

    }

}

if (flag === false) {

    document.write("We are sorry! " + user + " is not available in our bakery")

}
document.write("<br>")
// =====>  Q  U  E  S  T  I  O  N      8  <=====

var arr = [24, 53, 78, 91, 12]

var largest = arr[0]

for (var i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {

        largest = arr[i]

    }

}
document.write("Array Items : " + arr  + "<br>")

document.write("Largest Number is: " + largest)
document.write("<br>")

// =====>  Q  U  E  S  T  I  O  N      9  <=====

var low = [24, 53, 78, 91, 12]
var lowestNum = low[0]
for (var i = 0; i < low.length; i++) {
    if (low[i] < lowestNum) {
        lowestNum = low[i]

    }
}
document.write("Array Items : " + low + "<br>")
document.write("Lowest Number is: " + lowestNum)
document.write("<br>")

// =====>  Q  U  E  S  T  I  O  N      10  <=====
document.write("<br>")
for (var i = 5; i <= 100; i += 5) {
    document.write(i + " , ")
}