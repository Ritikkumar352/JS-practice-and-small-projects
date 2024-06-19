const lang = ["c", "java", "python"];

lang.forEach(function (item) {
  // console.log(item)
});

const lang2 = ["c", "java", "python"];

lang2.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  console.log(item);
}

lang.forEach(printMe);

lang.forEach((item, index, array) => {
  console.log(item, index, array);
});

// array of objects

const lang3 = [
  {
    langName: "javascript",
    sname: "js",
  },
  {
    langName: "typecript",
    sname: "ts",
  },
  {
    langName: "javascript",
    sname: "ps",
  },
];


lang3.forEach((iteam)=>{
    console.log(iteam.sname);
})