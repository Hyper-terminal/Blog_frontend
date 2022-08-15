import React from 'react';
import './style.scss';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Signup = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: '',
    email: '',
    password: '',
    error: '',
    open: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    // setUserDetails({ error: '' });
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        error: '',
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const { name, email, password } = userDetails;
    const user = { name, email, password };

    signup(user).then((data) => {
      if (data.error) {
        setUserDetails((prevValue) => {
          return {
            ...prevValue,
            error: data.error
          }
        });
      } else {
        setUserDetails({
          name: '',
          email: '',
          password: '',
          error: '',
          open: true,
        });
      }
    });
  };

  const signup = (user) => {
    return fetch('http://localhost:8080/api/v1/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex_container">
      <div className="signup_box">
        <h1>Sign Up</h1>

        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert
            sx={{ display: userDetails.error ? '' : 'none' }}
            severity="error"
          >
            {userDetails.error}
          </Alert>
          <Alert
            sx={{ display: userDetails.open ? '' : 'none' }}
            severity="success"
          >
            Account created successfully ❤️. Please login to continue.
          </Alert>
        </Stack>

        <form>
          <TextField
            onChange={handleInput}
            value={userDetails.name}
            name="name"
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleInput}
            value={userDetails.email}
            name="email"
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            onChange={handleInput}
            value={userDetails.password}
            name="password"
            fullWidth
            margin="normal"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <div className="fab">
            <Fab variant="extended" onClick={handleClick}>
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
