import {api} from '../services/service';
export const loginUser = async (email:string, password:string) => {
    try {
        const response = await api.post('/user/login', {
            email_id: email,
            password: password
        });
        return response.data.token;
    } catch (error) {
        return null;
    }
};

export const signUp = async (FirstName:string, LastName:string, Age:string, Email_id:string, password:string) => {
    const data = {
        first_name: FirstName,
        last_name: LastName,
        age: Age,
        email_id: Email_id,
        password: password
    };
    try {
        const response = await api.post('/user/sign_up',data);
        return response.data;
    } catch (error) {
        // console.error('Error signing up: ', error);
        // throw error;
        return null;
    }
};
