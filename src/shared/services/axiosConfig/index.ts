import Axios from 'axios';

export const apiWeather = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
