let ABC = {}
console.log(ABC.__proto__)
console.log(Object.prototype)
console.log(Object.__proto__)

function abc(){}

let xyz = new abc()
console.log(xyz.__proto__)
console.log(abc.prototype)

let person = {
  greet(){
    console.log('hi')
  }
}

let personOne = Object.create(person)
console.log(personOne)
console.log(personOne.__proto__)
console.log(person.__proto__)

