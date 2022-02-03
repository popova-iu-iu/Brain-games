import readlineSync from 'readline-sync';
import { getNameAndSayHello } from './index.js';

const game = (createLap, target) => {
  const numberOfRounds = 3;
  const name = getNameAndSayHello(target);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const questionAndTrueAnswer = createLap();
    const goodAnswer = questionAndTrueAnswer[1];
    const question = questionAndTrueAnswer[0];

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer != goodAnswer) {
      return console.log(`"${userAnswer}" is wrong answer;(. Correct answer was "${goodAnswer}".\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game;
