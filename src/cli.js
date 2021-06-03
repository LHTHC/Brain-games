import readlineSync from 'readline-sync';

export const helloGetName = () => {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

export const getRandom = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

export const getArray = () => {
  const step = getRandom(1, 6);
  const arrLength = getRandom(7, 12);
  const arr = [step];
  for (let i = 1; i < arrLength; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  return arr;
};

export const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const calcWithRandOp = (a, b, randOp) => {
  let rightAnswer = 0;

  switch (randOp) {
    case '-':
      rightAnswer = a - b;
      return rightAnswer;
    case '+':
      rightAnswer = a + b;
      return rightAnswer;
    case '*':
      rightAnswer = a * b;
      return rightAnswer;

    default:
      return false;
  }
};
