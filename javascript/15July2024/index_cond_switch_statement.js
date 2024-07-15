/**
 * 1 - 10 - if (&&) number >=1 && number <=10
 * -1 to -10 else if number >=-1 && number <=10
 * 200 - 300 else if number >=-200 && number <=300
 * print the is not falling in btw any of the ranges else
 */
let person_gender = 'male'

switch (person_gender) {
    case 'male':
        console.log('person is a male')
        break;
    case 'female':
        console.log('person is a female')
        break;
    default:
        console.log('person is other')
}
let number = 22

switch (true) {
    // switch (number) {
    case (number >= 1 && number <= 10):
        console.log(`${number} is in btw 1 and 10`)
        break;
    case (number >= -1 && number <= 10):
        console.log(`${number} is in btw -1 and -10`)
        break;
    case (number >= -200 && number <= 300):
        console.log(`${number} is in btw 200 and 300`)
        break;
    // case 22:
    //     console.log('from 22 case')
    default:
        console.log(`${number} is not in any range`)
}

if (number >= 1 && number <= 10)
    console.log(`${number} is in btw 1 and 10`)
else if (number >= -1 && number <= 10)
    console.log(`${number} is in btw -1 and -10`)
else if (number >= -200 && number <= 300)
    console.log(`${number} is in btw 200 and 300`)
else
    console.log(`${number} is not in any range`)