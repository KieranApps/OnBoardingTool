import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../Pagewrapper/pagewrapper.jsx';
// Get config if kept should be run at App.js level

import { Grid,} from '@mui/material';

const HR = (props) => {
    const nav = useNavigate();

    useEffect(() => {
      // Redirect if not logged in
      if (props.loadedConfig && !props.loggedin) {
        nav('/login');
      }
    })

    return (
      <>
        <PageWrapper/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: '100vh' }}
        >
          Welcome to the HR page
        </Grid> 
      </>
    );

    return <></>;
}

export default HR;