// ====>   Question    1  <===

// function preview() {
//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value
//     var password = document.getElementById("password").value
//     var card = document.getElementById("card")
//     var form = document.getElementById("form")
//     card.innerHTML = "Full Name : " + name + "<br>" + "Email : " + email + "<br>" + "Password : " + password + "<br>"
//     card.style.display="block"
//     form.style.display = "none"
// }

// ====>  Question    2  <===

// function see() {
//     var img = document.getElementById("img")
//     var para = document.getElementById("para")

//     var shortPara = "The Burgundy colorway is a premium signature shade introduced for the iPhone 18 Pro and iPhone 18 ProMax lineup. Described by tech reviewers as a deeply sophisticated, dark academia-inspired hue, this finish shifts visually between rich wine-red, deep eggplant purple"
//     var longPara = "The Burgundy colorway is a premium signature shade introduced for the iPhone 18 Pro and iPhone 18 Pro Max lineup. Described by tech reviewers as a deeply sophisticated, dark academia-inspired hue, this finish shifts visually between rich wine-red, deep eggplant purple, and subtle walnut undertones depending on how it catches the light. The device features a matte-textured back glass paired with color-matched titanium side rails, which absorb ambient light to give the phone a dark, sleek profile from the sides while making the front display bezels blend in seamlessly. Beneath its striking exterior, the Burgundy pro series is built around a Grade 5 Titanium chassis housing the advanced A20 Pro processor, an expanded 6.3-inch or 6.9-inch Super Retina XDR display, a variable aperture Pro Fusion camera system, and next-generation Apple Intelligence capabilities."
//     var btn = document.getElementById("btn")
//     if (para.innerHTML === longPara) {
//          para.innerHTML =shortPara
//         btn.innerHTML = "See More"
//     } else {
//         para.innerHTML =longPara 
//         btn.innerHTML = "See Less"
//     }

// }

// ====> Question    3  <===

function addStudent(event) {
    event.preventDefault()
    var studentName = document.getElementById("studentName").value
    var studentAge = document.getElementById("studentAge").value
    var studentBody = document.getElementById("studentsTableBody")
    studentBody.innerHTML += `
       <tr>
        <td> ${studentName}  </td> 
        <td>  ${studentAge} </td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>
            </tr>
    
    `

}

function deleteRow(e) {
    var del = e.parentNode.parentNode
    del.remove()
}

function editRow(e) {
    var activeRow = e.parentNode.parentNode
    var firstChildrenName = activeRow.children[0].textContent
    var secondAge = activeRow.children[1].textContent
    document.getElementById("editStudenForm").style.display = "block"
    document.getElementById("editName").value = firstChildrenName
    document.getElementById("editAge").value = secondAge
}