import { lazy } from 'react';

// import LoginComponent from '../containers/Login';
// import RegisterComponent from '../containers/Register';
// import ContactsComponent from '../containers/Contacts';
// import CreateContactComponent from '../containers/CreateContact';

const LoginComponent = lazy(() => import('../containers/Login'));
const RegisterComponent = lazy(() => import('../containers/Register'));
const ContactsComponent = lazy(() => import('../containers/Contacts'));
const CreateContactComponent = lazy(() => import('../containers/CreateContact'));

const routes = [
    {
        path: '/auth/register',
        component: RegisterComponent,
        title: 'Register',
        needsAuth: false
    },
    {
        path: '/auth/login',
        component: LoginComponent,
        title: 'Login',
        needsAuth: false
    },
    {
        path: '/contacts/create',
        component: CreateContactComponent,
        title: 'Create Contact',
        needsAuth: true
    },
    {
        path: '/',
        component: ContactsComponent,
        title: 'Contacts',
        needsAuth: true
    },
];

export default routes;

