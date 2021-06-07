import React, { useContext } from 'react'
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header'
import { GlobalContext } from '../../contexts/Provider'
// import { Container } from 'semantic-ui-react'

const ContactsContainer = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    
    return (
        <Container>
            <Header />
            <h2>All Contacts</h2>
        </Container>
    )
}

export default ContactsContainer
