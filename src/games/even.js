import startGame from '../index.js';
import getRandom from '../utilities.js';

const task = 'Answer "yes" if the number is even. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandom(1, 100);
  const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => startGame(task, getGameData);
