function SetUsername(username) {
  // some complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, pass) {
  // this.username=username;
  SetUsername.call(this, username); // ### now calling .call to hold refrence and passing this of createUser to save username in that this -- [use super (new way)]
  // setUsername save usernme in createUser's this not in his own this, because this this will be disolved after execution
  this.email = email;
  this.pass = pass;
}

const ritik = new createUser("ritik", "ri@m.asm", "1234");
console.log(ritik);
