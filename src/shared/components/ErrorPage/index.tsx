import React from 'react';

import {ErrorRounded} from '@mui/icons-material';
import {Box, Typography} from '@mui/material';

interface IProps {
  message: string;
}

export const ErrorPage: React.FC<IProps> = ({message}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
      <ErrorRounded color="error" fontSize="large" />
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};
