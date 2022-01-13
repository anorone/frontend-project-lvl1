#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import buildGetPairFunc from '../../src/build-func.js';
import isEven from '../../src/is-even.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberRange = [0, 15];

const getPair = buildGetPairFunc(numberRange, isEven);

runTheGame(rule, getPair);
