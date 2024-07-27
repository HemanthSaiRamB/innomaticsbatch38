//prototype inheritance
//everything in javascript is Object-js
//inheritance -accessing parent class properties inside instance
//json,arrays,functions


let person = {}
console.log(person.__proto__)//it points to person's prototype
console.log(Object.prototype)

console.log(person.__proto__===Object.prototype)

function Person(name){//prototype function
  this.name = name
  //this - context
}

let hemanth = new Person('hemanth')
console.log(hemanth)
let sairam = new Person('sai ram')
console.log(sairam)
console.log(hemanth.__proto__)
console.log(Person.prototype)
console.log(hemanth.__proto__===Object.prototype)