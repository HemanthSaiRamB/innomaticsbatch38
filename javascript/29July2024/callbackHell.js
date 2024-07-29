// i want square root of sum of first 4 even nos
// 2,4,6,8 = 20
// finding first 4 even nos - 1
// result = sum of 4 even nos -2
// finding square root -3

// function myPro(){
//   var evenNumArr=[]
//   for(var i=1;i<=limit*2;i++){
//     if(i%2==0){
//       evenNumArr.push(i)
//     }
//   }
//   let result=evenNosResult.reduce((sum,num)=>sum=sum+num,0)
//   let squareEle=sum**(1/2)
//   console.log(Math.floor(squareEle))
// }

function findEvenNos(limit,cb1,cb2){
    var evenNumArr=[]
    for(var i=1;i<=limit*2;i++){
      if(i%2==0){
        evenNumArr.push(i)
      }
    }
    cb1(evenNumArr,cb2)
  }
  
  const sumOfEvenNos = (evenNosResult,cb) =>{
    let result=evenNosResult.reduce((sum,num)=>sum=sum+num,0)
    cb(result)
  }
  
  const sqaureRoot = (sum) =>{
    let squareEle=sum**(1/2)
    console.log(Math.floor(squareEle))
  }
  findEvenNos(4,sumOfEvenNos,sqaureRoot)
  