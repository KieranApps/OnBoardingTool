import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Get config if kept should be run at App.js level

import { Grid, Snackbar, Alert } from '@mui/material';

const Home = (props) => {
    const nav = useNavigate();

    useEffect(() => {
      // Redirect if not logged in
      if (props.loadedConfig && !props.loggedin) {
        nav('/login');
      }
    })

    return (
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          Welcome to the home page
      </Grid> 
    );

    return <></>;
}

export default Home;