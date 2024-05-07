import { useEffect, useState } from 'react';
import './App.css';
import Routes from './pages/Routes'

import { getConfig } from './helpers/helper.js';

function App() {

  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [loadedConfig, setLoadedConfig] = useState(false);
  useEffect(() => {
    const getConfigHook = async () => {
      const sessionId = localStorage.getItem('session_id');
      const config = await getConfig(sessionId);
      if (config.loggedin) {
        setLoggedin(true);
        setLoadedConfig(true);
        setUser(config.user);
      }
    }
    getConfigHook();
  }, []);

  return (

    // loggedin not being sent through as true even though it should be
    // Might need a 'loading config' thing, to only reroute after we have the API result
    <Routes loadedConfig={loadedConfig} loggedin={loggedin} setLoggedin={setLoggedin} user={user} setUser={setUser} />
  );
}

export default App;
