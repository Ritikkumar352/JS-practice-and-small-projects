const user = {
  username: "riitk",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} is giving ${this.price}`)
    
    // console.log("this in function"+this)
  },
}

user.welcomeMessage()
console.log(this)  // empty object here ,,,, global in browser


function xyz(){
  console.log("this in xyz");
  console.log(this)
}

xyz()




// ******* ARROW   **************/





const xy=()=>{
  console.log(this)  // empty object in arrow function
}
xy()

add=(n1,n2)=>{
  return n1+n2  //[EXPLICT RETURN]
}

add1=(n1,n2)=>(n1+n2)  // no need of retuen keyword  [IMPLIISIT return] OR
add2=(n1,n2)=> n1+n2

const obj=()=>({user1:"ritik"})  // to return use parenthesis () without return keyword... if using {} add return keyword
// const obj=()=>{user1:"ritik"} cannot return object like this in arrow function
console.log(obj())  // returned object from arrow function