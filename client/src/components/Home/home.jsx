import { useEffect, useState } from 'react';
import { getConfig } from './homeFunctions';

import { Grid, Snackbar, Alert } from '@mui/material';

const Home = (props) => {
    const [config, setConfig] = useState(null)
    
    const [configErrorToastOpen, setConfigErrorToastOpen] = useState(false);

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
        // If not logged in redirect to login page
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
        </Grid> 
      );
    }
    return <></>;
}

export default Home;