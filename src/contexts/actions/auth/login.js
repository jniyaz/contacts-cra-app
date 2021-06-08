import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from '../../../constants/actionTypes';
import { CONNECTION_ERROR } from '../../../constants/api';
import axiosInstance from '../../../helpers/axiosInstance';

// tests
export const login = ({
    email, password
}) => (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    axiosInstance().post('/auth/login', { email, password })
        .then((res) => {
            localStorage.token = res.data.access_token;
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch((e) => {
            // console.log(e);
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: e.response.data ? e.response.data.error : CONNECTION_ERROR
            });
        })
}