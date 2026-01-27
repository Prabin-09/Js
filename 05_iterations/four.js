const myObject ={
    js: "javascript",
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmig = ["js", "rb", "py", "java", "cpp"]
for (const key in programmig){
    // console.log(programmig[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('NP', "Nepal")
// map.set('USA', "United States Of America")


// for (const key in map) {
//     console.log(key);
// }



// *********** for each ********** higher order function

const coding =[ "js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// })


// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
     {
        languageName: "java",
        languageFileName: "java"
    },
     {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach ((item) => {

    console.log(item.languageName);

})

