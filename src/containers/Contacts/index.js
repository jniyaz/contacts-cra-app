import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';

import favouriteContact from '../../contexts/actions/contacts/favouriteContact';
import destroyContact from '../../contexts/actions/contacts/destroyContact';
import getContacts from '../../contexts/actions/contacts/getContacts';
import ContactsListUI from '../../layouts/Contacts/List';
import { GlobalContext } from '../../contexts/Provider'
import Header from '../../components/Header'

const ContactsContainer = () => {
    const { contactsDispatch, contactsState } = useContext(GlobalContext);
    const history = useLocation();
    const { contacts: { data } } = contactsState;

    const handleDelete = (id) => {
        destroyContact(id)(contactsDispatch);
    }

    const handleFavourite = (id, is_favourite) => {
        favouriteContact(id, !is_favourite)(contactsDispatch);
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
            <ContactsListUI state={contactsState} deleteContact={handleDelete} favouriteContact={handleFavourite} />
            {/* <Segment>Pellentesque habitant morbi tristique senectus.</Segment> */}
        </Container>
    )
}

export default ContactsContainer
