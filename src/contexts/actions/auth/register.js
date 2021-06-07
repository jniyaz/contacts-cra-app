import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import { CONNECTION_ERROR } from "../../../constants/api";

// tests
export const register = ({
    name, email, password, password_confirmation
}) => (dispatch) => {
    dispatch({ type: REGISTER_LOADING });
    axiosInstance().post('/register', { name, email, password, password_confirmation })
        .then((res) => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        })
        .catch((e) => {
            console.log(e.response.data);
            dispatch({ type: REGISTER_ERROR, 
                payload: e.response.data.errors ? e.response.data.errors : CONNECTION_ERROR
            });
        })
}