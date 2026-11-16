//  Q u e s t i o n   1  

// var mainContent = document.getElementById("main-content")
// console.log(mainContent.children)
// var render = document.getElementsByClassName("render")
// for (var i = 0; i < render.length; i++) {
//     console.log(render[i].innerHTML)
//     console.log(render[i])

// }
// var firstName = document.getElementById("first-name").value ="Khadija"
// var lastName = document.getElementById("last-name").value ="Ali"
// var email = document.getElementById("email").value ="khadija.code123@gmail.com"

//  Q u e s t i o n   2

var formContent = document.getElementById("form-content")
// console.log(formContent.nodeType)

var pLastName = document.getElementById("lastName")
console.log(pLastName.nodeType)
console.log(pLastName.firstChild)
console.log(pLastName.firstChild.nodeType)

pLastName.firstChild.nodeValue = "Father Name : Mohammad Ali "
var mainContent = document.getElementById("main-content")
console.log(mainContent.firstChild)
console.log(mainContent.lastChild)
console.log(pLastName.nextSibling.nextSibling)
console.log(pLastName.previousSibling.previousSibling)

var email = document.getElementById("email")
console.log(email.nodeType)
console.log(email.parentNode)
console.log(email.parentNode.nodeType)
