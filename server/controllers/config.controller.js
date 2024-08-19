import moment from 'moment';
import { getSessionById } from '../services/session.service.js';
import { getUserById } from '../services/user.service.js';

export async function getConfig(req, res) {
    if (!req.query.session_id) {
        return res.json({
            loggedin: false
        });
    }
    const session_id = req.query.session_id;
    // Check session cookie is not expired
    const session = await getSessionById(session_id);
    if (!session) {
        return res.json({
            loggedin: false
        });
    }
    // If exists (and there is no req.session) i.e., if the server reset then save the session (if valid)
    if (session.expiry < moment().subtract(30, 'days')) {
        // Expired
        return res.json({
            loggedin: false
        });
    }

    // if session is valid, get user
    const user = await getUserById(session.user_id);
    req.session.details = {
        user_id: user.id,
        session_id: session_id, 
        expiry: session.expiry
    };
    return res.json({
        loggedin: true,
        session: {
            user_id: user.id,
            session_id: session_id, 
            expiry: session.expiry
        },
        user: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role_id: user.role_id
        }
    });
}