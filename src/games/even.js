import game from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getTrueAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateRound = () => {
  const randomNum = getRandom(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startEven = () => game(generateRound, gameDescription);

export default startEven;
