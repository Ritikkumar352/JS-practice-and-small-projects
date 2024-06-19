let num = Math.floor(Math.random() * 100) + 1;
const submit = document.getElementById("subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
console.log(guessSlot);
console.log(num);

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(`user entered ${guess}`);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //check input format
  if (guess == "" || isNaN(guess) || guess < 0 || guess > 100) {
    alert("please enter a valid number between 1 and 100");
  } else {
    prevGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${num}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == num) {
    displayMessage(`You guesswd it right`);
    endGame();
  } else if (guess < num) {
    displayMessage(`Number is Too low`);
  } else if (guess > num) {
    displayMessage(`Number is Too High`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`; // pushing new values
  numGuess++;
  remGuess.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); // key value pair
  // re write and watch

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click',function(){
     num = Math.floor(Math.random() * 100) + 1;
     prevGuess=[];
     numGuess=1;
     remGuess.innerHTML = `${11 - numGuess}`;
     guessSlot.innerHTML='';
     userInput.removeAttribute('disabled')
     startOver.removeChild(p);

    playGame=true;
  })
}
