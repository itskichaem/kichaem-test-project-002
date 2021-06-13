import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import UIProvider from 'src/contexts/UI';
import Routes from 'src/routes/AppRoutes';
import theme from 'src/theme/default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <UIProvider>
          <Routes />;
        </UIProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
