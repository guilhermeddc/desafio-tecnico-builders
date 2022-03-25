import {useQuery} from 'react-query';

import {addressService} from 'shared/services/api/addressService';
import {weatherService} from 'shared/services/api/weatherService';

export const useFetchData = (lat: number, lon: number) => {
  const {data, error, isLoading, isError} = useQuery(
    ['weather', lat, lon],
    async () => {
      const resWeather = await weatherService.getWeatherData(lat, lon);
      const resAddress = await addressService.getAddress(lat, lon);

      return {address: resAddress, weather: resWeather};
    },
  );

  return {data, error, isLoading, isError};
};
