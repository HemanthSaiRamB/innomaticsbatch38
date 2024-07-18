
// let name = 'usha sri'
// let start = 2
// let end = 3
// console.log(name.substring(start,end+1))
function findSubStrWithSpace(inpStr) {
    let subStr = ''
    for (let i = 0; i < inpStr.length; i++) {
        if (inpStr[i].charCodeAt() === 32)
            break
        subStr = subStr + inpStr[i]
    }
    // console.log(subStr)
    // console.log(inpStr.substring(0, inpStr.indexOf(' '))) // first occurance
    return subStr
}

let result1 = findSubStrWithSpace('usha sri') // usha
console.log(result1)
findSubStrWithSpace('pari mala')
findSubStrWithSpace('charan kumar reddy')


