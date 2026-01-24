const user = {
    username: "prabin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "prabin"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "prabin"
//     console.log(this.username);
// }


const chai = () =>{
    let username = "prabin"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// ****** implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "prabin"})

console.log(addTwo(3, 4))

// const myArray = [2,3,5,6,7]