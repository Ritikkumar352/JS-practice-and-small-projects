// fetch().then().catch().finally()
// different ways to convert to JSON x.json()

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task 1 completed");
    resolve();
  }, 1000);
});

// consume promise-- x will receive res from resolve(x)
promiseOne.then(function (x) {
  //this function will run only after execution of promiseOne
  // console.log(x);
  console.log("promise one 1 consumed");
});

// promide 2

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 2000);
}).then(() => {
  console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "ritik", email: "ritkk.co" });
  }, 1000);
});

// parameters passed in resolve can be received in then function (x) automatically

promiseThree.then(function (x) {
  console.log(x);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // or true
    if (!error) {
      resolve({ username: "rkk", pass: "123" });
    } else {
      reject(`Error: something went wrong-promisw four`);
    }
  }, 1000);
});

  promiseFour
    .then((user) => {    // user will receive x from resolve(x)
      console.log(user);
      return user.username;
    })
    .then((username) => {
      // receive returned value (username) from above
      console.log(username);
    })
    .catch(function (err) {
      console.log(err);  // err will receive x from reject(x)
    })
    .finally(() => {
      console.log("finally the promise is either resolved or rejected");
    });

// Using ASYNC Await 

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "js", password1: 123 });
    } else {
      reject(`ERROR: JS went wrong promide 5 `);
    }
  }, 1000);
});

// wait till promiseFive is completed then move ahead

async function consumePromiseFive() {
  try {
    const response = await promiseFive; // await for promiseFive to receive resolve() or reject() value
    console.log(response , "hello");
    console.log(response);
  
  } catch (error) {
    console.log(error, "error aa gaya :-(");
  }
}

consumePromiseFive();

// use any .then() .catch()  or async await


fetch('https://api.github.com/users/ritikkumar352')
.then((res)=>{
  console.log(res);   // this will output first before everyhing
}) 