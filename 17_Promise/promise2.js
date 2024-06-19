// Using ASYNC Await 
// async await doesn't handle errors directly
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
        let error = true;
    if (!error) {
      resolve({ username: "js", password1: 123 });
    } else {
      reject(`ERROR: JS went wrong promise 5 `);
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