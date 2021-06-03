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

export const getRandom = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1; // random int 1 to 100

export const getArray = () => {
  const step = Math.round(1 + Math.random() * (6 - 1));
  const arrLength = Math.round(7 + Math.random() * (12 - 7));
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
