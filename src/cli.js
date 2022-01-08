import readlineSync from 'readline-sync';

const ask = (questionText) => readlineSync.question(`${questionText} `);

export default ask;
