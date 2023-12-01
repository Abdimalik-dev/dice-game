//write code here

let dice = Math.floor(Math.random() * 6) + 1. // random dice number from 1 - 6
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const score1 = document.querySelector("#score--0");
const score2 = document.querySelector("#score--1");
const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
const ludo = document.querySelector(".dice");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = false;

score1.innerText = 0;
score2.innerText = 0;
current1.innerText = 0;
current2.innerText = 0;

function switchP() {
  currentScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (!playing) return;
  
  const dice = Math.floor(Math.random() * 6) + 1;
  ludo.src = "dice-" + dice + ".png";

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector("#current--" + activePlayer).innerText = currentScore;
  } else {
    switchP();
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (!playing) return;
  
  scores[activePlayer] += currentScore;
  document.querySelector("#score--" + activePlayer).innerText = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    ludo.classList.add("hidden");
    document.querySelector(".player--" + activePlayer).classList.add("player--winner");
    playing = false;
  } else {
    switchP();
  }
});
document.querySelector(".btn--new").addEventListener("click", function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.innerText = 0;
  score2.innerText = 0;
  current1.innerText = 0;
  current2.innerText = 0;

  ludo.classList.remove("hidden");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
});