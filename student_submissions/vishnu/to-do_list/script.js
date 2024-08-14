let addItems = (dataObject)=>{
    let card = document.createElement("div")
    card.className = 'cardEle'
    card.innerHTML = `
        <p><strong>Title :</strong> ${dataObject.title}</p>
        <p><strong>Description :</strong> ${dataObject.descr}</p>
        <p><strong>Category :</strong> ${dataObject.category}</p>
        <p><strong>Priority :</strong> ${dataObject.priority}</p>
        <button class="deleteButton">Delete</button>
    `
    cardsContainer.appendChild(card)
    let del = card.querySelector('.deleteButton');
    del.addEventListener('click', () => {
        card.remove();
        let index = todos.indexOf(dataObject);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        localStorage.setItem('todos', JSON.stringify(todos));
    });
}
// localStorage.clear() 
let cardsContainer = document.getElementById("cardsContainer")
let todos = []
document.getElementById("addTask").addEventListener("click", (e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value
    let priority = document.getElementById("taskPriority").value
    
    let object = {
        title : title,
        descr : description,
        category : category, 
        priority : priority
    }
    addItems(object)
    todos.push(object)
    localStorage.setItem('todos', JSON.stringify(todos))

    document.getElementById("formData").reset() 
})



document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem("todos")){
        todos = JSON.parse(localStorage.getItem('todos'))
        // console.log(todos)
        todos.forEach(item =>{
            addItems(item)
        })
    }
})






