import { useEffect, useState, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../Pagewrapper/pagewrapper.jsx';
// Get config if kept should be run at App.js level

import { Grid } from '@mui/material';

const NotFound = (props) => {
    const nav = useNavigate();

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
          Uh Oh! Something couldnt be found...
        </Grid> 
      </>
    );

    return <></>;
}

export default NotFound;