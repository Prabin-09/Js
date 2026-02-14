const user = {
    username: "Prabin",
    loginCount: 8,
    signedIn: true, 

    getUserDetails: function(){
        // console.log("Got User Details from database")
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

const user2 = {
    username: "Hariya",
    loginCount: 81,
    signedIn: true, 

    getUserDetails: function(){
        // console.log("Got User Details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }



    return this
}

const userOne = new User("Prabin", 12,true)
const userTwo = new User("Hariya",12, true)
console.log(userOne.constructor);
// console.log(userTwo);

// const promiseOne = new Promise()
// const date = new Date()


// new keyword
//1. create a empty object (new instance)
//2. Constructor function is called  due to new keyword
//3.argument got injected in this keyword
//4.you get the function..