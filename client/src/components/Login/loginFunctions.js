import axios from 'axios';
import HOST from '../../config/api';

export async function login(email, password) {
    try {
        const body = {
            email,
            password
        };
        const loggedin = await axios.post(`${HOST}/users/login`, body);
        return loggedin.data;
    } catch (error) {
        console.log(error);
    }
}