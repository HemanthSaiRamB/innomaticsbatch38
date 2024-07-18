// HOC - pattern

/*
a function accepting 
another function as args 
and returning another function
*/

function abc(func) {
    return () => {
        let a = 20
        let c = func(a)
        return c
    }
}

console.log(abc((b) => { return b })())

function add(func){
    return () =>{
      let a = func(10) // xyz(10)
      return a+30+30
    }
  }
  
  const multiply = (b) =>{
    return b*2
  }
  const mod = (c) =>{
    return c%2
  }
  console.log(add(multiply)())
  console.log(add(mod)())