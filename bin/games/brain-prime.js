#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import { getRandomNumber } from '../../src/get-random.js';
import isPrime from '../../src/is-prime.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPair = () => {
  const randomNumber = getRandomNumber(1, 50);

  const questionText = randomNumber.toString();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [questionText, correctAnswer];
};

runTheGame(rule, getPair);
