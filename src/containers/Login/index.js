import React from 'react'
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';
import useForm from './useForm';
import LoginUI from '../../layouts/Login';
// import { register } from '../../contexts/actions/auth/register'

const LoginContainer = () => {
    return (
        <Container>
            <Header />
            <h2>Login</h2>
            <LoginUI form={useForm()} />
        </Container>
    )
}

export default LoginContainer;
