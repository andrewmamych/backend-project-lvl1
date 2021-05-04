import { getRandomIntegerInRange } from '../utilities.js';
import startGame from '../index.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 20) => {
  const startNum = getRandomIntegerInRange(minNum, maxNum)();
  const seriesLength = getRandomIntegerInRange(5, 15)();
  const step = getRandomIntegerInRange(-5, 5)();
  const hideNumIndex = getRandomIntegerInRange(0, seriesLength - 1)();

  const series = new Array(seriesLength)
    .fill(0)
    .map((_, i) => startNum + i * step);

  const hiddenNum = series[hideNumIndex];
  series[hideNumIndex] = '..';

  return {
    question: `${series.join(' ')}`,
    answer: String(hiddenNum),
  };
};

export default startGame(
  'What number is missing in the progression?',
  getQuestionAndAnswer,
);
