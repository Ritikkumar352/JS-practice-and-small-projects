// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10; // assign 5 or 10 in val1 ,, used in db
let val2 = null ?? 10; // assign 10 as first is null
console.log(val1);
console.log(val2);

let val3 = undefined ?? 15;

console.log(val3);

val1 = null ?? 100 ?? 200; // 100 will be assigned to val1

// ##     TERNIARY OPERATOR  ##  -> different that nullish coal...

// ** condition ? true : false

const price = 100;

price <= 80 ? console.log("less than 80") : console.log("more than 80");
