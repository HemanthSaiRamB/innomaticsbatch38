//filter - find - findIndex

let students = [
    {
        name: 'Hemanth',
        section: 'A'
    },
    {
        name: 'Parimala',
        section: 'B'
    },
    {
        name: 'Charan',
        section: 'A'
    },
    {
        name: 'Rahul',
        section: 'B'
    },
    {
        name: 'Narendra',
        section: 'A'
    },
    {
        name: 'Anjireddy',
        section: 'C'
    },
    {
        name: 'Narsimha',
        section: 'B'
    },
    {
        name: 'Dattu Bhai',
        section: 'D'
    },
    {
        name: 'Hemanth',
        section: 'Sneha'
    },
    {
        name: 'Sindhu',
        section: 'C'
    },
]

// let array = [1,2,3,4,5]
// console.log(array.indexOf(3))

let index_of_narendra = students.findIndex((student) => student.name === 'Narendra')

console.log(index_of_narendra)
