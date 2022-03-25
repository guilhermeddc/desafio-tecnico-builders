import React from 'react';

import {Grid, Typography, useMediaQuery} from '@mui/material';

interface IProps {
  description?: string;
}

export const DescriptionComponent: React.FC<IProps> = ({description}) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Grid item xs={12}>
      <Typography
        variant={matches ? 'h4' : 'h5'}
        align="center"
        textTransform="capitalize">
        {description}
      </Typography>
    </Grid>
  );
};
