// IIFE

(() => {
  console.log("DB Connected 1");
})();

//       ()()
// function execute
// ()(); ';' to stop invoked function

(() => {
  console.log("DB Connected 2");
})();

(function abc() {
  // named IFFE --> name is abc and other is unnamed iffe
  console.log(`DB connected 3`);
})();

((dbName) => console.log(`${dbName} is connected`))("ritik's Db");
((dbName) => {
  console.log(`${dbName} 2 is connecteed`);
})("ritik db");
