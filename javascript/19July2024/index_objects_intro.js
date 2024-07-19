// objects and arrays
// let student1_name = 'manasa'
// let student2_name = 'parimala'
//key-value pair - JSON
let student1 = {
    name: 'Hemanth', // property
    age: 100,
    phn: 920932093023,
}

let student2 = {
    name: 'Sai Ram', // property
    age: 100,
    phn: 920932093023,
    male: true,
    address: {
        pincode: 3029302,
        landmark: 'kjsndli'
    },
    'Email Id': 'he@g.com'
}
console.log(typeof student1)
console.log(typeof student2)
console.log(student2.age)
console.log(student2['Email Id'])