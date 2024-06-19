const fru=['apple','mango','banana']
const price=['22','55','89']

fru.push(price)  // create nested array -- array inside array

console.log(fru)


// concat

const fru1=['apple','mango','banana','litchi']
const price1=['22','55','89','99']
const newFru=fru1.concat(price1)  // returns new array
console.log(newFru)


// ***SPREAD****/

const allFruites=[...fru1,...price1]  // all are spread
// prefere spread -- spread all elements in allFruits
console.log(allFruites)

// Faltten nesteed array

let arr=[1,2,3,[234,234,324,34],3,4,3,[21,6,3267,56,56]];
console.log(arr.flat(3))  // flat till infinit -- give exact range here 3
console.log(arr.flat(Infinity)) 


// check is Array or not

console.log(Array.isArray(arr))  // true
console.log(Array.isArray("riitk")) // false

console.log(Array.from("ritik")) // convert to array

// imp 
console.log(Array.from({name:"ritijjj"})) // cannot convert ** read mdn


// Array.of combine array from a set of values
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))


// Array.isArray(xyz)
// Array.from(xyz)
// Array.of(s1,s2,s3,s4 )


