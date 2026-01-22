// const tinderUser = new Object() singleton user
const tinderUser = new Object() // non singleton user

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Prabin",
            lastname: "sah"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1, obj2 }  //{} is target and obj1,2,3 are source
// const obj3 = Object.assign({}, obj1, obj2,obj4) // object assign mdn
const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "prabin@gmail.com"
    },
    {
        id: 1,
        email: "prabin@gmail.com"
    },
    {
        id: 1,
        email: "prabin@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object   destructuring........
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sam"
}

// course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Prabin",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
