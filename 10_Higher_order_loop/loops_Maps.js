//For of loop  --> works for array object or string

const arr=[1,2,3,4] 


for (const n of arr) {
   console.log(n);
}

const greet="hello"


for(const s of greet){
   console.log(s);
}

// ##  MAPS  ##
// map is not iteratable

const map=new Map()
map.set('1',"ritik")
map.set('2',"singh")
console.log(map.get('1'));
console.log(map.get('2'));

console.log(map);

for (const key of map) {
    console.log(key);  // arrays of key and value
}

for (const [key,value] of map) {  // destructur of array
    console.log(key+":- "+value);  
}



const myObj={
    name:"ritik",
    roll:143
}

console.log(myObj.name)



// for (const x of myObj) {    --> not iterable
//     console.log(x);

// }



// ## OR   

const myObj2=new Object()

myObj2.name="ritikkk"
myObj2.roll=123

console.log(myObj2);