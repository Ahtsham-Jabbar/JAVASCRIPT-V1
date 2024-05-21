const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 233.6
// console.log(otherNumber.toPrecision(3));

const hundereds = 1000000
// console.log(hundereds.toLocaleString());

// ******************* MATH ****************************************

// console.log(Math);
// console.log(Math.abs(-3));                          //abs
// console.log(Math.round(23.6));                     //round off
// console.log(Math.ceil(23.6));                      //ceil
// console.log(Math.floor(23.6));                     //floor

// console.log(Math.min(3, 6, 7, 9));
// console.log(Math.max(3, 6, 7, 9));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);