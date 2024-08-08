//callback hell

// function abc(a,cb){
//   a = a*10
//   cb(a,(c)=>{console.log(c)}) //xyz()
// }

// function xyz(b,cb){
//   console.log(b)
//   b=b%10
//   cb(b)
// }
// abc(30,xyz)

// function abc(a){
//   return new Promise((resolve,reject)=>{
//     resolve(a*10)
//   })
// }
// abc(30).then((result)=>{
//   console.log(result)
//   return new Promise((resolve,reject)=>{
//     // resolve(result%10)
//     reject('error from second promise')
//   }) 
// }).then((result)=>{
//   console.log(result)
// }).catch(err=>{
//   console.log(err)
// })

async function abc(a){
    a = a*10
    return a
  }
  async function efg(c){
    console.log(c%10)
  }
  async function xyz(){
    try{
      efg(await abc(30))
    }catch(error){
      console.log('error occured',error)
    }
  }
  
  xyz()

//what asynchronous programmin in javascript and how can we achieve it
//what is callback
//what is callback hell and how to avoid it
//what are promises and in which version of js they are introuduced
//how to handle errors in promises
//what is resolve(then) and what reject(catch)
//what is promise chaining and how to avoid it
//what is async await
//what does a async function return
//how to handle errors when using async await
//rules of async await
//promise.all, promise.allSettled, promise.race

// function abc(flag){
//     return new Promise((resolve,reject)=>{
//       if(flag)
//         resolve('Promise is resolved')
//       else
//         reject('Promise is rejected')
//     })
//   }
  
//   async function xyz(){
//     try{
//       console.log(await abc(1))
//       console.log(await abc(0)) 
//     }
//     catch(err){
//       console.log(err)
//     }
//   } 
//   xyz()