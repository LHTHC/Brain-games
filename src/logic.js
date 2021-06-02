import readlineSync from 'readline-sync';
import { helloGetName } from '../src/cli.js';

const getRandom = () => Math.floor(Math.random() * (100 - 1 + 1) ) + 1;   //random int from 1 to 100

const evenGame = () => {
  const userName = helloGetName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const RightAnswer = (num % 2 === 0) ? 'yes' : 'no'; 
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== RightAnswer) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (answer === RightAnswer && i === 2) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
      break;
          }
    if (answer === RightAnswer) {
console.log('Correct!');
    }
  }
};

export { evenGame };
