
var dark = document.getElementById("dark")
var light = document.getElementById("light")

function darkMode(e) {
    light.style.display = "block"
    dark.style.display = "none"
    document.getElementsByTagName("body")[0].style.backgroundColor = "black"
    document.getElementsByTagName("body")[0].style.color = "white"

}
function lightMode(e) {
    dark.style.display = "block"
    light.style.display = "none"
    document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    document.getElementsByTagName("body")[0].style.color = "black"



}