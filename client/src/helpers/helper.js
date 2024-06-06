import axios from 'axios';
import HOST from '../config/api';

export async function getConfig(sessionId)
{
    try {
        const config = await axios.get(`${HOST}/config`, {
            params: {
                session_id: sessionId
            }
        });
        return config.data;
    } catch (error) {
        console.log(error.message);
        return {error: true}
    }
}

export async function getAllManagers() {
    try {
        const managers = await axios.get(`${HOST}/users/managers/getAll`);
        
    } catch (error) {
        console.log(error);
        return false;
    }
}