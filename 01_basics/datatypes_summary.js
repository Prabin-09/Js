// Primitive
// 7 types : String, Number, boolean, null, undefined, Symbol, Bigint

// Statically typed or dymamically typed
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// null returns object datatype
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 234567898765432n


// Reference (Non Primitive)

// Array, Objects, function
// datatypes objects....
const heros = ["shaktiman", "laal", "dhaga"];
let myObj = {
    name: "karan",
    age: 27
}

const myFunction = function (){
    console.log("Hello world");
}
console.log(typeof myFunction)
// function object

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp);
// https://262.ecma-international.org/5.1//#sec-11.4.3



//************************* */

// Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "Prabinsparks"

let anothername = myYoutubename
anothername = "iamprabin"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@123"
}
let userTwo = userOne

userTwo.email = "karan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);