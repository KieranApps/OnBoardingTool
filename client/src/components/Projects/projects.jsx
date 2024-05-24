import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../Pagewrapper/pagewrapper.jsx';
// Get config if kept should be run at App.js level

import { Button, Grid,} from '@mui/material';

const Projects = (props) => {
    const nav = useNavigate();

    useEffect(() => {
      // Redirect if not logged in
      if (props.loadedConfig && !props.loggedin) {
        nav('/login');
      }
    })

    function showCreateButton() {
      console.log(props)
      if (true) {

      }
      return (<Button>Create Project</Button>);
    }

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
          {showCreateButton()}
        </Grid> 
      </>
    );

    return <></>;
}

export default Projects;