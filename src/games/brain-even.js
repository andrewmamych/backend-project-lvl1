import { getRandomIntegerInRange, isEven } from '../utilities.js';
import startGame from '../index.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum)();

  return {
    question: num,
    answer: isEven(num) ? 'yes' : 'no',
  };
};

export default startGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestionAndAnswer,
);
