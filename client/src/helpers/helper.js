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