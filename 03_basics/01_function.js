
function sayMyName(){
console.log("P");
console.log("R");
console.log("A");
console.log("B");
console.log("I");
console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 8)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter the username")
        return    
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prabin"));
console.log(loginUserMessage());









