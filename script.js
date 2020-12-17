"use strict";
const SCORE_INIT = 20;
const secretValue = Math.trunc(Math.random() * 20) + 1;
let _highscore = 0;
let _score = SCORE_INIT;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const readScore = function () {
  return Number(document.querySelector(".score").textContent);
};

document.querySelector(".check").addEventListener(
  "click",
  () => {
    const guess = Number(document.querySelector(".guess").value);
    const number = document.querySelector(".number");

    if (guess < 1 || guess > SCORE_INIT) {
      displayMessage("No number!");
    } else if (_score === 1) {
      displayMessage("You lost the game!");
    } else if (guess === secretValue) {
      displayMessage("Correct Number!");
      number.textContent = secretValue;
      number.style.width = "30rem";
      document.body.style.backgroundColor = "#24941a";
      if (readScore() > _highscore) {
        document.querySelector(".highscore").textContent = readScore();
        _highscore = readScore();
      }
    } else {
      displayScore(--_score);
      guess < secretValue
        ? displayMessage("Too low!")
        : displayMessage("Too high!");
    }
  },
  false
);

document.querySelector(".again").addEventListener(
  "click",
  () => {
    const number = document.querySelector(".number");

    document.body.style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
    number.textContent = "?";
    number.style.width = "15rem";
    displayScore(SCORE_INIT);
    _score = SCORE_INIT;
  },
  false
);
