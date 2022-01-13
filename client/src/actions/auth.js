import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';


export const signIn = (formData, history) => async (dispatch) => {
    
    try {
        // Data received from Sign-In process        
        const {data} = await api.signIn(formData);
        // Dispatches data to localstorage
        dispatch({ type: AUTH, data})
        // Redirect to homepage
        history.push('/');

    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        // Data received from Sign-Up process  
        const {data} = await api.signUp(formData);
        // Dispatches data to localstorage
        dispatch({ type: AUTH, data})

        // Redirect to homepage
        history.push('/');

    } catch (error) {
        console.log(error);
    }
}
