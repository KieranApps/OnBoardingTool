import axios from 'axios';
import HOST from '../../config/api';

export async function getConfig()
{
    try {
        const config = await axios.get(`${HOST}/config`);
        return config.data;
    } catch (error) {
        // console.log(error.message);
        return {error: true}
    }
}