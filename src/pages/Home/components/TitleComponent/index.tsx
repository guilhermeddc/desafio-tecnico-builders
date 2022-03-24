import React from 'react';

import {Grid, Typography} from '@mui/material';

interface IProps {
  name?: string;
  country?: string;
}

export const TitleComponent: React.FC<IProps> = ({name, country}) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" align="center">
        {name} - {country}
      </Typography>
      <Typography variant="h6" align="center">
        {new Date().toLocaleDateString()}
      </Typography>
    </Grid>
  );
};
