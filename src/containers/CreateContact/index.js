import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'
import CreateContact from '../../layouts/Contacts/Create'

const CreateContactContainer = () => {

    const [form, setForm] = useState({});

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value});
    };

    console.log(form);

    return (
        <Container>
            <Header />
            <CreateContact onChange={onChange} form={form} />
        </Container>
    )
}

export default CreateContactContainer
