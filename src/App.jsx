import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getLoggedIn } from './services/getLoggedIn';

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
  const [user, setUser] = useState({});

  useEffect(async () => {
    const loggedInUser = await getLoggedIn();
    if (loggedInUser && 'neighbourhoods' in loggedInUser) {
      setToken(loggedInUser.neighbourhoods[0]);
      setUser(loggedInUser);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!token ? (
        <Login setToken={setToken} setUser={setUser} />
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Dashboard token={token} user={user} />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
