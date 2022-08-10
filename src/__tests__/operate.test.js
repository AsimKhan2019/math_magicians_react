import operate from '../logic/operate';

describe('Testing Multiple Operations', () => {
  test('Multiplying numbers', () => {
    expect(operate(6, 4, 'x')).toBe('24');
  });

  test('Modulus numbers', () => {
    expect(operate(444, 5, '%')).toBe('4');
  });
});
