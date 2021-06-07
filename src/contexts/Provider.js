import { createContext, useReducer } from 'react';
import authInit from './initialStates/authInitial';
import contactsInit from './initialStates/contactsInitial';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInit);
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInit);

    return (
        <GlobalContext.Provider value={{ authState, authDispatch, contactsState, contactsDispatch }}>
            {children}
        </GlobalContext.Provider>
    )
};