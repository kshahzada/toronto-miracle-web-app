import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MuiPhoneNumber from 'material-ui-phone-number';

import { UserContext } from '../contexts/UserContext';
import { login } from '../api/apiMethods';

export default function Login() {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = React.useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = React.useState('');
  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const [error, setError] = React.useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const strippedPhoneNumber = phoneNumber.replace(/\D/g, '');
    const loggedInUser = await login({
      email,
      phoneNumber: strippedPhoneNumber,
    },
    setError);
    if (loggedInUser && 'neighbourhoods' in loggedInUser) {
      setUser(loggedInUser);
      console.log(loggedInUser);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        height: '100vh',
        bgColor: '#0093E9',
        backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <Card>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '20rem',
            background: '#000000',
            padding: '3em',
            maxWidth: 800,
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', marginBottom: 3, color: '#ffffff' }}
          >
            Login
          </Typography>

          <TextField
            id="outlined-email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            color="info"
            focused
          />

          <MuiPhoneNumber
            id="outlined-phoneNumber-input"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            variant="outlined"
            color="info"
            focused
            defaultCountry="ca"
            disableDropdown
            countryCodeEditable={false}
          />

          <Typography
            variant="body"
            sx={{ textAlign: 'center', color: 'red' }}
          >
            {error}
          </Typography>

          <Button variant="contained" color="info" onClick={handleLogin}>
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
