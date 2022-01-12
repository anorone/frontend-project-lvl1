#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import { getRandomNumber } from '../../src/get-random.js';

const rule = 'What number is missing in the progression?';

const getPair = () => {
  const progressionLength = getRandomNumber(5, 10);
  const startNumber = getRandomNumber(0, 15);
  const step = getRandomNumber(2, 9);

  const numbers = [startNumber];

  for (let i = 1; i < progressionLength; i += 1) {
    const previous = numbers[i - 1];
    numbers[i] = previous + step;
  }

  const lastNumberIndex = progressionLength - 1;
  const hiddenNumberIndex = getRandomNumber(0, lastNumberIndex);

  const correctAnswer = numbers[hiddenNumberIndex].toString();
  numbers[hiddenNumberIndex] = '..';
  const questionText = numbers.join(' ');

  return [questionText, correctAnswer];
};

runTheGame(rule, getPair);
