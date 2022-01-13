#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import buildGetPairFunc from '../../src/build-func.js';
import isPrime from '../../src/is-prime.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numberRange = [1, 50];

const getPair = buildGetPairFunc(numberRange, isPrime);

runTheGame(rule, getPair);
