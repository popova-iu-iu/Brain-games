import readlineSync from 'readline-sync';

export const getRandom = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};

export const getNameAndSayHello = (target) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(target);
  return name;
};

export const game = (createLap, target) => {
  const numberOfRounds = 3;
  const name = getNameAndSayHello(target);

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const questionAndTrueAnswer = createLap();
    const goodAnswer = questionAndTrueAnswer[1];
    const question = questionAndTrueAnswer[0];

    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() !== goodAnswer.toString()) {
      return console.log(`"${userAnswer}" is wrong answer;(. Correct answer was "${goodAnswer}".\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};
