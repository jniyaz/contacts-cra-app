import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'
import createContact from '../../contexts/actions/contacts/createContact'
import CreateContact from '../../layouts/Contacts/Create'

const CreateContactContainer = () => {

    const [form, setForm] = useState({});

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value});
    };

    const onSubmit = () => {
        createContact(form);
    }

    const formInvalid = !form.firstName || !form.lastName || !form.countryCode || !form.phoneNumber;

    return (
        <Container>
            <Header />
            <CreateContact onChange={onChange} form={form} onSubmit={onSubmit} formInvalid={formInvalid} />
        </Container>
    )
}

export default CreateContactContainer
