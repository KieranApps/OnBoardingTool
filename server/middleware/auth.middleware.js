import moment from 'moment';

import { getUserById } from '../services/user.service.js';
import { ROLES } from '../utils/constants.js';

export async function isLoggedIn(req, res, next) {
    try {
        if (!req.session.details) {
            return res.json('Not logged in');
        }
        if (req.session.details.expiry < moment().subtract(30, 'days')) {
            return res.json('Not logged in');
        }
        next();
    } catch (error) {
        console.log(error.message)
        return res.json('Error: ');
    }
    
}

export async function canAddNewUser(req, res, next) {
    try {
        const userId = req.session.details.user_id;
        // get user info
        const user = await getUserById(userId);
        if (!user) {
            return res.json('Cannot add new user, please try again later.')
        }
        if (user.role_id !== ROLES.HR) {
            return res.json('You do not have the permissions to add a new user/employee.');
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.json('Error: ');
    }
}

export async function canCreateProject(req, res, next) {
    next();
}