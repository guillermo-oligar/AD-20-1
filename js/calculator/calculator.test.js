const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 / 10 to equal 1', () => {
  expect(calculator.divide(10, 10)).toBe(1);
});

test('divide -8 / 4 to equal 1', () => {
  expect(calculator.divide(-8, 4)).toBe(-2);
});

test('divide 5 / 0 should throw error', () => {
  expect(() => calculator.divide(5, 0)).toThrow("No se puede dividir por 0");
});

test('multiply 8 * 0 to equal 0', () => {
  expect(calculator.multiply(8, 0)).toBe(0);
});

test('multiply 5 * -2 to equal -10', () => {
  expect(calculator.multiply(5, -2)).toBe(-10);
});