import game from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNum = getRandom(1, 50);
  const trueAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startPrime = () => game(generateRound, gameDescription);

export default startPrime;
