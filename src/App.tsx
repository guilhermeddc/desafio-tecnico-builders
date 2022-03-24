import React from 'react';
import {QueryClientProvider} from 'react-query';

import {CssBaseline, ThemeProvider} from '@mui/material';
import {Routes} from 'routes';
import {queryClient} from 'shared/services/queryClient';
import {theme} from 'shared/styles/theme';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
        <CssBaseline />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
