import React, { useContext } from 'react'
import Header from '../../components/Header'
import { GlobalContext } from '../../contexts/Provider'
// import { Container } from 'semantic-ui-react'

const ContactsContainer = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    
    return (
        <>
            <Header />
            <h2>Contacts</h2>
        </>
    )
}

export default ContactsContainer
