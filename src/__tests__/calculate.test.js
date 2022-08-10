import calculator from '../logic/calculate';

describe('AC Button Click', () => {
  test('Test AC to clear', () => {
    const data = { total: 0, next: null, operation: null };
    const show = { total: 0, next: null, operation: null };
    const result = calculator(data, 'AC');
    expect(result).toEqual(show);
  });

  test('Test AC with null', () => {
    const data = { total: null, next: null, operation: null };
    const show = { total: 0, next: null, operation: null };
    const result = calculator(data, 'AC');
    expect(result).toEqual(show);
  });

  test('Adding numbers', () => {
    const data = { total: '3', next: '2', operation: '+' };
    const show = { total: '5', next: null, operation: null };
    const result = calculator(data, '=');
    expect(result).toEqual(show);
  });

  test('Subtracting numbers', () => {
    const data = { total: '9', next: '6', operation: '-' };
    const show = { total: '3', next: null, operation: null };
    const result = calculator(data, '=');
    expect(result).toEqual(show);
  });
});
