import { 
    ADD_CONTACT_ERROR, 
    ADD_CONTACT_LOADING, 
    ADD_CONTACT_SUCCESS, 
    ADD_REMOVE_FAVOURITE_ERROR, 
    ADD_REMOVE_FAVOURITE_LOADING, 
    ADD_REMOVE_FAVOURITE_SUCCESS, 
    CLEAR_ADD_CONTACT, 
    CONTACTS_ERROR, 
    CONTACTS_LOADING, 
    CONTACTS_SUCCESS, 
    DELETE_CONTACT_LOADING, 
    DELETE_CONTACT_SUCCESS, 
    LOGOUT_USER, 
    SEARCH_CONTATCS
} from "../../constants/actionTypes";
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
        case ADD_CONTACT_LOADING:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    loading: true,
                }
            }
        case ADD_CONTACT_SUCCESS:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    data: payload
                },

                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: [payload, ...state.contacts.data]
                }
            }
        case CLEAR_ADD_CONTACT:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    loading: false,
                    data: null
                }
            }
        case ADD_CONTACT_ERROR:
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                    error: payload
                }
            }
        case SEARCH_CONTATCS:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    isSearchActive: !!payload.length > 0 || false,
                    searchedContacts: state.contacts.data.filter((item) => {
                        console.log(`q`, payload);
                        // put return in try catch block to avaoid unncessary errors
                        try {
                            return (
                                item.first_name.toLowerCase().search(payload.toLowerCase()) !== -1 ||
                                item.last_name.toLowerCase().search(payload.toLowerCase()) !== -1 || 
                                item.phone_number.search(payload) !== -1
                            );
                        } catch (error) {
                            return [];
                        }
                    })
                }
            }
            case DELETE_CONTACT_LOADING:
                return {
                    ...state,
                    contacts: {
                        ...state.contacts,
                        loading: false,
                        data: state.contacts.data.map(item => {
                            if (item.id === payload) {
                                return { ...item, deleteing: true }
                            }
                            return item;
                        })
                    }
                }
            case DELETE_CONTACT_SUCCESS:
                return {
                    ...state,
                    contacts: {
                        ...state.contacts,
                        loading: false,
                        data: state.contacts.data.filter(item => item.id !== payload)
                    }
                }
            case ADD_REMOVE_FAVOURITE_LOADING:
                return {
                    ...state,
                    contacts: {
                        ...state.contacts,
                        loading: false
                    }
                }
            case ADD_REMOVE_FAVOURITE_SUCCESS:
                return {
                    ...state,
                    contacts: {
                        ...state.contacts,
                        loading: false,
                        data: state.contacts.data.map(item => {
                            if(item.id === payload.id) {
                                return payload;
                            }
                            return item;
                        })
                    }
                }
            case ADD_REMOVE_FAVOURITE_ERROR:
                return {
                    ...state,
                    contacts: {
                        ...state.contacts,
                        loading: false,
                        data: payload
                    }
                }

        default:
            return state;
    }
}

export default contacts;