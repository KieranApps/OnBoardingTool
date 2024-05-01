import myknex from '../../knexConfig.js';

export async function checkUserSession(id) {
    return myknex('sessions').select('*').where('user_id', '=', id).first();
}

export async function createUserSession(id, session_id, expiry) {
    return myknex('sessions').insert({user_id: id , session_id, expiry});
}

export async function updateUserSession(id, session_id, expiry) {
    return myknex('sessions').where('user_id', '=', id).update({user_id: id, session_id, expiry});
}