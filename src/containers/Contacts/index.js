import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header'
import getContacts from '../../contexts/actions/contacts/getContacts';
import { GlobalContext } from '../../contexts/Provider'
// import { Container } from 'semantic-ui-react'

const ContactsContainer = () => {
    const context = useContext(GlobalContext);
    const history = useLocation();
    // console.log(context);
    
    useEffect(() => {
        getContacts(history)
    }, [])

    return (
        <Container>
            <Header />
            <h2>All Contacts</h2>
        </Container>
    )
}

export default ContactsContainer
