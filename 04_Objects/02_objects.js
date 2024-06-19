const tinderUser=new Object()
// or both are same decleration
const tinderUser2={}

tinderUser.id="123"
tinderUser.name="ritik"
tinderUser.msg="tinder user 1"

// console.log(tinderUser);

const user={
    email:"riitk@gmail.com",
    fullName:{  // nested object
        fname:"ritik",
        lastNmae:"kumar"
    }
}

console.log(user.fullName.fname)


// combine object -- ASSIGN
const target={a:1,b:2}
const source={b:4,c:5}

const returnTarget=Object.assign(target,source)
// or use
// Object.assign({},source1,source2,s3,s4)--> {} is the target and all others are source

// console.log(target);
// console.log(returnTarget);

const returnTarget1=Object.assign({},target,source) //--?

// console.log(target);
// console.log(returnTarget1);


// Spread in Objects

const obj1={a:1,r:2}
const obj2={b:4,c:5}

const obj3={...obj1,...obj2}  // most used
console.log(obj3);


// value from db

const user2=[   // array of objects
    {   
        id:"123",
        email:"email1"
    },
    {
        
        id:"234",
        email:"emai2"
    }
]

console.log(user2[0].email)

// *************** //

console.log(tinderUser);

// returns all key / value of this object in string array
console.log(Object.keys(tinderUser))  
console.log(Object.values(tinderUser))  
console.log(Object.entries(tinderUser))   // key value array
console.log(tinderUser.hasOwnProperty("id"))   
console.log(tinderUser.hasOwnProperty("name5"))