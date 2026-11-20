var sel
var img = document.getElementsByTagName("img")

var title = document.getElementById("title")
var desc = document.getElementById("desc")
var postContainer = document.getElementById("postContainer")

function editPost() {
    var card = event.target.parentNode.parentNode
    var title = card.children[1].children[0].children[0].children[0].innerText
    var desc = card.children[1].children[0].children[1].innerText
    document.getElementById("title").value = title
    document.getElementById("desc").value = desc
    card.remove()

}
function post() {

    if (title.value.trim() && desc.value.trim()) {
        postContainer.innerHTML += `
    
      <div class="card">
                    <div class="card-header">
                        @blog
                    </div>
                    <div class="card-body" style="background-image: url(${sel});">
                        <figure>
                            <blockquote class="blockquote">
                                <p>${title.value}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                               ${desc.value}
                            </figcaption>
                        </figure>
                    </div>
                    <div class="ms-auto m-2">
                        <button class="btn postBtn px-3" onclick="editPost()">Edit</button>
                        <button class="btn btn-dark" onclick="deletePost()">Delete</button>

                    </div>
                </div>`
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }
    title.value = ""
    desc.value = ""
}

function deletePost() {
    var card = event.target.parentNode.parentNode
    card.remove()
}


function selectedImg(src) {
    sel = src
    console.log(sel)
    var bg = document.getElementsByClassName("bg")
    for (var i = 0; i < bg.length; i++) {
        bg[i].className = "bg"
    }
    var doc = event.target.className += " selected"
    console.log(doc)

}