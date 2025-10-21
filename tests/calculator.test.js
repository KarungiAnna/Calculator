const { evaluateExpression } = require('../calculator.js');

describe('Calculator Logic', () => {
  test('adds numbers correctly', () => {
    expect(evaluateExpression('2+3')).toBe(5);
  });

  test('handles subtraction', () => {
    expect(evaluateExpression('10 - 4')).toBe(6);
  });

  test('handles multiplication', () => {
    expect(evaluateExpression('6 * 7')).toBe(42);
  });

  test('handles division', () => {
    expect(evaluateExpression('20 / 5')).toBe(4);
  });

  test('handles parentheses', () => {
    expect(evaluateExpression('(2 + 3) * 4')).toBe(20);
  });

  test('returns error for invalid input', () => {
    expect(evaluateExpression('2 + abc')).toBe('Error');
  });

  test('returns error for divide by zero', () => {
    expect(evaluateExpression('5 / 0')).toBe(Infinity); // JS returns Infinity
  });
});