import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';
import clearCreateCotact from '../../contexts/actions/contacts/clearCreateCotact';
import createContact from '../../contexts/actions/contacts/createContact';
import { GlobalContext } from '../../contexts/Provider';
import CreateContact from '../../layouts/Contacts/Create';

const CreateContactContainer = () => {
    const [form, setForm] = useState({});
    const history = useHistory();
    const {
        contactsDispatch,
        contactsState: { addContact: { loading, data, error } }
    } = useContext(GlobalContext);

    useEffect(() => {
        if (data) {
            history.push('/');
        }
        return () => {
            clearCreateCotact()(contactsDispatch)
        }
    }, [data])

    const onChange = (e, { name, value }) => {
        setForm({ ...form, [name]: value });
    };

    const onSubmit = () => {
        createContact(form)(contactsDispatch);
    }

    const formInvalid = !form.firstName || !form.lastName || !form.countryCode || !form.phoneNumber;

    const formHalfFilled = Object.values(form).filter((item) => item && item !== '').length > 0;

    return (
        <Container>
            <Header />
            <CreateContact 
                onChange={onChange} 
                form={form} 
                onSubmit={onSubmit} 
                formInvalid={formInvalid} 
                formHalfFilled={formHalfFilled}
                loading={loading} />
        </Container>
    )
}

export default CreateContactContainer
