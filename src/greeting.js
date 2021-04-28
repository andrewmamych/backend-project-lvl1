import ask from './cli.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default sayHello;
