import { CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";
import contactsInit from '../initialStates/contactsInit'

const contacts = (state, { payload, type }) => {
    switch (type) {
        case CONTACTS_LOADING:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true
                }
            }
        case CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: payload
                }
            }
        case CONTACTS_ERROR:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload
                }
            }
        case LOGOUT_USER:
            return {
                ...state,
                contactsInit
            }
        default:
            return state;
    }
}

export default contacts;