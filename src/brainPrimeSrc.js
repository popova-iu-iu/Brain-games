import { getRandom } from './index.js';
import game from './preparation.js';

const isPrime = (number) => {
  const count = Math.sqrt(number);
  const countRound = Math.round(count);
  for (let i = 2; i <= countRound;) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const createLap = () => {
  const randomNum = getRandom(0, 50);
  const trueAnswer = isPrime(randomNum);
  const question = `Question: ${randomNum}`;
  return [question, trueAnswer];
};

const startBrainPrime = () => {
  const target = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  game(createLap, target);
};

export default startBrainPrime;
