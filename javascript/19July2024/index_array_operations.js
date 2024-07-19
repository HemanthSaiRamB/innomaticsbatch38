// create,read,update,delete - CRUD operations
let evenNos = [2,4,6,8] //create
console.log(evenNos) // read

evenNos.push(10)//update
console.log(evenNos)
evenNos.unshift(0)//update
console.log(evenNos)

evenNos.pop()//delete
console.log(evenNos)
evenNos.shift()
console.log(evenNos)//delete

// let evenNos = [2,4,8,10]

//0,1,2,3
//0,1,_,3,4
// delete, add element at an index
//splice(startindex,0,6)
evenNos.splice(2,0,6)// insert 
console.log(evenNos)
evenNos.splice(2,1)//delete count 1
console.log(evenNos)
evenNos.splice(2,1,100)//delete and replace count 1
console.log(evenNos)
evenNos.splice(2,2)// delete count more than 1
console.log(evenNos)

