import axiosInstance from "../../../helpers/axiosInstance";
import { ADD_CONTACT_ERROR, ADD_CONTACT_LOADING, ADD_CONTACT_SUCCESS } from "../../../constants/actionTypes"
import { FIREBASE_IMAGE_REF } from "../../../constants/firebase";
import { storage } from '../../../helpers/firebase'

export default ({
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phone_number,
    countryCode: country_code,
    avatar: avatar,
    isFavourite: is_favourite
}) => (dispatch) => {

    const saveToBackend = (url = null) => {
        axiosInstance()
            .post('/contacts', { first_name, last_name, phone_number, country_code, avatar: url, is_favourite })
            .then((res) => {
                console.log(res.data);
                dispatch({ type: ADD_CONTACT_SUCCESS, payload: res.data });
            })
            .catch((err) => {
                console.log(err.response.data);
                dispatch({ type: ADD_CONTACT_ERROR, payload: err.response.data });
            })
    }

    dispatch({ type: ADD_CONTACT_LOADING });

    if (avatar) {
        storage
            .ref(`${FIREBASE_IMAGE_REF}/${avatar.name}`)
            .put(avatar)
            .on(
                "state_changed",
                (snapchat) => {},
                async (error) => {},
                async () => {
                    const url = await storage
                        .ref(FIREBASE_IMAGE_REF)
                        .child(avatar.name)
                        .getDownloadURL();
                    console.log(url);
                    saveToBackend(url);
                }
            )
    } else {
        saveToBackend();
    }
}