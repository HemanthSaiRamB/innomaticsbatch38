// lexical scope and
// lexical environment

function parent(){
    let a = 10
    function child1(){
      console.log('a',a)
      
      function child1Child(){
        console.log('a__',a)
        let b= 20
      }
      child1Child()
    //   console.log(b)
    }
    function child2(){
      console.log('a',a)
    }
    child1()
    child2()
  }
  // child1()
  parent()

  // // encapsulation
function getCounter(){
    let counter = 0
    return function(){
      return counter = counter+1
    }
  }
  
  console.log(getCounter()())
  console.log(getCounter()())
  const theCounter = getCounter()
  console.log(theCounter())
  console.log(theCounter())
  
  function abc(){
    return function(){
      return 'Hemanth'
    }
  }
  
  console.log(abc()())