// if
// if (condition){

// }


if (2 === 2){
    console.log("executed");
}

//  <, >, <=, >=, ==, !=, ===

const UserloggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if ( UserloggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}