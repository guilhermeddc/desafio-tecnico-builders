import React from 'react';

import {Grid, Box, Stack, Typography} from '@mui/material';
import {outono, solta} from 'shared/assets';
import {convertMilesToKilometers} from 'shared/utils/convertMilesToKilometers';

interface IProps {
  speed?: number;
  humidity?: number;
}

export const InfoComponent: React.FC<IProps> = ({speed, humidity}) => {
  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="space-around">
        <Box display="flex" gap={1}>
          <img src={outono} alt="" width="56px" />
          <Stack>
            <Typography variant="body2">Vento</Typography>
            <Typography variant="h5">
              {convertMilesToKilometers(speed)}km/h
            </Typography>
          </Stack>
        </Box>

        <Box display="flex" gap={1}>
          <img src={solta} alt="" width="56px" />
          <Stack>
            <Typography variant="body2">Umidade</Typography>
            <Typography variant="h5">{humidity}%</Typography>
          </Stack>
        </Box>
      </Box>
    </Grid>
  );
};
