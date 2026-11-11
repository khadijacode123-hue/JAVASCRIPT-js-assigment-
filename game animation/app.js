
var char1 = document.getElementById("char1")
var left = 0

function animate(event) {
    console.log(event.key);
    console.log(event.keyCode);
    if (event.keyCode == 39 && left < 1150) {
        left = left + 20
        char1.style.left = left + "px"
        char1.style.transform = "scaleX(1)"
        char1.src = "assets/gifs/walk.gif"

        setTimeout(() => {
            char1.src = "assets/gifs/stand.gif"
        }, 1000)
    }
    if (event.keyCode == 37 && left > 100) {
        char1.style.transform = "scaleX(-1)"
        left = left - 20
        char1.style.left = left + "px"
        char1.src = "assets/gifs/walk.gif"
        setTimeout(() => {
            char1.src = "assets/gifs/stand.gif"
        }, 1000)
    }
    if (event.keyCode == 32) {
        char1.src = "assets/gifs/gunshot.gif"
        char1.style.height = "250px"

        setTimeout(() => {
            char1.src = "assets/gifs/stand.gif"
        }, 2000)

    }
}

window.onkeydown = animate;