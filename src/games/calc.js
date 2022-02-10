import game from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'What is the result of expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('unsopported operator');
  }
};

const generateRound = () => {
  const indexOfOperators = getRandom(0, 2);

  const num1 = getRandom(0, 10);
  const num2 = getRandom(0, 10);

  const randomOperator = operators[indexOfOperators];

  const trueAnswer = String(calculate(num1, randomOperator, num2));
  const question = `Question: ${num1} ${operators[indexOfOperators]} ${num2}`;
  return [trueAnswer, question];
};

const startCalc = () => game(generateRound, gameDescription);

export default startCalc;
