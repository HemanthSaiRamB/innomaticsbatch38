document.getElementById("login-form").addEventListener("submit",(e)=>{
  e.preventDefault()
  let title=document.getElementById("title").value
  let description=document.getElementById("description").value
  let category=document.getElementById("category").value
  let taskPriority=document.getElementById("taskPriority").value
  console.log(title,description,category,taskPriority)
  let cardcontainer=document.getElementById("cardcontainer")
  let card= document.createElement("div")
  let title1=document.createElement("h3")
  let description1= document.createElement("p")
  let category1=document.createElement("p")
  let taskPriority1=document.createElement("p")
  let btn=document.createElement("button")
  card.className="card"
  title1.textContent=title
  description1.textContent=description
  category1.textContent=category
  taskPriority1.textContent=taskPriority
  btn.textContent="delete"
  btn.id="delete"
  card.appendChild(title1)
  card.appendChild(description1)
  card.appendChild(category1)
  card.appendChild(taskPriority1)
  card.appendChild(btn)


  cardcontainer.appendChild(card)
  btn.addEventListener('click',()=>{
    let closestcard = btn.closest('.card')
    closestcard.remove()

})
})