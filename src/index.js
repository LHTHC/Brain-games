import readlineSync from 'readline-sync';
import { helloGetName, gcd, getRandom } from './cli.js';

export const evenGame = () => {
  const userName = helloGetName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom();
    const RightAnswer = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== RightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${RightAnswer}'`);
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

const ops = ['+', '-', '*'];

export const calcGame = () => {
  const userName = helloGetName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom();
    const b = getRandom();
    const randOp = ops[Math.floor(Math.random() * 3)];
    const RightAnswer = (eval(`${a} ${randOp} ${b}`).toString());
    console.log(`Question: ${a} ${randOp} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== RightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${RightAnswer}'`);
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

export const gcdGame = () => {
  const userName = helloGetName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom();
    const b = getRandom();
    const RightAnswer = gcd(a, b).toString();
    console.log(`Question: ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== RightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${RightAnswer}'`);
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
