import math from 'mathjs';

const calculate = (input) => {
  const result = math.evaluate(input);
  return result;
};

export default calculate;