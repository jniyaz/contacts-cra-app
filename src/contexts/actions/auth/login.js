import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axios'

// tests
export const login = ({
    email, password
}) => (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    axiosInstance.post('/login', { email, password })
        .then((res) => {
            localStorage.token = res.data.access_token;
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch((e) => {
            // console.log(e.response.data.error);
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: e.response.data.error ? e.response.data.error : 'Server error' 
            });
        })
}