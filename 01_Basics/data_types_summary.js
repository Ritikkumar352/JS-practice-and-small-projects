/*
1. Primitive  (uses stack memory)
-- 7 types
String
Number
Boolean
null --- typeof => Object
undefined
Symbol --(unique value)
BigInt 


2. Non Primitive (refrence type) (heap memory)

    Array
    Objects
    Functions -- typeof function Object

*/


let myObj={
    roll:143
}

let fun=function(){
    console.log("a function")
}
console.log(typeof myObj)

console.log(typeof fun);