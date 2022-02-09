#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import calc from '../../src/calc.js';

const rule = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const ranges = [[0, 25], [0, 25], [0, signs.length - 1]];

const getPair = (randomNumbers) => {
  const [a, b, signIndex] = randomNumbers;
  const sign = signs[signIndex];

  const questionText = `${a} ${sign} ${b}`;
  const correctAnswer = calc(a, b, sign).toString();

  return [questionText, correctAnswer];
};

runTheGame(rule, ranges, getPair);
