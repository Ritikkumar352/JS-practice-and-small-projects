// // after ES6

// class User {
//   constructor(username, email, password) {   // constructor is called automatically whenever an object is created
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abcEncrypted`;
//   }

//   changeUsernmae() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new User("ritik", "r@emial.com", "pass123");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsernmae());

// behind the scene-- {how it's actually working}

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abcEncrypted`;
};

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}


const r=new User("rr","rr@gmm.com","123")
console.log(r.encryptPassword());
console.log(r.changeUsername());