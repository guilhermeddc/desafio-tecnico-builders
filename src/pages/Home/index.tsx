import React, {useCallback, useEffect, useState} from 'react';
import {useQueryClient} from 'react-query';

import {Button, Divider, Fade, Grid, Stack} from '@mui/material';
import {ErrorPage, LinearDeterminate} from 'shared/components';
import {useFetchData} from 'shared/hooks';

import {
  DegreesComponent,
  DescriptionComponent,
  InfoComponent,
  TitleComponent,
} from './components';

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

  const {data, isLoading, isError, error} = useFetchData(
    position.lat,
    position.lon,
  );

  const handleUpdateWeather = useCallback(() => {
    queryClient.invalidateQueries('weather');
  }, [queryClient]);

  if (isLoading || (position.lat === 0 && position.lon === 0)) {
    return <LinearDeterminate />;
  }

  if (isError) {
    return <ErrorPage message={(error as {message: string}).message} />;
  }

  return (
    <Fade in={!isLoading}>
      <Grid container spacing={4}>
        <TitleComponent
          locality={data?.address?.locality}
          state={data?.address?.principalSubdivision}
          country={data?.weather?.sys?.country}
        />

        <Grid item xs={12}>
          <Stack justifyContent="center" alignItems="center">
            <Button
              onClick={handleUpdateWeather}
              size="large"
              data-testid="update-button">
              Atualizar
            </Button>
          </Stack>
        </Grid>

        <DegreesComponent temp={data?.weather?.main.temp} />

        <DescriptionComponent
          description={data?.weather?.weather[0].description}
        />

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <InfoComponent
          speed={data?.weather?.wind.speed}
          humidity={data?.weather?.main.humidity}
        />
      </Grid>
    </Fade>
  );
};

export default Home;
