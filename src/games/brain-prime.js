import { getRandomIntegerInRange, isPrime } from '../utilities.js';
import startGame from '../index.js';

const getQuestionAndAnswer = (minNum = 0, maxNum = 100) => {
  const num = getRandomIntegerInRange(minNum, maxNum)();

  return {
    question: num,
    answer: isPrime(num) ? 'yes' : 'no',
  };
};

export default startGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndAnswer,
);
