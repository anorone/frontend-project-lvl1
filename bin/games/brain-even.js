#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import { getRandomNumber } from '../../src/get-random.js';
import isEven from '../../src/is-even.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getPair = () => {
  const randomNumber = getRandomNumber(0, 15);

  const questionText = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [questionText, correctAnswer];
};

runTheGame(rule, getPair);
