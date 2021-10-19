import React from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

import tmLogo from '../assets/torontomiracle_2021_logo_LOGO MAIN.png';

function Header() {
  return (
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
        {/* <Button color="inherit" onClick={() => setUser({})}>Logout</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
