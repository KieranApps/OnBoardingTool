import { useEffect, useState } from 'react';
import { getConfig } from './homeFunctions';

import { Button, Grid } from '@mui/material';

const Home = (props) => {
    console.log(props)
    const [config, setConfig] = useState(null)

    useEffect(() => {
      const getConfigHook = async () => {
        const config = await getConfig();
        setConfig(config);
      }
      getConfigHook();
    }, []);
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid> 
  );
}

export default Home;