import { useEffect, useState } from 'react';
import { getConfig, login } from './homeFunctions';

import { Button, Grid, Snackbar, Alert, TextField } from '@mui/material';

const Home = (props) => {
    const [config, setConfig] = useState(null)
    
    const [configErrorToastOpen, setConfigErrorToastOpen] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    function handleErrorToastClose() {
      setConfigErrorToastOpen(false);
    }
    
    function handleErrorToastOpen() {
      setConfigErrorToastOpen(true);
    }

    useEffect(() => {
      const getConfigHook = async () => {
        const config = await getConfig();
        if (config.error) {
          handleErrorToastOpen()
        }
        setConfig(config);
      }
      getConfigHook();
    }, []);

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
              Something went wrong getting your session, please log in again!
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
        return;
      }

      const loggedIn = await login(email, password);

    }

    if (config) {
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
    return <></>;
}

export default Home;