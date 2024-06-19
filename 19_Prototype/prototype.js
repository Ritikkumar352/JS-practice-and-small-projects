let myName = "ritik      ";
console.log(myName.length);
console.log(myName.trueLength); // this method is not avl
// create your own method  ###

let myHero = ["thor", "ironman"];

let heroPower = {
  thor: "hammer",
  ironman: "tech and money",

  getIronManPower: function () {
    console.log(`Iron man power is ${this.ironman}`);
  },
};

Object.prototype.ritik = function () {
  console.log("now ritik is present is all objects");
};

// to inject method in array use

// Array.prototype.methodName(){   // this will noth get to objects-- so here for array myHero avl but heroPower won't have this
// code
// }

heroPower.ritik();
myHero.ritik();

// 10 min more 7:50:00 - 8:00:00

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User  // older syntax _ _

// modern syntax

//Object.setPrototypeOf(TeachingSupport,Teacher)   // TeachingSupport is accing all prop of Teacher

// NOW SOLUTION ##### //

let anotherUser = "Ritik           ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.myName}`);
  console.log(`true length is: ${this.trim().length}`);
};

anotherUser.trueLength();

// now use this method with any string

"Stringggg     ".trueLength();
