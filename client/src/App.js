import { useState } from 'react';
import './App.css';
import Routes from './pages/Routes'

function App() {

  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Routes loggedin={loggedin} setLoggedin={setLoggedin} user={user} setUser={setUser} />
  );
}

export default App;
