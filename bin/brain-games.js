#!/usr/bin/env node
import { ask } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = ask('May I have your name?');
console.log(`Hello, ${userName}!`);
