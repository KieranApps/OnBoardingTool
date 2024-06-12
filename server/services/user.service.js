import myknex from '../../knexConfig.js';
import { ROLES } from '../utils/constants.js';

export async function getUser(email) {
    try {
        return await myknex('users').select('*').where('email', '=', email).first(); // .first() as we only want one value, so no array
    } catch (error) {
        return error;
    }
}

export async function getUserById(id) {
    try {
        return await myknex('users').select('*').where('id', '=', id).first(); // .first() as we only want one value, so no array
    } catch (error) {
        return error;
    }
}

export async function saveNewUser(firstname, lastname, email, role_id, manager_id) {
    try {
        return await myknex('users').insert({ firstname, lastname, email, role_id, manager_id });
    } catch (error) {
        return error;
    }
}

export async function getManagers() {
    try {
        return await myknex('users').select('firstname', 'lastname', 'email', 'role_id').where('role_id', '=', ROLES.MANAGER);
    } catch (error) {
        return error;
    }
}
