import {convertFahrenheitToCelsius} from './convertFahrenheitToCelsius';

describe('convertFahrenheitToCelsius', () => {
  it('should convert fahrenheit to célsius', () => {
    expect(convertFahrenheitToCelsius(0)).toBe('-273.15');
    expect(convertFahrenheitToCelsius(32)).toBe('-241.15');
    expect(convertFahrenheitToCelsius(212)).toBe('-61.15');
  });
});
