// Date

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())

console.log(myDate.toJSON())

console.log(myDate.getUTCFullYear())

console.log(myDate.getMonth())  // ? mdn


console.log(myDate.getFullYear())


console.log(myDate.toLocaleString())

// IMp** //

console.log(typeof myDate);

const myOwnDate=new Date(2010,4,10)   // yyyy,mm,dd  ,,01 -feb
const myOwnDate1=new Date(2010,4,10,5,3,4) 
const myOwnDate2=new Date("01-10-2024") // 01- jan  
console.log(myOwnDate.toDateString());
console.log(myOwnDate1.toLocaleDateString());
console.log(myOwnDate2.toDateString())



// Time stamps

let myTimeStamp=Date.now();
console.log(myTimeStamp)
console.log(myOwnDate1.getTime()) // .getTime date in milisecond

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()

console.log(newDate.getMonth()+1)  // coze starting from 0

//toLocaleString -- mdn