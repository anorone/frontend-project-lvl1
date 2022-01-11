import ask from './cli.js';

const runTheGame = (rule, getPair) => {
  console.log('Welcome to the Brain Games!');

  const userName = ask('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(rule);

  const questionsCount = 3;
  let score = 0;
  let question;

  for (question = 1; question <= questionsCount; question += 1) {
    const taskTerms = getPair();

    const questionText = taskTerms[0];
    console.log(`Question: ${questionText}`);

    const userAnswer = ask('Your answer:');
    const correctAnswer = taskTerms[1];

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  if (score === questionsCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default runTheGame;