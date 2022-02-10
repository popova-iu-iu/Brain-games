import game from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const progression = (begin, step) => {
  const progressArr = [];
  let k = 0;
  for (let i = begin; progressArr.length < 10; i += step) {
    progressArr[k] = i;
    k += 1;
  }
  return progressArr;
};

const generateRound = () => {
  const num1 = getRandom(0, 20);
  const step = getRandom(2, 10);
  const progressData = progression(num1, step);
  const randomNum = getRandom(0, progressData.length - 1);

  const trueAnswer = String(progressData[randomNum]);
  progressData[randomNum] = '..';
  const question = `Question: ${progressData.join(' ')}`;
  return [question, trueAnswer];
};

const startProgression = () => game(generateRound, gameDescription);

export default startProgression;
