const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = nums.map((num) => num + 10)
// console.log(newNums);


// try using forEach
const test=[]
nums.forEach((n)=>{
    test.push(n+10)
})

console.log(test);

let test2=[100,200]

console.log(test2);


//   ###### CHANING ######  //

const num3 = nums
            .map((nums)=>nums*10)
            .map((nums)=>nums+1)   // will receive updated nums e.g--1st nums willl be 10 not 1
            .filter((nums)=>nums>=40)

console.log(num3);
        