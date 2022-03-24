import React from 'react';

import {Box, Container} from '@mui/material';

import {AlertComponent} from './components/Alert';

export const BaseLayout: React.FC = ({children}) => {
  return (
    <>
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          minHeight: '100vh',
          p: 2,
        }}>
        <Container maxWidth="sm">{children}</Container>
      </Box>

      <AlertComponent />
    </>
  );
};
