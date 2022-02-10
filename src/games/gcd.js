import game from '../index.js';
import getRandom from '../utils.js';

const gcd = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return gcd(secondNum, firstNum % secondNum);
};

const generateRound = () => {
  const num1 = getRandom(0, 20);
  const num2 = getRandom(0, 20);

  const trueAnswer = String(gcd(num1, num2));
  const question = `Question: ${num1} ${num2}`;
  return [question, trueAnswer];
};

const startGcd = () => {
  const target = 'Find the greatest common divisor of given numbers.';

  game(generateRound, target);
};

export default startGcd;
