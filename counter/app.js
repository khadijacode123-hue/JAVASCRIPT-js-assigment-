var count = 0

function increase() {
    var span = document.getElementById("span")
    count++
    span.innerHTML = count
}

function decrease() {
    var span = document.getElementById("span")
    if (count === 0) {
        return
    }
    count--
    span.innerHTML = count

}