import { ADD_REMOVE_FAVOURITE_ERROR, ADD_REMOVE_FAVOURITE_LOADING, ADD_REMOVE_FAVOURITE_SUCCESS } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance";

export default (id, is_favourite) => (dispatch) => {
    console.log(`favourite`, id);
    // dispatch({ type: ADD_REMOVE_FAVOURITE_LOADING, payload: id });
    axiosInstance()
        .put(`/contacts/${id}`, { is_favourite })
        .then((res) => {
            console.log(res.data);
            dispatch({ type: ADD_REMOVE_FAVOURITE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({ type: ADD_REMOVE_FAVOURITE_ERROR, payload: err.response ? err.response.data : CONNECTION_ERROR });
        })
}