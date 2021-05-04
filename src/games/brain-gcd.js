import { getRandomIntegerInRange, gcd } from '../utilities.js';
import startGame from '../index.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum);
  const x = num();
  const y = num();

  return {
    question: `${x} ${y}`,
    answer: String(gcd(x, y)),
  };
};

export default startGame(
  'Find the greatest common divisor of given numbers.',
  getQuestionAndAnswer,
);
