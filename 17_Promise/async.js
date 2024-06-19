async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();  // will take time to receive and convert 
    console.log(typeof response);
    console.log(response);
    console.log(typeof data);
  } catch (error) {
    console.log("E", error);
  }
}

// getAllUsers();

const res=fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(typeof response);
    // console.log(response);
    return response.json()
})
.then((chainData)=>{
    console.log(chainData);
})
.catch((err)=>{
    console.log("OOPS! got and error", err);
})

console.log("test");  // this will be printed first as all others are waiting for the response

// then starts only after completion of fetch and 
// next then starts executin only after execution of prev then blockjj