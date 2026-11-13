
var sun = document.getElementById("sun")
var moon = document.getElementById("moon")

function lightMode() {
    moon.style.display = "block"
    sun.style.display = "none"
    document.body.style.backgroundColor = "#F9F9F9"
    document.getElementsByClassName("downClr")[0].style.backgroundColor = "#F9F9F9"

    document.body.style.color = "black"
    var fes = document.getElementsByClassName("fesContainer")
    var div = fes[0].getElementsByTagName("div")
    for (var i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "#F9F9F9"
    }
    document.getElementsByClassName("dBtn")[0].style.backgroundColor = "black"
    document.getElementsByClassName("dBtn")[1].style.backgroundColor = "black"
    var clr = document.getElementsByClassName("clr")
    for (var i = 0; i < clr.length; i++) {
        clr[i].style.color = "#333333"

    }

}

function darkMode() {
    moon.style.display = "none"
    sun.style.display = "block"
    document.body.style.color = "white"
    document.body.style.backgroundColor = "black"
    document.getElementsByClassName("downClr")[0].style.backgroundColor = "black"
    var clr = document.getElementsByClassName("clr")
    for (var i = 0; i < clr.length; i++) {
        clr[i].style.color = "white"

    }
    document.getElementById("sun").style.filter = "brightness(0) invert(1)"
    var fes = document.getElementsByClassName("fesContainer")
    var div = fes[0].getElementsByTagName("div")
    for (var i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = "#333333"
    }
    document.getElementsByClassName("dBtn")[0].style.backgroundColor = "#75BF7A"
    document.getElementsByClassName("dBtn")[1].style.backgroundColor = "#75BF7A"
    document.getElementsByClassName("aBtn")[0].style.backgroundColor = "#75BF7A"
    document.getElementsByClassName("aBtn")[1].style.backgroundColor = "#75BF7A"
    document.getElementById("foot").style.filter = "brightness(0) invert(1)"


}