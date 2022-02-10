import game from '../index.js';
import getRandom from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getTrueAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateRound = () => {
  const randomNum = getRandom(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [question, trueAnswer];
};

const startEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  game(generateRound, gameDescription);
};

export default startEven;
