import { lazy } from 'react';

import ROUTES from './routes.js';

const Home = lazy(() => import('../components/Home/home'));
const Login = lazy(() => import('../components/Login/login'));
const Objectives = lazy(() => import('../components/Objectives/objectives.jsx'));
const Projects = lazy(() => import('../components/Projects/projects.jsx'))
const HR = lazy(() => import('../components/HR/hr.jsx'))

// eslint-disable-next-line
export default {
    home: {
        path: ROUTES.HOME,
        exact: true,
        component: Home,
        private: false 
    }, 
    login: {
        path: ROUTES.LOGIN,
        exact: true,
        component: Login,
        private: false 
    },
    objectives: {
        path: ROUTES.OBJECTIVES,
        exact: true,
        component: Objectives,
        private: false
    },
    projects: {
        path: ROUTES.PROJECTS,
        exact: true,
        component: Projects,
        private: false
    },
    hr: {
        path: ROUTES.HR,
        exact: true,
        component: HR,
        private: false
    }
};