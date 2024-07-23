//forEach, map, reduce, filter, find, findIndex, some

//array of objects
// 0 - add at the end,
// 1 - add at the start,
// 2 - at index 1 add any supply,
// 3 - replace CNS with other supply,
// 4 - Remove both starting and ending supplies
let students = [
    {
        name: 'Anjireddy',
        gender: 'male',
        phn: 9090909090,
        email: 'Anjireddy@gmail.com',
        address: {
            pincode: 99090,
            landmark: 'JNTU'
        },
        supplies: ['OS', 'FLAT', 'M1'] // at the end
    },//0
    {
        name: 'Vajid',
        gender: 'male',
        phn: 8080808080,
        email: 'Vajid@gmail.com',
        address: {
            pincode: 797979,
            landmark: 'KPHB'
        },
        supplies: ['Chemistry', 'Cryptography'] // at the start
    },//1
    {
        name: 'Rahul',
        gender: 'male',
        phn: 5050505050,
        email: 'Rahul@gmail.com',
        address: {
            pincode: 676767,
            landmark: 'Kukatpally'
        },
        supplies: ['BEE', 'M3', 'MWE'] // at index 1
    },//2
    {
        name: 'Parimala',
        gender: 'female',
        phn: 3030303030,
        email: 'Parimala@gmail.com',
        address: {
            pincode: 55555,
            landmark: 'Ameerpet'
        },
        supplies: ['Android', 'CNS', 'DSA'] // replace CNS with other supply
    },//3
    {
        name: 'Sneha',
        gender: 'female',
        phn: 555555223,
        email: 'Sneha@gmail.com',
        address: {
            pincode: 343434,
            landmark: 'Begumpet'
        },
        supplies: ['Eng Draw', 'EMF', 'STLD'] // Remove both starting and ending
    }//4
]

//forEach - this will not create a new array/original array - just loops

students.forEach((itrtr, index) => {
    // console.log(`At index ${index} we have ${JSON.stringify(itrtr)}`)
    // console.log(`Email of ${itrtr.name} is ${itrtr.email}`)
    // console.log(`You can call ${itrtr.name} on ${itrtr.phn} 
    // who stays at pincode ${itrtr.address.pincode}`)
    // if(index===0)
    //   itrtr.phn = 101010101010
    if (index == 0) {
        itrtr.supplies.push("JAVA")
    }
    if (index == 1) {
        itrtr.supplies.unshift("DBMS")
    }
    if (index == 2) {
        itrtr.supplies.splice(1, 0, "ADS")
    }
    if (index == 3) {
        itrtr.supplies.splice(1, 1, "C Programming")
    }
    if (index == 4) {
        itrtr.supplies.shift()
        itrtr.supplies.pop()
    }

})


console.log('____', students)

//map - this will create a new array/
//does not change original array -  loops

let updatedStudents = students.map((itrtr, index) => { //shallow copy
    // let updatedItrtr = {...itrtr}
    let updatedItrtr = JSON.parse(JSON.stringify(itrtr)) //deep copy
    if (index == 0) {
        updatedItrtr.supplies.push("JAVA")
    }
    if (index == 1) {
        updatedItrtr.supplies.unshift("DBMS")
    }
    if (index == 2) {
        updatedItrtr.supplies.splice(1, 0, "ADS")
    }
    if (index == 3) {
        updatedItrtr.supplies.splice(1, 1, "C Programming")
    }
    if (index == 4) {
        updatedItrtr.supplies.shift()
        updatedItrtr.supplies.pop()
    }

    return updatedItrtr
})
console.log('__old__', students)
console.log('__new__', updatedStudents)