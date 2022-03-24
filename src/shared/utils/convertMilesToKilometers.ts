export const convertMilesToKilometers = (miles: number | undefined): string =>
  ((miles || 0) * 1.60934).toFixed(0);
