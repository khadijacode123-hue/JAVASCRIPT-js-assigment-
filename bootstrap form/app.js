var title = document.getElementById("title")
var desc = document.getElementById("desc")
var postContainer = document.getElementById("postContainer")

function post() {

    if (title.value.trim() && desc.value.trim()) {
        postContainer.innerHTML += `
    
      <div class="card">
                    <div class="card-header">
                        @blog
                    </div>
                    <div class="card-body">
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
                        <button class="btn postBtn px-3">Edit</button>
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

function deletePost(){
var card = event.target.parentNode.parentNode
card.remove()
}