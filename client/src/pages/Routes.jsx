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
              {...props}
              exact path={ROUTES.HOME}
              element={<router.home.component {...props}/>}
              history={ROUTES.HOME}
            />
        </Routes>
        <Routes>
            <Route
              {...props}
              exact path={ROUTES.LOGIN}
              element={<router.login.component {...props}/>}
              history={ROUTES.LOGIN}
            />
        </Routes>
    </Router>
  )
};

export default Layout;