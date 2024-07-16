// let str = 'Hemanth'

// // 0 - Infinity
// console.log(str.toLowerCase())
// console.log(str.charAt(0))
// console.log(str.indexOf('h'))
// console.log(str.indexOf(str.charAt(4)))
// console.log(str[100])
// console.log(str.indexOf('g'))

// console.log('a'.charCodeAt())
// console.log('z'.charCodeAt())
// console.log('A'.charCodeAt())
// console.log('Z'.charCodeAt())
// console.log(String.fromCharCode(90))
// for(let i=97;i<=122;i++){
//     if(String.fromCharCode(i)==='a'||
//     String.fromCharCode(i)==='e'||
//     String.fromCharCode(i)==='i'||
//     String.fromCharCode(i)==='o'||
//     String.fromCharCode(i)==='u'
// )
//     console.log(String.fromCharCode(i))

// }

// let input = "AMMA";
// let output = "";

// for (var i = input.length; i > -1; i--) {
//     output += input.charAt(i);
//     if (i === 0) {
//         if (output === input) {
//             console.log("input is a Palindrome");
//         }
//         else {
//             console.log("input is not a palindrome");
//         }
//     }
// }

let theStr = 'The quick brown fox jumps over the lazy dog'.toLowerCase()
let str1 = ''
for (let i = 0; i <= theStr.length; i++) {
    if (str1.indexOf(theStr.charAt(i)) === -1)
        str1 = str1 + theStr.charAt(i)
}
console.log(str1)
let counter = 0
for (let i = 0; i < str1.length; i++) {
    if (str1[i].charCodeAt() >= 97 && str1[i].charCodeAt() <= 122) {
        counter = counter + 1;
    }
}
if (counter == 26)
    console.log("panagram")
else
    console.log("not a panagram")



//duplicate chars


