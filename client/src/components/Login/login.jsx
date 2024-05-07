import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './loginFunctions';

import { Button, Grid, Snackbar, Alert, TextField } from '@mui/material';

const Login = (props) => {
    const nav = useNavigate();

    const [configErrorToastOpen, setConfigErrorToastOpen] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [toastText, setToastText] = useState(null);

    function handleErrorToastClose() {
      setConfigErrorToastOpen(false);
    }
    
    function handleErrorToastOpen(text) {
      setConfigErrorToastOpen(true);
      setToastText(text)
    }

    function showConfigErrorToast() {
      return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={configErrorToastOpen}
            autoHideDuration={5000}
            onClose={handleErrorToastClose}
            key={'top' + 'right'}
          >
            <Alert
              onClose={handleErrorToastClose}
              severity="error"
              variant="filled"
              sx={{ width: '100%' }}
            >
              {toastText}
            </Alert>
          </Snackbar>
      );
    }

    function onChangeEmail(e) {
      setEmail(e.target.value)
    }

    function onChangePassword(e) {
      setPassword(e.target.value)
    }

    async function processLogin() {
      if (!email && !password) {
        return; // TODO: Show errors
      }

      const loggedIn = await login(email, password);
      if (loggedIn) {
        props.setLoggedin(true);
        props.setUser(loggedIn.user);
        localStorage.setItem('session_id', loggedIn.session_id);
        nav('/');
      } else {
        handleErrorToastOpen('We couldn\'t log you in! Please try again!');
      }
    }

    return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
        >
        {showConfigErrorToast()}
        <Grid m={1} item xs={3}>
            <TextField onChange={onChangeEmail} variant="filled" label="Email"/>
        </Grid>
        <Grid m={1} item xs={3}>
            <TextField onChange={onChangePassword} variant="filled" label="Password" type="password"/>
        </Grid>
        <Grid m={1} item xs={3}>
            <Button onClick={processLogin} variant="contained">Login</Button>
        </Grid>
        <Grid m={1} item xs={3}>
            <Button color="error" variant="contained">Forgotten Password?</Button>
        </Grid>
    </Grid> 
    );
}

export default Login;