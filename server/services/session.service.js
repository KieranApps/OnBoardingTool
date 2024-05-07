import myknex from '../../knexConfig.js';

export async function checkUserSession(id) {
    try {
        return myknex('sessions').select('*').where('user_id', '=', id).first();
    } catch (error) {
        return error;
    }
}

export async function createUserSession(id, session_id, expiry) {
    try {
        return myknex('sessions').insert({ user_id: id, session_id, expiry });
    } catch (error) {
        return error;
    }
}

export async function updateUserSession(id, session_id, expiry) {
    try {
        return myknex('sessions').where('user_id', '=', id).update({ user_id: id, session_id, expiry });
    } catch (error) {
        return error;
    }
}

export async function getSessionById(session_id) {
    try {
        return myknex('sessions').select('*').where('session_id', '=', session_id).first();
    } catch (error) {
        return error;
    }
}