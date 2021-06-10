import { DELETE_CONTACT_ERROR, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (id) => (dispatch) => {
    console.log(`deleting`, id);
    dispatch({ type: DELETE_CONTACT_LOADING });
    axiosInstance()
        .delete(`/contacts/${id}`,)
        .then((res) => {
            console.log(res.data);
            dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({ type: DELETE_CONTACT_ERROR, payload: err.response ? err.response.data : CONNECTION_ERROR });
        })
}