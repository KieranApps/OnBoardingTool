import bcrypt from 'bcrypt';
import Joi from 'joi';
import moment from 'moment';

import { getUser, getManagers, saveNewUser } from '../services/user.service.js';
import { createUserSession } from '../services/session.service.js'; 
import { validate, createUUID, hashPassword } from '../utils/util.js';
import { NotFound } from '../utils/exceptions.js';
import { ROLES } from '../utils/constants.js';

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
    await createUserSession(user.id, sessionID, expiry);
    req.session.details = {
        userId: user.id,
        id: sessionID, 
        expiry
    };
    res.json({
        loggedin: true,
        session_id: sessionID,
        user: {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role_id: user.role_id
        }
    });
}

export async function addUser(req, res) {
    const schema = Joi.object({
        email: Joi.string().required(),
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        role: Joi.string().default('EMPLOYEE'),
        manager: Joi.object({
            email: Joi.string().required(),
            firstname: Joi.string(),
            lastname: Joi.string(),
        })
    });

    const { email, firstname, lastname, role, manager } = validate(req.body, schema);

    const managerInfo = await getUser(manager.email);
    const role_id = ROLES[role];

    const newUser = await saveNewUser(firstname, lastname, email, role_id, managerInfo.id);
    
    // Send email requesting to set password here


    res.json(newUser);
}

export async function getAllManagers(req, res) {
    const managers = await getManagers();

    if (!managers || managers.length === 0) {
        res.json('No managers found');
    }
    res.json(managers);
}