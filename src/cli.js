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
