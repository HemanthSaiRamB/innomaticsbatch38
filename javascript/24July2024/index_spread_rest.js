//...

//spread-expands iterables into individual elements
function abc(args) {// spread
    console.log(...args)
}
abc([1, 2])

//rest - collects multiple value into array
function xyz(...a) {// rest
    console.log(a)
}
xyz(1, 2, 4, 5)