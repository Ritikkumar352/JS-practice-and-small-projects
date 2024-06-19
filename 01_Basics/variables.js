const acId=123;
var name="riitk";  // don't use , because of issue in scope
let city="tokyo";
state="kashmir"; // possible but not a good idea
let a;

// acId=143;  // not allowed
console.log(acId)
console.log(state)
console.log(typeof(state))
state="goa";
console.table([acId,name,city,state,a])



