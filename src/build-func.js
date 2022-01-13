import { getRandomNumber } from './get-random.js';

const buildGetPairFunc = (range, predicateFunc) => () => {
  const randomNumber = getRandomNumber(range[0], range[1]);

  const questionText = randomNumber.toString();
  const correctAnswer = predicateFunc(randomNumber) ? 'yes' : 'no';

  return [questionText, correctAnswer];
};

export default buildGetPairFunc;
