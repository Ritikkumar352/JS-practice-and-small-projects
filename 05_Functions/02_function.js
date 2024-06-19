// ...x --> spread operator and rest operator 

function calculateCartPrice(...num){  // now can pass multiple values (not fixed) in function 
    return num                     // --> array
}

console.log(calculateCartPrice(200,400,600,1000))


 /***  Imp   *****/ // firat two in n1,n2 and rest in array
function calculateCartPrice1(n1,n2,...n){
    return n
}

console.log(calculateCartPrice1(200,400,600,1000,2000))


const user={
    name:"ritik",
    price:499
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}


handelObject(user)

handelObject({
    name:"rrrr",
    price:399
})

const newArr=[1,2,3,4,5,6]
 
function returnArray(arr){
    return arr[1]
}

console.log(returnArray(newArr));
