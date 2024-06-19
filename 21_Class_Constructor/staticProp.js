class User {
  // class
  constructor(username) {
    // constructor
    this.username = username;
  }

  logme() {
    // methods
    console.log(`username: ${this.username}`);
  }

  static createId() {
    // Static methods-- but obj [obj of this class] cannot access this method
    return `123`;
  }
}

const Ritik = new User("ritikkkk");

// console.log(Ritik.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const t = new Teacher("tttt", "t@email.com");

console.log(t);

t.logme()

// console.log(t.createId());  // cannot access here also
