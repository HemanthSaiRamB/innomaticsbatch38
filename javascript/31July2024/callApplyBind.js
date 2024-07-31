//call,apply,bind
let person = {
    greet(a, b, c) {
        console.log(`hi ${this.name}, ${a}-${b}-${c}`)
    }
}
let hemanth = {
    name: 'Hemanth'
}
let sneha = {
    name: 'sneha'
}
person.greet.call(hemanth, 1, 2, 4)
person.greet.apply(sneha, [1, 2, 4])
let bhargav = {
    name: 'bhargav'
}
let bhargavFun = person.greet.bind(bhargav)
bhargavFun(1, 2, 3)