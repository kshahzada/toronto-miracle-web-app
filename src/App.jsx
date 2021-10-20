import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getLoggedIn } from './api/apiMethods';
import { UserContext } from './contexts/UserContext';

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
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const loggedInUser = await getLoggedIn();
    if (loggedInUser && 'neighbourhoods' in loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <BrowserRouter>
            <Switch>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </BrowserRouter>
        )}
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
