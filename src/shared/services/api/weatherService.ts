import {apiWeather} from '../axiosConfig';

export interface IWeather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  id: number;
  name: string;
}

const getWeatherData = async (
  lat: number,
  lon: number,
): Promise<IWeather | null> => {
  try {
    if (lat && lon) {
      const {data: response} = await apiWeather.get<IWeather>(
        `/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      );

      return response;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Erro ao carregar dados da API');
  }
};

export const weatherService = {getWeatherData};
