import { getRandomIntegerInRange } from '../utilities.js';
import startGame from '../index.js';

const mapMathOperationsToFn = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};
const mathOperations = Object.keys(mapMathOperationsToFn);

const getQuestionAndAnswer = (minNum = 0, maxNum = 20) => {
  const getNum = getRandomIntegerInRange(minNum, maxNum);
  const operation = mathOperations[getRandomIntegerInRange(0, mathOperations.length - 1)()];

  const x = getNum();
  const y = getNum();
  return {
    question: `${x} ${operation} ${y}`,
    answer: String(mapMathOperationsToFn[operation](x, y)),
  };
};

export default startGame(
  'What is the result of the expression?',
  getQuestionAndAnswer,
);
