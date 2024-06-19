fetch('https://api.github.com/users/ritikkumar352')
.then((res)=>{
  console.log(res);   // this will output first before everyhing -- because of HIGH PRIORITY Queue [in notebook ] 
}) 