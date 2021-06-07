import startGame from '../index.js';
import getRandom from '../utilities.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const a = getRandom(1, 50);
  const b = getRandom(1, 50);
  const question = `${a} ${b}`;
  const rightAnswer = String(getGcd(a, b));
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => startGame(task, getGameData);
