import React from 'react';
import './style.scss';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Signup = () => {
  return (
    <div className="flex_container">
      <div className="signup_box">
        <h1>Sign Up</h1>
        <form>
          <TextField
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <div className="fab">
            <Fab variant="extended" type="submit">
              <AppRegistrationIcon sx={{ mr: 1 }} />
              Sign up
            </Fab>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
