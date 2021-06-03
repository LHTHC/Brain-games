import readlineSync from 'readline-sync';
import {
  helloGetName, gcd, getRandom, getArray, isPrime, calcWithRandOp,
} from './cli.js';

export const evenGame = () => {
  const userName = helloGetName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(1, 100);
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

export const calcGame = () => {
  const userName = helloGetName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom(1, 30);
    const b = getRandom(1, 30);
    const ops = '-*+';
    const randOp = ops[getRandom(0, 2)];
    const RightAnswer = calcWithRandOp(a, b, randOp).toString();
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
    const a = getRandom(1, 100);
    const b = getRandom(1, 100);
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

export const progGame = () => {
  const userName = helloGetName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = getArray();
    const hiddenI = getRandom(1, arr.length - 2);
    const RightAnswer = arr[hiddenI].toString();
    arr[hiddenI] = '..';
    console.log(`Question: ${arr.join(' ')}`);
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

export const primeGame = () => {
  const userName = helloGetName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(1, 100);
    const RightAnswer = isPrime(num).toString();
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
