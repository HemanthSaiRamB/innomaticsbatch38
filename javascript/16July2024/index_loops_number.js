// let a = 1,
//     b = 2,
//     c = 3, d = 4, e = 5,
//     f = 6, g = 7, h = 8,
//     i = 9, j = 10

// let sum = a + b + c + d + e + f + g + h + i + j
// console.log(sum)

//for,while
//initialization,cond,incr||decre
//iteration 1 => i=1
// i++ => i=2
// for(let i=91;i<=100;i++){
// let i = 1
// while (i < 10) {
//     console.log(i)
//     i++
// }
let sum = 0
for (let i = 91; i <= 100; i++) {
    // console.log(i)
    sum = sum + i
}

console.log(sum)

//even numbers btw 1 to 30
for (let i = 1; i <= 30; i++) {
    if (i % 2 == 0)
        console.log(i)
}

for(let i=0;i<10;i++){
  if(i===4)
    break;
  console.log(i)
}

for(let i=0;i<10;i++){
    if(i===4)
      continue;
    console.log(i)
  }

