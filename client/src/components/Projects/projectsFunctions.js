import axios from 'axios';
import HOST from '../../config/api';

export async function createNewProject(body) {
    try {
        const result = await axios.post(`${HOST}/projects/create`, body);
        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
}