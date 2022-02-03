import { getRandom } from './index.js';
import game from './preparation.js';

const isEven = (number) => (number % 2 === 0);

const getTrueAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const createLap = () => {
  const randomNum = getRandom(0, 100);
  const trueAnswer = getTrueAnswer(randomNum);
  const question = `Question: ${randomNum}`;
  return [question, trueAnswer];
};

const startGame = () => {
  const target = 'Answer "yes" if the number is even, otherwise answer "no".';

  game(createLap, target);
};

export default startGame;