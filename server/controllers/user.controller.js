import bcrypt from 'bcrypt';
import Joi from 'joi';

import { getUser } from '../services/user.service.js';
import { validate, hashPassword } from '../utils/util.js';
import { InvalidParameters, NotFound } from '../utils/exceptions.js';

export async function login(req, res) {

    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    });

    const { email, password } = validate(req.body, schema);

    // Knex might itself, but double checking cant hurt

    const user = await getUser(email); // Emails will be used as unique identifiers
    if (!user) {
        throw new NotFound('User', 'User not Found', `Could not find user with email ${email}`);
    }
    const passCompare = await bcrypt.compare(password, user.password);

    if (passCompare) {
        res.json({
            loggedin: true,
            user: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                role_id: user.role_id
            }
        });
    } else {
        res.json({ error: true });
    }
}