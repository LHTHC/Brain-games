import startGame from '../index.js';
import getRandom from '../utilities.js';

const task = 'What is the result of the expression?';

const calc = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const getGameData = () => {
  const a = getRandom(1, 30);
  const b = getRandom(1, 30);
  const operations = '-*+';
  const randomId = getRandom(0, operations.length - 1);
  const randomOperator = operations[randomId];
  const question = `${a} ${randomOperator} ${b}`;
  const rightAnswer = String(calc(a, b, randomOperator));
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => startGame(task, getGameData);
