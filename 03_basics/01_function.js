
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

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter the username")
        return    
    }
    return `${username} just logged in`
}

    // if(!username){
    //     console.log("Please enter the username")
    //     return    
    // }
// console.log(loginUserMessage("prabin"));
// console.log(loginUserMessage("samm"));

function calculateCartPrice(val1,val2, ...num1){// ... is a rest operator
    return num1
}
// console.log(calculateCartPrice(200,400,500, 2000))

const user ={
    username: "prabin",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 1000]));

