
import {api} from '../services/service';

export const getUserProfile = async () => {
    try {
        const response = await api.get('/user/profiles');
        return response.data.profile;
    } catch (error) {
        // console.error('Error fetching data: ', error);
        // throw error; // Throw the error so it can be handled by the component
        return null;
    }
};
