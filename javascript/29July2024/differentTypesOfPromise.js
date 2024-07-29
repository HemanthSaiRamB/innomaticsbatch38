//promises can accept an array of Promises
let promise1 =new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('promise1 is resolved')
    }, 2000);
  })
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve('promise2 is resolved')
    }, 1000);
  })
let promise3 = new Promise((resolve,reject)=>{
     setTimeout(function() {
      // resolve('promise3 is resolved')
      reject('promise3 is reject')
    }, 500);
  })
Promise.all([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
  console.log('err=>',err)
})
Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
})
Promise.race([promise1,promise2,promise3]).then((result)=>{
  console.log('success=>',result)
}).catch((err)=>{
   console.log('err=>',err)
})

// Promise.allSettled()

// Promise.race()

