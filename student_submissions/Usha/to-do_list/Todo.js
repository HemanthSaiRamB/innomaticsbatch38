var count=1
document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('yes')
    var input=document.getElementById('inputData').value
    var text=document.getElementById('Text').value
    var select1=document.getElementById('select1').value
    var select2=document.getElementById('select2').value
    console.log(input,text,select1,select2)
    let main=document.getElementById('mainDiv')
    let card=document.createElement('div')
    var del=document.createElement('button')
    del.innerText="Delete"
    del.addEventListener('click',DeleteItem)
    card.setAttribute('class','cardElement')
    card.setAttribute('id','card_'+count)
    del.setAttribute('id','del_'+count)
    card.innerHTML=`
    <h3> InputData: ${input}</h3>
    <p> Description: ${text}</p>
    <p> Category: ${select1}</p>
    <p> Priority:${select2}</p>
    
    `
    card.appendChild(del)
    
    console.log(card.id)
    main.appendChild(card)
    document.body.append(main)
    document.getElementById('Data').reset()
    count++
})
function DeleteItem(){
        var currentElement=document.activeElement.getAttribute("id")
        console.log(currentElement)
        currentId = currentElement.split("_")[1]
       
        var countele=document.getElementById("card_"+currentId)
        countele.remove()
        console.log(countele)
        // cardIt=document.getElementById()
}
// function Add(){
//     var input=document.getElementById('inputData').value
//     var text=document.getElementById('Text').value
//     var select1=document.getElementById('select1').value
//     var select2=document.getElementById('select2').value
//     console.log(input,text,select1,select2)
//     let main=document.getElementById('mainDiv')
//     let card=document.createElement('div')
//     var del=document.createElement('button')
//     del.innerText="Delete"
//     del.addEventListener('click',DeleteItem)
//     card.setAttribute('class','cardElement')
//     card.setAttribute('id','card_'+count)
//     del.setAttribute('id','del_'+count)
//     card.innerHTML=`
    
//     <h3> InputData: ${input}</h3>
//     <p> Description: ${text}</p>
//     <p> Category: ${select1}</p>
//     <p> Priority:${select2}</p>
    
//     `
//     card.appendChild(del)
    
//     console.log(card.id)
//     main.appendChild(card)
//     document.body.append(main)
//     document.getElementById('Data').reset()
//     count++
// }
// function DeleteItem(){
//     var currentElement=document.activeElement.getAttribute("id")
//     console.log(currentElement)
//     currentId = currentElement.split("_")[1]
   
//     var countele=document.getElementById("card_"+currentId)
//     countele.remove()
//     console.log(countele)
//     // cardIt=document.getElementById()
// }