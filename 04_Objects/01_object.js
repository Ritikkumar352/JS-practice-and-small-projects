// Singleton  -- constructor se singleton banega but literals se nahi

// Object.create -- constructor method

// object literals


const mySym=Symbol("key1")  // Symbol --> data type

const jsUser={
    name:"ritik",
    [mySym]:"key1", // correct way to use symbol mySym:"xyz"-- it's wrong way
    roll:143,
    "my address":"nawada",  // cannot access this using jsUser.address
    "college":"abes"  // can access using .college
}

console.log(jsUser.roll) // one another method to access
// access
console.log(jsUser["name"]) // by default key is considered as string

console.log(jsUser["my address"]) // only way to access
console.log(jsUser.college)

console.log(jsUser[mySym])


jsUser.roll=123
// Object.freeze(jsUser)  // freez any object
jsUser.name="changed name"

// console.log(jsUser)

// function

jsUser.greeting=function(){
    console.log("hello object user");
}
jsUser.greeting2=function(){
    console.log(`hello user ${this.name}`);
}

console.log(jsUser.greeting()+" this ")

console.log(jsUser.greeting2()+" this2 ")