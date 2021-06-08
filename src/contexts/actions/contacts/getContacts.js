import { CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_SUCCESS } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (history) => (dispatch) => {
    dispatch({ type: CONTACTS_LOADING });
    axiosInstance(history).get('/contacts')
    .then((res) => {
        console.log(res.data);
        dispatch({ type: CONTACTS_SUCCESS, payload: res.data })
    })
    .catch((err) => {
        dispatch({ type: CONTACTS_ERROR, payload: err.response ? err.response.data : CONNECTION_ERROR })
    })
}   