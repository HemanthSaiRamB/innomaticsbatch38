
function Animal(name,eats){//prototype
    this.eats = eats
    this.name = name
  }
  
  let Dog = new Animal('Dog',true)
  // console.log(Dog)
  let Cat = new Animal('Cat',false)
  
  Animal.prototype.walks = function(){
    console.log(`
    ${this.name} 
    ${this.eats?'will eat':'will not eat'}
    and also walks`)
  }
  
  Dog.walks()
  Cat.walks()