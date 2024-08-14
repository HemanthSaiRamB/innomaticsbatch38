let tbody = document.getElementById("cardcontainer")
let alltodos = []
let i = 0
document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem('alltodos') !== null){
        alltodos = JSON.parse(localStorage.getItem('alltodos'))
    }
    alltodos.forEach(todo => {
        populate_data(todo)
    })
    if(localStorage.getItem('radionum')!==null){
        i = JSON.parse(localStorage.getItem('radionum')).radionum
    }
})
document.getElementById("additemform").addEventListener("submit",(e)=>{
    e.preventDefault()
    let item = document.getElementById("work").value
    let desc = document.getElementById("description").value
    let category = document.getElementById("category").value
    let priority = document.getElementById("priority").value
    let obj = {
        item: item,
        description: desc,
        category: category,
        priority: priority
    }
    alltodos.push(obj)
    localStorage.setItem('alltodos',JSON.stringify(alltodos))

    populate_data(obj)

    document.getElementById("additemform").reset()
})

function populate_data(table_data){
        let trow = document.createElement("div")
        trow.className = "card"
        trow.innerHTML = `
        <h4>${table_data.item}</h4>
        <h4>${table_data.description}</h4>
        <h4>${table_data.category}</h4>
        <h4>${table_data.priority}</h4>`

        let radios = document.createElement("div")
        radios.className = "radios"
        radios.innerHTML = `
        <label for="todo">To-Do</label><input type="radio" id="todo" name=${i}>
        <label for="progress">In Progress</label><input type="radio" id="progress" name=${i}>
        <label for="complete">Completed</label><input type="radio" id="complete" name=${i}>
        `
        i++

        let obj1 = {radionum:i}

        localStorage.setItem('radionum',JSON.stringify(obj1))
        let del = document.createElement("button")
        del.innerHTML = "Delete"
        del.className = "deleteitem"
        
        trow.appendChild(radios)
        trow.appendChild(del)
        
        del.addEventListener('click',()=>{
            let closestcard = del.closest('.card')
            closestcard.style.backgroundColor = 'red'
            alltodos.splice(alltodos.indexOf(table_data),1)
            localStorage.setItem('alltodos',JSON.stringify(alltodos))
            setTimeout(() => {
                closestcard.remove()
            }, 1000);
            
        })

        tbody.appendChild(trow)

    
}