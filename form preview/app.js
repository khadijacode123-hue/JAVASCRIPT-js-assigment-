
function formCard(e) {
    e.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var card = document.getElementById("card")
    document.getElementById("form").style.display = "none"
    card.style.display = "block"
    card.innerHTML += "Your Name : " + name + "<br>Your Age :" + age +
        "<button onclick=\"del(this)\">Delete</button> " +
        "<button onclick=\"edit(this)\">Edit</button>"
}

function del(e) {
    var dlt = document.getElementById("card")
    dlt.remove()
}
function edit(e) {
    document.getElementById("card").style.display="none"
    document.getElementById("editForm").style.display = "flex"
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    document.getElementById("editName").value = name
    document.getElementById("editAge").value = age
}

function editCard(e){
    e.preventDefault()
  var editName = document.getElementById("editName").value  
  var editAge =   document.getElementById("editAge").value 
  var card = document.getElementById("card")
card.innerHTML = "Your Name : " + editName + "<br>Your Age :" + editAge +
  "<button onclick=\"del(this)\">Delete</button> " +
  "<button onclick=\"edit(this)\">Edit</button>"
    document.getElementById("editForm").style.display = "none"
    card.style.display = "block"
}
 function cancel() {
    document.getElementById("editForm").style.display = "none"

    document.getElementById("card").style.display = "block"
}
