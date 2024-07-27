let personObject = {
    greet(){
      console.log(`Hi ${this.name}`)
    }
  }
  
  let personOne = Object.create(personObject)
  console.log(personOne)
  personOne.name='Hemanth'
  personOne.greet()