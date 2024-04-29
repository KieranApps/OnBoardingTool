import axios from 'axios';
import HOST from '../../config/api';

export async function getConfig()
{
    const config = await axios.get(`${HOST}/config`);
    console.log(config.data);
}