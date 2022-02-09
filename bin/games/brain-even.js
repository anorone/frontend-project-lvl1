#!/usr/bin/env node
import runTheGame from '../../src/index.js';
import buildGetPairFunc from '../../src/build-func.js';
import isEven from '../../src/is-even.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const ranges = [[0, 15]];

const getPair = buildGetPairFunc(isEven);

runTheGame(rule, ranges, getPair);
