import React from 'react';

import {Grid, Typography} from '@mui/material';

interface IProps {
  description?: string;
}

export const DescriptionComponent: React.FC<IProps> = ({description}) => {
  return (
    <Grid item xs={12}>
      <Typography variant="h4" align="center" textTransform="capitalize">
        {description}
      </Typography>
    </Grid>
  );
};
