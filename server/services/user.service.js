import myknex from '../../knexConfig.js';

export async function getUser(email) {
    try {
        return await myknex('Users').select('*').where('email', '=', email).first(); // .first() as we only want one value, so no array
    } catch (error) {
        return error;
    }
}