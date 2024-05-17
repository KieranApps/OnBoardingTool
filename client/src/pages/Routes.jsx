import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import ROUTES from '../config/routes';
import router from '../config/router';

import NotFound from '../components/NotFound/NotFound';

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

            <Route
              exact path={ROUTES.LOGIN}
              element={<router.login.component loggedin={props.loggedin} setLoggedin={props.setLoggedin} setUser={props.setUser} loadedConfig={props.loadedConfig} />}
              history={ROUTES.LOGIN}
            />

          
            <Route
              exact path={ROUTES.PROJECTS}
              element={<router.projects.component loggedin={props.loggedin} loadedConfig={props.loadedConfig} />}
              history={ROUTES.PROJECTS}
            />

            <Route
              exact path={ROUTES.OBJECTIVES}
              element={<router.objectives.component loggedin={props.loggedin} loadedConfig={props.loadedConfig} />}
              history={ROUTES.OBJECTIVES}
            />

            <Route
              exact path={ROUTES.HR}
              element={<router.hr.component loggedin={props.loggedin} loadedConfig={props.loadedConfig} />}
              history={ROUTES.HR}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
};

export default Layout;