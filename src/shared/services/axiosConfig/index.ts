import Axios from 'axios';

export const apiWeather = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const apiBigDataCloud = Axios.create({
  baseURL: 'https://api.bigdatacloud.net/data',
});
