export const convertFahrenheitToCelsius = (
  fahrenheit: number | undefined,
): string => ((fahrenheit || 0) - 273.15).toFixed(0);
