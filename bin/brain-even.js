#!/usr/bin/env node
import ask from '../src/cli.js';
import getRandomNumber from '../src/get-random-number.js';
import isEven from '../src/is-even.js';

console.log('Welcome to the Brain Games!');

const userName = ask('May I have your name?');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const questionsCount = 3;
let score = 0;
let question;

for (question = 1; question <= questionsCount; question += 1) {
  const randomNumber = getRandomNumber(0, 15);
  console.log(`Question: ${randomNumber}`);

  const userAnswer = ask('Your answer:');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}

if (score === questionsCount) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
