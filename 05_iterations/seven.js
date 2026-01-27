//
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currval){
//     console.log(`acc: ${accumulator} and currval: ${currval}`)
//     return accumulator + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0) 

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 2999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)


console.log(priceToPay);

