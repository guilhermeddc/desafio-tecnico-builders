import React from 'react';

import {Grid, Box, Typography} from '@mui/material';
import {convertFahrenheitToCelsius} from 'shared/utils/convertFahrenheitToCelsius';

interface IProps {
  temp?: number;
}

export const DegreesComponent: React.FC<IProps> = ({temp}) => {
  return (
    <>
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
            {convertFahrenheitToCelsius(temp)}˚C
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
