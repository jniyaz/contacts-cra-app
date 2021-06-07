import React, { useEffect } from 'react'
import RegisterUI from '../../layouts/Register';
// import { register } from '../../contexts/actions/auth/register'
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';
import useForm from './useForm';

const RegisterContainer = () => {

    useEffect(()=>{
        // register()
    }, []);

    return (
        <Container>
            <Header />
            <h2>Register</h2>
            <RegisterUI form={useForm()} />
        </Container>
    )
}

export default RegisterContainer
