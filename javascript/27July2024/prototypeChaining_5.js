function Father(){}

function Mother(name){ // constructor function
  this.name =name
}
Mother.prototype = Object.create(Father.prototype) // married
// Mother.constructor = Mother
let dog = new Mother('ammu') // child birth
// console.log(dog.speak)
Father.prototype.speak = true
// console.log(dog.speak)

// console.log(Mother.__proto__)
// console.log(Mother.prototype)

// console.log(Mother.__proto__ === Mother.prototype)
console.log(dog.__proto__===Mother.prototype)
console.log(Mother.prototype.__proto__)
console.log(Father.prototype)
console.log(Mother.prototype.__proto__===Father.prototype)
console.log(Mother.constructor)
console.log(Father.constructor)