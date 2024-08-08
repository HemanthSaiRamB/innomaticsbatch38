var a = 10


function abc(){
  let b = 20
  console.log(b)
}
setTimeout(function() {console.log('hemnth')}, 0);

console.log(Promise.resolve({name:'hemanth'}))
abc()
console.log(a)


// function abc(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(function() {
//         resolve('promise resolved')
//       }, 0);
//     })
//   }
  
//   setTimeout(function() {
//     console.log('Timer')
//   }, 0);
  
//   console.log('hemanth')
//   abc().then(result=>{
//     console.log(result)
//   })