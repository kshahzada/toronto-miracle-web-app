import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { UserContext } from '../contexts/UserContext';
import { logout } from '../api/apiMethods';
import tmLogo from '../assets/torontomiracle_2021_logo_LOGO MAIN.png';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function Header() {
  const { setUser } = useContext(UserContext);

  const [logoutErrorShow, setLogoutErrorShow] = React.useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();

    const loggedOutUser = await logout(setLogoutErrorShow);
    if (loggedOutUser === '') {
      setUser(null);
    }
  };

  const handleLogoutErrorClose = () => {
    setLogoutErrorShow(false);
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Avatar
            sx={{
              bgcolor: '#199ed9', width: 100, height: 100, margin: 2,
            }}
            alt="Toronto Miracle logo"
            src={tmLogo}
            variant="square"
          >
            TM
          </Avatar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Toronto Miracle Captain Site
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Snackbar open={logoutErrorShow} autoHideDuration={6000} onClose={handleLogoutErrorClose}>
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleLogoutErrorClose}>
          Logout unsuccessful. Please try again later.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Header;
