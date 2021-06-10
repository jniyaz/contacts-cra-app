import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';

import destroyContact from '../../contexts/actions/contacts/destroyContact';
import getContacts from '../../contexts/actions/contacts/getContacts';
import { GlobalContext } from '../../contexts/Provider'
import ContactsListUI from '../../layouts/Contacts/List';
import Header from '../../components/Header'

const ContactsContainer = () => {
    const { contactsDispatch, contactsState } = useContext(GlobalContext);
    const history = useLocation();
    const { contacts: { data } } = contactsState;

    const handleDelete = (id) => {
        destroyContact(id)(contactsDispatch);
    }

    useEffect(() => {
        if ( data && data.length === 0 ) {
            getContacts(history)(contactsDispatch);
        }
        if( !data ) {
            getContacts(history)(contactsDispatch);
        }
    }, [])

    return (
        <Container>
            <Header />
            <h2>Contacts</h2>
            <ContactsListUI state={contactsState} deleteContact={handleDelete} />
        </Container>
    )
}

export default ContactsContainer
