// let movie = 10 // #1234
// let movie1 = movie
// //call by value - call by reference
// // shallow copy and deep copy
let a = 2
let b = a
b = b + 1

console.log(a)
console.log(b)
let arr1 = [1, 2, 3, 4, 5]

// let arr2 = arr1  
let arr2 = [...arr1] //3456 // shallow copy

arr2.push(6)

console.log(arr1)
console.log(arr2)

let obj1 = { 'name': 'Hemanth', 'gender': 'male' }
let obj2 = { ...obj1 } //shalow copy

obj2.name = 'Hemanth sai ram'
console.log(obj1)
console.log(obj2)


// let arr1 = [
//     { 'name': 'Hemanth', 'gender': 'male' },
//     { 'name': 'Srujana', 'gender': 'female' }
//     ]
    
//   let arr2 = [...arr1] // shallow copy
  
//   arr2[1].phn = 80989898989
//   arr2.push({ 'name': 'Sneha', 'gender': 'female' })
//   console.log(arr1)
//   console.log(arr2)
  
//   let obj1 = { 
//     'name': 'Hemanth', 
//     'gender': 'male',
//     'address':{
//       pincode:595959595,
//       lanmark:'sakjaj;s'
//     }
    
//   }
  
//   let obj2 = {...obj1} // shallow copy
//   obj2.phn = 9023203920932
//   obj2.name = 'Hemanth sai ram'
//   obj2.address.pincode = 520008
//   console.log(obj1)
//   console.log(obj2)

let obj = { name: 'Hemanth', 'gender': 'male' }
let str_obj = JSON.stringify({ name: 'Hemanth', 'gender': 'male' })
let parse_obj = JSON.parse(str_obj)
obj.phn = 3283208302
parse_obj.address = {landmark:'sufwe',pincode:393993}
console.log(typeof obj)
console.log(typeof str_obj)
console.log(typeof parse_obj)

console.log(obj)
console.log(parse_obj)

  
  