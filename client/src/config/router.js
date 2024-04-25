import { lazy } from 'react';

const Home = lazy(() => import('../components/Home/home'));
const Login = lazy(() => import('../components/Login/login'));

// eslint-disable-next-line
export default {
    home: {
        path: '/',
        exact: true,
        component: Home,
        private: false 
    }, 
    login: {
        path: '/login',
        exact: true,
        component: Login,
        private: false 
    }
};