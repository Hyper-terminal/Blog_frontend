import React from 'react';
import './signin.scss';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Navigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import { signin, authenticate } from '../../auth/index';

const Signin = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    email: '',
    password: '',
    error: '',
    redirectToReferer: false,
  });

  const [isLoading, setLoading] = React.useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        error: '',
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    setLoading(true);

    const { email, password } = loginDetails;
    const user = { email, password };

    signin(user).then((data) => {
      if (data.error) {
        setLoading(false);
        setLoginDetails((prevValue) => {
          return {
            ...prevValue,
            error: data.error,
          };
        });
      } else {
        // authenticate
        authenticate(data, () => {
          setLoginDetails({ email: '', password: '', redirectToReferer: true });
        });
      }
    });
  };


  if (loginDetails.redirectToReferer) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="singin_container">
      <div className="signin_box">
        <h1 className="signin_title">Sign In</h1>

        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert
            sx={{ display: loginDetails.error ? '' : 'none' }}
            severity="error"
          >
            {loginDetails.error}
          </Alert>
        </Stack>

        {
          isLoading && <LinearProgress sx={{ marginTop: '1em' }} color="inherit" />
        }

        <form>
          <TextField
            onChange={handleInput}
            value={loginDetails.email}
            name="email"
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
          />
          <TextField
            onChange={handleInput}
            value={loginDetails.password}
            name="password"
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <div className="fab">
            <Fab variant="extended" sx={{ zIndex: 1 }} onClick={handleClick}>
              <LoginIcon sx={{ mr: 1 }} />
              Sign in
            </Fab>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
