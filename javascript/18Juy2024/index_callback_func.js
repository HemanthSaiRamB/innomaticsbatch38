// functions are called first class citizens
// callback function

function abc(number,cb){
    setTimeout(function() {
      cb(number)
    }, 1000);
  }
  
  abc(10,function(inpNum){
    console.log(inpNum)
  })
  
  abc(20,(inpNum) => {
    console.log(inpNum)
  })

//   function abc(cb){
//     cb() // xyz
//   }
//   const xyz = () => { // arrow()
//     console.log('callback function')
//   }
//   abc(xyz)

//

// function abc(number,cb){
//     number = number*2
//     cb(number)
//   }
  
//   abc(10,(inpNum)=>{
//     console.log(inpNum)
//   })
  
//   function parent(number){
//     let a = 20
//     function child(){
//       console.log(number*a)
//     }
//     child() 
//   }
  
//   parent(10)