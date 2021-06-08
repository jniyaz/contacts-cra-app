import axiosInstance from "../../../helpers/axiosInstance";
import { ADD_CONTACT_ERROR, ADD_CONTACT_LOADING, ADD_CONTACT_SUCCESS } from "../../../constants/actionTypes"

export default ({
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    countryCode: country_code,
}) => (dispatch) => {
    dispatch({ type: ADD_CONTACT_LOADING });
    axiosInstance()
        .post('/contacts', { first_name, last_name, phone_number, country_code })
        .then((res) => {
            console.log(res.data);
            dispatch({ type: ADD_CONTACT_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err.response.data);
            dispatch({ type: ADD_CONTACT_ERROR, payload: err.response.data });
        })
}