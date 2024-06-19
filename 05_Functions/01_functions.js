function sayMyName(){  // parameters
    console.log("riitk")
}


sayMyName() // arguments

function add1(n1,n2){
     console.log(n1+n2)
}

function add(n1,n2,n3){
    return n1+n2+n3
}

let result1=add1(2,3)  // result is undefined
let result2=add(1,2,3)  // 

// console.log(result1)
// console.log(result2)


function loginMsg(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just loggedin`
}

console.log(loginMsg("ritik352"))
console.log(loginMsg()) //--> undefined if no argument is passed