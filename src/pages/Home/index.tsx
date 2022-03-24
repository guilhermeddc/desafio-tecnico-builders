import React, {useCallback, useEffect, useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';

import {
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import {outono, solta} from 'shared/assets';
import {LinearDeterminate} from 'shared/components';
import {weatherService} from 'shared/services/api/weatherService';
import {convertFahrenheitToCelsius} from 'shared/utils/convertFahrenheitToCelsius';
import {convertMilesToKilometers} from 'shared/utils/convertMilesToKilometers';

const Home: React.FC = () => {
  const [position, setPosition] = useState({lat: 0, lon: 0});

  const queryClient = useQueryClient();

  useEffect(() => {
    if ((position.lat === 0 && position.lon === 0) || !navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geo) => {
        setPosition({lat: geo.coords.latitude, lon: geo.coords.longitude});
      });
    }
  }, [position.lat, position.lon]);

  const {data, isLoading} = useQuery(
    ['weather', position.lat, position.lon],
    () => weatherService.getWeatherData(position.lat, position.lon),
  );

  const handleUpdateWeather = useCallback(() => {
    queryClient.invalidateQueries('weather');
  }, [queryClient]);

  if (isLoading || (position.lat === 0 && position.lon === 0)) {
    return <LinearDeterminate />;
  }

  return (
    <Fade in={!isLoading}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {data?.name} - {data?.sys.country}
          </Typography>
          <Typography variant="h6" align="center">
            {new Date().toLocaleDateString()}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Stack justifyContent="center" alignItems="center">
            <Button onClick={handleUpdateWeather} size="large">
              Atualizar
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Box
            margin="0 auto"
            width={250}
            height={250}
            borderRadius={50}
            bgcolor="#573acc"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow={2}>
            <Typography
              variant="h1"
              align="center"
              color="whitesmoke"
              fontWeight={400}>
              {convertFahrenheitToCelsius(data?.main.temp)}˚C
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h4" align="center" textTransform="capitalize">
            {data?.weather[0].description}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-around">
            <Box display="flex" gap={1}>
              <img src={outono} alt="" width="56px" />
              <Stack>
                <Typography variant="body2">Vento</Typography>
                <Typography variant="h5">
                  {convertMilesToKilometers(data?.wind.speed)}km/h
                </Typography>
              </Stack>
            </Box>

            <Box display="flex" gap={1}>
              <img src={solta} alt="" width="56px" />
              <Stack>
                <Typography variant="body2">Umidade</Typography>
                <Typography variant="h5">{data?.main.humidity}%</Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Home;
