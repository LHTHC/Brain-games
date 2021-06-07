import startGame from '../index.js';
import getRandom from '../utilities.js';

const task = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandom(1, 30);
  const step = getRandom(1, 7);
  const progressionLength = getRandom(7, 12);
  const progression = [start];
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const getGameData = () => {
  let question = getProgression();
  const hiddenI = getRandom(1, question.length - 2);
  const rightAnswer = String(question[hiddenI]);
  question[hiddenI] = '..';
  question = question.join(' ');
  const roundData = {
    question,
    rightAnswer,
  };
  return roundData;
};

export default () => startGame(task, getGameData);
