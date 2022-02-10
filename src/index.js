import readlineSync from 'readline-sync';

const game = (generateRound, gameDescription) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const questionAndTrueAnswer = generateRound();
    const goodAnswer = questionAndTrueAnswer[1];
    const question = questionAndTrueAnswer[0];

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== goodAnswer) {
      return console.log(`"${userAnswer}" is wrong answer;(. Correct answer was "${goodAnswer}".\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game;
