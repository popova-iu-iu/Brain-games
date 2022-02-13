import readlineSync from 'readline-sync';

const game = (generateRound, gameDescription) => {
  const numberOfRounds = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [answer, question] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer;(. Correct answer was "${answer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
