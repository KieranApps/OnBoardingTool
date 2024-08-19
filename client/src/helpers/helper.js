import axios from 'axios';
import HOST from '../config/api';

import Cookies from 'universal-cookie';

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
        // const cookies = new Cookies();
        // console.log(cookies.get('session'))
        const managers = await axios.get(`${HOST}/users/managers/all`);
        console.log(managers)
    } catch (error) {
        console.log(error);
        return false;
    }
}