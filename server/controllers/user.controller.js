import bcrypt from 'bcrypt';
import Joi from 'joi';
import moment from 'moment';

import { getUser } from '../services/user.service.js';
import { createUserSession, updateUserSession, checkUserSession } from '../services/session.service.js'; 
import { validate, createUUID } from '../utils/util.js';
import { NotFound } from '../utils/exceptions.js';

export async function login(req, res) {

    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    const { email, password } = validate(req.body, schema);

    const user = await getUser(email); // Emails will be used as unique identifiers
    if (!user) {
        throw new NotFound('User', 'User not Found', `Could not find user with email ${email}`);
    }
    const passCompare = await bcrypt.compare(password, user.password);

    if (!passCompare) {
        return res.json({ error: true });
    }

    const sessionID = createUUID();
    const expiry = moment().add(30, 'days').toDate();
    // Check if user has a session
    // Not most effecient having two DB calls, but since its only on login, wont affect much. Plus keeps DB smaller than new sessions for every log in for every user
    // Eventually, this may need to check device too. So a user can have two sessions open of two devices each with their own expiry, will need table updates and new compound key indentifier
    const hasSession = await checkUserSession(user.id);
    let session;
    if (hasSession) {
        session = await updateUserSession(user.id, sessionID, expiry);
    } else {
        session = await createUserSession(user.id, sessionID, expiry);
    }
    req.session = {
        userId: user.id,
        id: sessionID, 
        expiry
    };
    res.json({
        loggedin: true,
        user: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role_id: user.role_id
        }
    });
}