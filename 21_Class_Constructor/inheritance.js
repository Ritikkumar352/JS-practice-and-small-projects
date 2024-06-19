class User {
  constructor(username) {
    this.username = username;
    console.log(`constructor is called`);
  }

  logMe() {
    console.log(`USERNAME i s ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // instead of .call and sendig 'this' it does all the work behind the scene
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course is added by ${this.username}`);
  }
}

const teacher=new Teacher("ritk","asdk@asd.com","123");

teacher.addCourse()

const teacher2=new User("ritik352");
teacher2.logMe()   // User does not have addCourse but Teacher has both addCourse and logMe because of inheritance


console.log(teacher===teacher2);   // false
console.log(teacher instanceof Teacher);   // true