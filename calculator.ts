import * as readline from 'readline';

class Calculator {
  add = (a: number, b: number): number => a + b;
  subtract = (a: number, b: number): number => a - b;
  multiply = (a: number, b: number): number => a * b;
  divide = (a: number, b: number): number => (b !== 0 ? a / b : NaN);
}

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

(async () => {
  const num1 = parseFloat(await getUserInput('Enter the first number: '));
  const num2 = parseFloat(await getUserInput('Enter the second number: '));

  const operation = await getUserInput(
    'Choose operation (+, -, *, /): '
  );

  let result: number;

  switch (operation) {
    case '+':
      result = calculator.add(num1, num2);
      break;
    case '-':
      result = calculator.subtract(num1, num2);
      break;
    case '*':
      result = calculator.multiply(num1, num2);
      break;
    case '/':
      result = calculator.divide(num1, num2);
      break;
    default:
      console.log('Invalid operation');
      rl.close();
      return;
  }

  console.log(`Result: ${result}`);
  rl.close();
})();
