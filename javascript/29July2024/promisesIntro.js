// i want square root of sum of first 4 even nos
// 2,4,6,8 = 20
// finding first 4 even nos - 1
// result = sum of 4 even nos -2
// finding square root -3

// const a = new Promise(resolve=>resolve('abc'))
// console.log(a)
// console.log(typeof a)

// -Promise
//successful
//fail
//pending
function myPromise(student){
    return new Promise((resolve,reject)=>{
       if(student.marks>35){
         resolve(`${student.name} is passed`)
       }else{
         reject(`${student.name} is failed`)
       }
     })
   }
   
   // console.log('1=>',myPromise({name:'hemanth',marks:30}))
   // console.log('2=>',myPromise({name:'sneha',marks:70}))
   
   myPromise({name:'hemanth',marks:30}).then((result)=>{
     consol.log('success=>',result)
   }).catch((err)=>{
     console.log('failed=>',err)
   })
   
   myPromise({name:'sneha',marks:70}).then((result)=>{
     console.log('success=>',result)
   }).catch((err)=>{
     console.log('failed=>',err)
   })
   