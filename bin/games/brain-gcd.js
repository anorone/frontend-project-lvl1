#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import gcd from '../../src/gcd.js';

const rule = 'Find the greatest common divisor of given numbers.';
const ranges = [[1, 50], [1, 50]];

const getPair = (randomNumbers) => {
  const [a, b] = randomNumbers;

  const questionText = `${a} ${b}`;
  const correctAnswer = gcd(a, b).toString();

  return [questionText, correctAnswer];
};

runTheGame(rule, ranges, getPair);
