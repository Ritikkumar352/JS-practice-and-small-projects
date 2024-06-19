"use strict"; // treat all JS code as newer version


// primitive data type

// number ==> 2^53
// bigint
// string
// boolean -- true or false
// null -- standalone value -- typeof null is *OBJECT*
// symbol -- unique

// object

console.log(typeof Nan)

// "12" => 12
// "12avs"  => NaN  (not a number)
// true  => 1, false => 0
// ""  => false, "fada"=> true

let isLoggedin="ritik"
let value=Boolean(isLoggedin)

console.log(typeof value)


// ************************


// 1. == and 
// 2. < ,> or <= these two work differently 

// === strict check -> no auto conversion