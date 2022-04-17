import {convertMilesToKilometers} from './convertMilesToKilometers';

describe('convertMilesToKilometers', () => {
  it('should convert miles to kilometers', () => {
    expect(convertMilesToKilometers(0)).toBe('0.00');
    expect(convertMilesToKilometers(1)).toBe('1.61');
    expect(convertMilesToKilometers(2)).toBe('3.22');
    expect(convertMilesToKilometers(3)).toBe('4.83');
    expect(convertMilesToKilometers(4)).toBe('6.44');
    expect(convertMilesToKilometers(5)).toBe('8.05');
  });
});
