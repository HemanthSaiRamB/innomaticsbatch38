document.getElementById("add-todo").addEventListener("submit",(e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let desc = document.getElementById("desc").value
    let category =document.getElementById("category").value
    let priority = document.getElementById("priority").value
    let filter = document.getElementById("filter").value
    let duedate = document.getElementById("due-date").value

    console.log(title,desc,category,priority,filter,duedate);

    let cardcontainer = document.getElementById("card-container")
    let card = document.createElement("div")
    card.className = "card"

    let dtitle = document.createElement("h3")
    let ddesc = document.createElement("p")
    let dcat = document.createElement("h5")
    let dprio = document.createElement("h5")
    let dfilter = document.createElement("h5")
    let ddate = document.createElement("h5")
    let deleteBtn = document.createElement("button")

    dtitle.textContent = title
    ddesc.textContent = desc
    dcat.textContent = "Category: " +category
    dprio.textContent ="Prority: " +priority
    dfilter.textContent = "Filter: " +filter
    ddate.textContent = "Duedate" +duedate
    deleteBtn.textContent = "Delete"; 
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
        cardcontainer.removeChild(card);
    });


    card.appendChild(dtitle)
    card.appendChild(ddesc)
    card.appendChild(dcat)
    card.appendChild(dprio)
    card.appendChild(dfilter)
    card.appendChild(ddate)
    card.appendChild(deleteBtn); 


    cardcontainer.appendChild(card)

    document.getElementById("add-todo").reset()
})