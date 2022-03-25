import React from 'react';

import {Grid, Typography, useMediaQuery} from '@mui/material';

interface IProps {
  locality?: string;
  state?: string;
  country?: string;
}

export const TitleComponent: React.FC<IProps> = ({
  locality,
  state,
  country,
}) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Grid item xs={12}>
      <Typography
        variant={matches ? 'h4' : 'h6'}
        fontWeight={600}
        align="center">
        {locality}, {state}/{country}
      </Typography>

      <Typography variant={matches ? 'h6' : 'body2'} align="center">
        {new Date().toLocaleDateString()}
      </Typography>
    </Grid>
  );
};
