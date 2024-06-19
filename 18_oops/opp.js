// object
const user = {
  username: "riitk",
  pass: "123",
  singnedIn: true,
  getUser: function () {
    console.log("got user details from DB");
    console.log(this.username); // this for current context
  },
};

console.log(user.pass);
console.log(user.getUser());

// Constructor function

// const promiseOne = new Promise();
// const date = new Date();

function users(username, age) {
  this.username = username;
  this.age = age;

  return this; // try this ,, BTW no need to use
}

const userOne = users("ritik", 30);
console.log(userOne); // printing this also
console.log(userOne.age);

// ### IMP ####
// const userTwo=users("RRRRRRR",99)  // will overwrite userOne
// console.log(userOne);

// hence using constructor we get a new copy using new()

const userTwo = new users("RRRRRRR", 99); // this will not overwrite userOne as it's a new copy
console.log(userOne);
