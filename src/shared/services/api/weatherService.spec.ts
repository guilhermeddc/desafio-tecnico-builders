import axiosMocked from 'axios';

import {weatherService} from './weatherService';

afterEach(() => {
  jest.clearAllMocks();
});

describe('weatherService', () => {
  it('should return an weather', async () => {
    const lat = -23.564;
    const lon = -46.633;
    const weather = {
      weather: [
        {
          description: 'algumas nuvens',
        },
      ],
      main: {
        temp: 292.84,
        humidity: 52,
      },
      wind: {speed: 6.69},
      sys: {
        country: 'BR',
      },
      name: 'Santa Maria',
    };

    jest.spyOn(axiosMocked, 'get').mockResolvedValue({data: weather});

    const result = await weatherService.getWeatherData(lat, lon);

    expect(result).toEqual(weather);
  });

  it('should return null if lat or lon are not defined', async () => {
    const lat = 0;
    const lon = 0;
    const address = null;

    jest.spyOn(axiosMocked, 'get').mockResolvedValue(null);

    const result = await weatherService.getWeatherData(lat, lon);

    expect(result).toEqual(address);
  });

  it('should throw an error if the api returns an error', async () => {
    const lat = -23.564;
    const lon = -46.633;

    jest
      .spyOn(axiosMocked, 'get')
      .mockRejectedValue(new Error('Erro ao carregar dados da API'));

    await expect(weatherService.getWeatherData(lat, lon)).rejects.toThrow(
      'Erro ao carregar dados da API',
    );
  });
});
