import calculator from '../js_modules/calculator';

describe('Calculator', () => {
  const { add, subtract, multiply, divide } = calculator;
  const a = 10,
    b = 20;

  it('Should add two numbers', () => {
    expect(add(a, b)).toStrictEqual(a + b);
  });

  it('Should subtract two numbers', () => {
    expect(subtract(a, b)).toStrictEqual(b - a);
  });

  it('Should multiply two numbers', () => {
    expect(multiply(a, b)).toStrictEqual(a * b);
  });

  it('Should divide two numbers', () => {
    expect(divide(a, b)).toStrictEqual(b / a);
  });
});
