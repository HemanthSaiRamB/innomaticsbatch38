// //memoization - cache - : performance - : time - same data
console.log([1,2].toString())
console.log([12,6].toString())
console.log([1,26].toString())
console.log([26,1].toString())
const sumOfTwoNos = () =>{
  let cache = {}
  return (a,b) =>{
    console.log('input',a,'_',b)
    console.log('cache store - ',cache)
    let str = a.toString()+b.toString()
    if(cache[str]){
      console.log('output from cache')
      return cache[str]
    }
    console.log('output caculated')
    let result = a+b
    cache[str] = result
    return result
  }
}

let container = sumOfTwoNos()

//12,6 = > 126 => 18
//1,26 ->126 =>27
//console.log('result-',container(2,1))
console.log('result-', container(1,2)) // 3
console.log('result-', container(3,4)) // 7
console.log('result-', container(5,6)) // 11
console.log('result-', container(7,8)) // 15
console.log('result-',container(1,2)) // 




