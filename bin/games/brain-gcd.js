#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import { getRandomNumber } from '../../src/get-random.js';
import gcd from '../../src/gcd.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getPair = () => {
  const a = getRandomNumber(1, 50);
  const b = getRandomNumber(1, 50);

  const questionText = `${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();

  return [questionText, correctAnswer];
};

runTheGame(rule, getPair);
