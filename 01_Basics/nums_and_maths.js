 // toFixed 
 // toPrecision --mdn

number=123.567
console.log(number.toPrecision(4));
const num2=new Number(100)
console.log(num2)

const n=10000000
console.log(n.toLocaleString('en-IN'));
const neg=-4
console.log(Math.abs(neg))
console.log(Math.round(4.6))
console.log(Math.floor(4.9))

console.log(Math.ceil(4.1));

console.log(Math.min(1,4,6,8,9))

// Random

console.log((Math.random()*10)+1)

const min=10
const max=12

// console.log(Math.floor(Math.random() *10) (max-min+1))+min )

console.log(Math.floor(Math.random()*(max-min+1))+min)

// mult by max-min for range and +1 to avoid 0 in result
// +1 to avoid 0 in result 