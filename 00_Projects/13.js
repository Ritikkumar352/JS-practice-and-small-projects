// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const para = document.querySelector("p");

//### 1. using XMLHttpRequest

// let xhr;
// let data;
// btn.addEventListener(
//   "click",
//   () => {
//     xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         data = JSON.parse(this.responseText);
//         console.log(data);
//         console.log(typeof data);
//         console.log(data.value);
//         para.innerText=data.value;
//       }
//     };

//     xhr.send();
//   },
//   false
// );
// console.log(data.value);

//### 2. using Promises
const Responsepromise = new Promise(function (resolve, reject) {
  const response = fetch("https://api.chucknorris.io/jokes/random");
  resolve(response);
});

Responsepromise.then((response) => {
  console.log(response);
  return response.json();
}).then((res) => {
  console.log(res);
  console.log(res.value);
  para.textContent=res.value
});


//  1st TRY

// const response=new Promise(function(resolve,reject){
//   try {
//     const result=fetch("https://api.chucknorris.io/jokes/random");
//     console.log(result);
//   } catch (error) {
//     console.log(`Got an ERROR while fetching :: ${error}`);
//   }
// })
