import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#199ed9',
    },
    secondary: {
      main: '#000000',
    },
    info: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
  typography: {
    fontFamily: ['Spartan', 'sans-serif'].join(','),
  },
});

function App() {
  const [token, setToken] = useState('');

  return (
    <ThemeProvider theme={theme}>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Dashboard setToken={setToken} />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
