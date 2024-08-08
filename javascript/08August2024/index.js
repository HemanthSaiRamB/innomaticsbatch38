//how to add event listener to a button
//how to avoid default behavior
//how to get value inside a input field
//how to create a htmlelement in js using DOM API
//how to add class to a html element in js
//how to appendChild - create children for a html element
//how to add text content 
//how to reset

//DOM API
document.getElementById("login_form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    console.log(username,password)

    let cardcontainer = document.getElementById("cardcontainer")
    let card = document.createElement("div")
    card.className = "card"

    let user = document.createElement("h3")
    let pass = document.createElement("p")

    user.textContent = username
    pass.textContent = password

    card.appendChild(user)
    card.appendChild(pass)

    cardcontainer.appendChild(card)

    document.getElementById("login_form").reset()
})