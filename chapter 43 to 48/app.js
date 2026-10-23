// ==> Q u e s t i o n  1 <==

// ==> Q u e s t i o n  2 <==

// ==> Q u e s t i o n  3 <==
function del(e) {
    var deleteRow = e.parentNode.parentNode
    deleteRow.remove()

}
// ==> Q u e s t i o n  4 <==

// ==> Q u e s t i o n  5 <==
var span = document.getElementById('number')
var count = 0
function increase() {
    count = count + 1
    span.innerText = count
}
function decrease() {
    count = count - 1
    span.innerText = count
}

// ==> Q u e s t i o n  6 <==