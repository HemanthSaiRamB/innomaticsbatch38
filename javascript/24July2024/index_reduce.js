//sum of even nos btw 1 to 30


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = 0
// for(let i=0;i<array.length;i++){
//   sum = sum+array[i]
// }
// console.log(sum)
//acc
//curr
let sum = array.reduce((acc, iter) => {
    return acc = acc + iter
}, 0)
console.log(sum)
//sum of even nos btw 1 to 30

// let array = new Array(30).fill('')
// array = array.map((iter,index)=>{
//   return index+1
// })
// let sum = array.reduce((acc,iter)=>{
//   if(iter%2===0)
//     return acc = acc+iter
//   return acc
// },0)
// console.log(sum)

// let sum = new Array(30).fill('').
//             map((iter,index)=>index+1).
//             reduce((acc,iter)=>iter%2===0?acc=acc+iter:acc,0)

// console.log(sum)

let hemanth = [
    {
        sub_name: 'DSA',
        marks: 90
    },
    {
        sub_name: 'JAVA',
        marks: 80
    },
    {
        sub_name: 'M1',
        marks: 70
    },
    {
        sub_name: 'C',
        marks: 60
    },
    {
        sub_name: 'Android',
        marks: 50
    },
]

let vamshi = [
    {
        sub_name: 'DSA',
        marks: 60
    },
    {
        sub_name: 'JAVA',
        marks: 70
    },
    {
        sub_name: 'M1',
        marks: 80
    },
    {
        sub_name: 'C',
        marks: 90
    },
    {
        sub_name: 'Android',
        marks: 100
    },
]

let students = [
    {
        hemanth: [...hemanth]

    },
    {
        vamshi: [...vamshi]
    }
]
// console.log(JSON.stringify(students))

//output = {hemanth_total:410,vamshi_total:439}

let result = students.
    map((stu, index) => {
        if (index === 0) {
            return {
                hemanth_total: stu.hemanth.
                    reduce((acc, iter) => acc = acc + iter.marks, 0)
            }
        }
        if (index === 1) {
            return {
                vamshi_total: stu.vamshi.
                    reduce((acc, iter) => acc = acc + iter.marks, 0)
            }
        }
    })

console.log(result)

