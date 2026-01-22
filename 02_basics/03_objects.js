// Singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Prabin",
    "full name": "Prabin Sah",
    [mySym]:"mykey1",
    age: 18,
    location: "Barmajhiya",
    email: "prabin@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])
console.log(typeof(jsUser.mySym))

jsUser.email = "prabin@abc.com"
// Object.freeze(jsUser)
jsUser.email = "prabin@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());















