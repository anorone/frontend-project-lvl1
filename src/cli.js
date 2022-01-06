import readlineSync from 'readline-sync';

const ask = (questionText) => {
  return readlineSync.question(questionText + ' ');
};

export { ask };
