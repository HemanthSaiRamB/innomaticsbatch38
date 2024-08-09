// console.log("outside event")
window.addEventListener("load",()=>{
    console.log("page completely loaded")
})
let array1 = [
    {
        name:"charan",
        college:"svce",
        email:"charan@gmail.com",
        gender:"male"
    },
    {
        name:"vamsi",
        college:"svec",
        email:"vamsii@gmail.com",
        gender:"male"
    },
    {
        name:"vishnu",
        college:"svce",
        email:"vishnu@gmail.com",
        gender:"male"
    },
    {
        name:"usha",
        college:"svec",
        email:"usha@gmail.com",
        gender:"female"
    }
]
document.addEventListener("DOMContentLoaded",()=>{
    console.log("inside event")
    let tbody = document.querySelector("#table1 tbody")

    fetch("https://jsonplaceholder.typicode.com/users").
    then((response)=>response.json()).
    then((data)=>populate_data(data))

    function populate_data(table_data){
        table_data.forEach((student)=>{
            let trow = document.createElement("tr")
            trow.innerHTML = `
            <tr>
             <td>${student.name}</td>
             <td>${student.email}</td>
             <td>${student.phone}</td>
             <td>${student.website}</td>
            </tr>
            `
            tbody.appendChild(trow)
         })
    }
    
})
console.log("outside event")
