const buildGetPairFunc = (predicate) => (randomNumbers) => {
  const randomNumber = randomNumbers[0];

  const questionText = randomNumber.toString();
  const correctAnswer = predicate(randomNumber) ? 'yes' : 'no';

  return [questionText, correctAnswer];
};

export default buildGetPairFunc;
