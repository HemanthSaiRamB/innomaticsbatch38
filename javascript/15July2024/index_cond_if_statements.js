let number = 5
// "",''
// console.log(number,' is a even number')
// console.log(number+' is a even number')

if (number % 2 === 0)//false
    console.log(`${number} is a even number`)
else
    console.log(`${number} is a odd number`)

let number1 = 2
//>5 and <9

if (number1 > 5 && number1 < 9)
    console.log(`${number1} is in the range of 5 and 9`)
else
    console.log(`${number1} is not in the range of 5 and 9`)

//vowels - a,e,i,o,u

let char1 = 'a'
let char2 = 'e'

// true && true => true

// false && false => false

// true && false -> false

// false && true -> false
// ========
// true || true => true

// false || false => false

// true || false -> true

// false && true -> true
if ((char1 == 'a' ||
    char1 == 'e' ||
    char1 == 'i' ||
    char1 == 'u' ||
    char1 == 'o') &&
    (char2 == 'a' ||
        char2 == 'e' ||
        char2 == 'i' ||
        char2 == 'u' ||
        char2 == 'o'))
    console.log(`${char1} and ${char2} are vowels`)


else if (char1 == 'a' ||
    char1 == 'e' ||
    char1 == 'i' ||
    char1 == 'u' ||
    char1 == 'o')
    console.log(`${char1} is a vowel`)

else if (char2 == 'a' ||
    char2 == 'e' ||
    char2 == 'i' ||
    char2 == 'u' ||
    char2 == 'o')
    console.log(`${char2} is a vowel`)

else
    console.log(`${char1} and ${char2} are not vowels`)

let country1 = 'X'
let age1 = 17
let currency1 = 'xinr'

let country2 = 'Y'
let age2 = 18
let currency2 = 'yinr'

let inputCountry = 'Y'
let inputAge = '20'
if (inputCountry === country1 
    || inputCountry === country2) {
    if (inputAge <= age1) {
        console.log(currency1)
    } else if (inputAge > age2) {
        console.log(currency2)
    }
}else{
    console.log('Country not found')
}



