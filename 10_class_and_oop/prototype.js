// let myName = "prabin     "
// let mychannel = "haria     "

// console.log(myName.tureLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prabin = function(){
    console.log(`Prabin is present in all objects`)
}

Array.prototype.heyPrabin = function(){
    console.log(`Prabin says Hello`)
}
// heroPower.prabin()
// myHeros.prabin();
// myHeros.heyPrabin();
// heroPower.heyPrabin()

// Inheritance

const User ={
    name: "Hariya",
    email: "hariya@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "Hariya     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)

}

anotherUsername.trueLength()
"Hariya".trueLength()
"icetea".trueLength()