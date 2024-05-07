import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import ROUTES from '../config/routes';
import router from '../config/router';
// import host from '../config/api';

const Layout = (props) => {
  return (
    <Router>
        <Routes>
            <Route
              exact path={ROUTES.HOME}
              element={<router.home.component loggedin={props.loggedin} loadedConfig={props.loadedConfig} />}
              history={ROUTES.HOME}
            />
        </Routes>
        <Routes>
            <Route
              exact path={ROUTES.LOGIN}
              element={<router.login.component loggedin={props.loggedin} loadedConfig={props.loadedConfig} />}
              history={ROUTES.LOGIN}
            />
        </Routes>
    </Router>
  )
};

export default Layout;