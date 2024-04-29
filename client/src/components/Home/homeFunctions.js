import axios from 'axios';
import HOST from '../../config/api';

export async function getConfig()
{
    try {
        const config = await axios.get(`${HOST}/config`);
        return config.data;
    } catch (error) {
        console.log(error.message);
        return {error: true}
    }
}

export async function login(email, password) {
    try {
        const body = {
            email,
            password
        };
        const loggedin = await axios.post(`${HOST}/users/login`, body);
        return loggedin;
    } catch (error) {
        console.log(error);
    }
}