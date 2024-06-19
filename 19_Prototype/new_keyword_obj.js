function multiplyBy5(n) {
  return n * 5;
}

multiplyBy5.power1 = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power1);
console.log(multiplyBy5.prototype); // empty {} -- refrence of this is stored in this

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// declare own function

createUser.prototype.increment = function () {
  this.score++; // increase who called it
};

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const ritik = new createUser("riitk", 99);  // new to get new prototype
const ritik2 = createUser("riitk2", 49);  // printMe won't work here because not using new keyword

ritik.printMe()
ritik.increment()
ritik.printMe()


