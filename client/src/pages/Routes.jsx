import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import ROUTES from '../config/routes';
import router from '../config/router';
import host from '../config/api';

const Layout = () => {
  return (
    <Router>
        <Routes>
            <Route
              exact path={ROUTES.HOME}
              element={<router.home.component/>}
              history={ROUTES.HOME}
            />
        </Routes>
    </Router>
  )
};

export default Layout;