const marvelHeros = ["Spiderman", "IronMan", "AntMAn"]
const DcHeros = ["Superman", "Shaktiman", "THOR"]

let AllHeros = marvelHeros.concat(DcHeros)
// console.log(AllHeros);

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]
let array3 = array1.concat(array2)
// console.log(array3);

let numbers = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]]
// console.log(numbers.flat(Infinity));

console.log(Array.isArray("Ahtsham"));
console.log(Array.from("Ahtsham"));
console.log(Array.from({ array: "Ahtsham" }));

let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3));

// +++++++++++++++ Note ++++++++++++++++

// Learn about ISArray, OfArray and fromArray