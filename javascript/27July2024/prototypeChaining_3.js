//{},new,create
function ABC(){}
let abc = new ABC() //1
console.log(abc.__proto__)

let personObject={
  greet(){
    console.log(`Hi ${this.name}`)
  }
}
console.log('ppp',personObject.__proto__)
let personZero={}//2
console.log(personZero.__proto__)
let personOne = Object.create(personObject)//3
console.log(personOne.__proto__)
console.log(personOne)
personOne.name='Hemanth'
console.log(personOne)
personOne.greet()

let personTwo = Object.create(personObject)
personTwo.name='Swathi'
personTwo.greet()