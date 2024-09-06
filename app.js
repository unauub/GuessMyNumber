'use strict';

let secretNb = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNb = Number(document.querySelector('.guess').value);
  console.log(guessNb, typeof guessNb);

  if (!guessNb) {
    document.querySelector('.message').textContent = '🛑 No Number!';
  } else if (guessNb === secretNb) {
    document.querySelector('.message').textContent = '🎉 Yaaay It is True';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNb;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
  } else if (guessNb > secretNb) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNb < secretNb) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNb = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
