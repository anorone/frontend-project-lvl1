#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import { getRandomNumber, getRandomFrom } from '../../src/get-random.js';
import calc from '../../src/calc.js';

const rule = 'What is the result of the expression?';

const getPair = () => {
  const a = getRandomNumber(0, 25);
  const b = getRandomNumber(0, 25);
  const sign = getRandomFrom(['+', '-', '*']);

  const questionText = `${a} ${sign} ${b}`;
  const correctAnswer = calc(a, b, sign).toString();

  return [questionText, correctAnswer];
};

runTheGame(rule, getPair);
