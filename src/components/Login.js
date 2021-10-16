import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = React.useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        height: "100vh",
        bgColor: "#0093E9",
        backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <Card outlined>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "30vh",
            background: "#000000",
            padding: "3em",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 3, color: "#ffffff" }}
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
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            variant="outlined"
            onChange={handlePasswordChange}
            autoComplete="current-password"
            color="info"
            focused
          />

          <Button variant="contained" color="info">
            Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
