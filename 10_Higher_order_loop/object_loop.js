// FOR IN Loop
// gives key only for obj or for arrays

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {   // for in loop provides key of object and array not value
  console.log(key);
  console.log(myObject[key]);
}

