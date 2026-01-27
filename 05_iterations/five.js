// const coding = ["js","ruby","python","cpp"]

// const values = coding.forEach((item ) => {
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => num > 4)
// explicit return wala case
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })


// const newNums = []
// myNums.forEach( (num) => {
//     if ( num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1981, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1982, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1922, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2001, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 2008, edition: 2010},
     {title: 'Book Seven', genre: 'Non-Fiction', publish: 1922, edition: 2010},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2014},
    {title: 'Book Nine', genre: 'History', publish: 1999, edition: 2000},
];
let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
   return bk.publish >= 2000 && bk.genre === 'Science'})
console.log(userBooks);

