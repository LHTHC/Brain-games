import readlineSync from 'readline-sync';

const helloGetName = () => {
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export { helloGetName };
