import {useQuery} from 'react-query';

import {weatherService} from 'shared/services/api/weatherService';

export const useFetchWeather = (lat: number, lon: number) => {
  const {data, error, isLoading, isError} = useQuery(
    ['weather', lat, lon],
    () => weatherService.getWeatherData(lat, lon),
  );

  return {data, error, isLoading, isError};
};
