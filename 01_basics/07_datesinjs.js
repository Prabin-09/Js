let myDate = new Date()
// console.log(myDate.toString());
// Tue Jan 20 2026 19:21:35 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());
// // Tue Jan 20 2026
// console.log(myDate.toISOString());
// //2026-01-20T19:21:35.887Z
// console.log(myDate.toJSON());
// // 2026-01-20T19:21:35.887Z
// console.log(myDate.toLocaleDateString());
// // 1/20/2026
// console.log(myDate.toLocaleString());
// // 1/20/2026, 7:21:35 PM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 0, 23, 5,3)
// let myCreatedDate = new Date("2026-01-23")
let myCreatedDate = new Date("01-23-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// string interpolation ``
// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})