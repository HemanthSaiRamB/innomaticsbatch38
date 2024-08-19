var count=1
let AllTodo=[]
document.addEventListener('DOMContentLoaded',()=>{
    console.log(localStorage.getItem('AllTodo'))
    if(localStorage.getItem('AllTodo')){
        AllTodo = JSON.parse(localStorage.getItem('AllTodo'))
    }
        AllTodo.forEach(item =>{
            Add(item)
        })
})


document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('yes')
    var input=document.getElementById('inputData').value
    var text=document.getElementById('Text').value
    var select1=document.getElementById('select1').value
    var select2=document.getElementById('select2').value
    console.log(input,text,select1,select2)

    let obj = {
        input:input,
        description:text,
        category:select1,
        priority:select2
    }
    AllTodo.push(obj)
    localStorage.setItem('AllTodo',JSON.stringify(AllTodo))
    console.log(AllTodo)
    Add(obj)
})
function DeleteItem(){
        var currentElement=document.activeElement.getAttribute("id")
        
        currentId = currentElement.split("_")[1]
        console.log(currentId)

        var countele=document.getElementById("card_"+currentId)
        
        if (currentId !== -1) {
            AllTodo.splice(currentId, 1);
        }
        localStorage.setItem('AllTodo', JSON.stringify(AllTodo));
        countele.remove()
        // console.log()
        // cardIt=document.getElementById()
}
console.log(AllTodo.input)
function Add(AllTodo){
    console.log(AllTodo.input)
    let main=document.getElementById('mainDiv')
    let card=document.createElement('div')
    var del=document.createElement('button')
    del.innerText="Delete"
    del.addEventListener('click',DeleteItem)
    card.setAttribute('class','cardElement')
    card.setAttribute('id','card_'+count)
    del.setAttribute('id','del_'+count)
    card.innerHTML=`
    <h3> InputData: ${AllTodo.input}</h3>
    <p> Description: ${AllTodo.description}</p>
    <p> Category: ${AllTodo.category}</p>
    <p> Priority:${AllTodo.priority}</p>
    
    `
    card.appendChild(del)
    
    console.log(card.id)
    main.appendChild(card)
    document.body.append(main)
    document.getElementById('Data').reset()
    count++

}
// function DeleteItem(){
//     var currentElement=document.activeElement.getAttribute("id")
//     console.log(currentElement)
//     currentId = currentElement.split("_")[1]
   
//     var countele=document.getElementById("card_"+currentId)
//     countele.remove()
//     console.log(countele)
//     // cardIt=document.getElementById()
// }