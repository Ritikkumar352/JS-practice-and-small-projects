// array

// array of js is resizable and of different dataTypes
const myArray=[1,2,3,4,5]
const myArray1=new Array(1,2,3,4,5,6,7,89,9)
console.log(myArray[0])
console.log(myArray1.length)
const myArray2=['a','b']
console.log(myArray2.length)
console.log(typeof myArray2[0])


// Shallow copy of an object --- share same reference point

// Deep copy --- do not share the same refernece


console.log(myArray2)
console.log(myArray1)

myArray.push(69)
console.log(myArray)
myArray.pop() // pop last element
myArray.unshift(99) // add to the first
myArray.shift() // remove from first


const newArray=myArray.join()
// type -- changes to string
console.log(`type-- ${typeof newArray} ${newArray}`) 


// slice, splice

//** SLICE doesn't change original array */
const a1=myArray.slice(1,4)

console.log(a1)
//********* SPLICE  ************/
const a2=myArray.splice(1,4) // removes this portion from original array 

