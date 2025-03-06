const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const calculation = req.query.calculation;
  const result = calculate(calculation);
  res.json({ result });
});

function calculate(calculation) {
  switch (calculation) {
    case 'add':
      return add();
    case 'subtract':
      return subtract();
    case 'multiply':
      return multiply();
    case 'divide':
      return divide();
    default:
      throw new Error(`Unknown calculation ${calculation}`);
  }
}

function add() {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  return num1 + num2;
}

function subtract() {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  return num1 - num2;
}

function multiply() {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  return num1 * num2;
}

function divide() {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num1 / num2;
}
