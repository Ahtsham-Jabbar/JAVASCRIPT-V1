// Primitive DataTypes
// Number, String, Boolean, Null, Undefined, BigInt, Symbol


const emailId = 123456
let accountName = "Ahtsham"
let isLoggedIn = false
let outerTemp = null
let myCity = "sahiwal"
const BigInt = 242343245325325

let accountNumber = Symbol('234')
let accountNumber2 = Symbol('234')

console.log(accountNumber === accountNumber2);

// Non Primitive DataTypes ( Reference )
// Arrays, Objects, Functions

let mySuperhero = [ "shaktiman", "Superman" , "Homelander"]
console.log(mySuperhero);

let myObj = {
    name: "ahtsham",
    id : 234,
    isloggedoff: false
}

console.log(myObj);


let myFunction = function() {
    console.log("Hello Baby");
}
console.log(myFunction);

// console.log(typeof (accountNumber));