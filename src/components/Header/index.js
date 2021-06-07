import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg'

const Header = () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const userLoggedIn = localStorage.getItem('token');
    
    const userLogout = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <Menu secondary pointing>
            <Image src={logo} width={68} />
            <Menu.Item as={Link} to="/" style={{fontSize: 24}} name='My Contacts' />
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button as={Link} to="/contacts/create" primary icon>
                        <Icon name="add"></Icon>
                        Add Contact
                    </Button>
                </Menu.Item>
                { userLoggedIn ?
                <Menu.Item>
                    <Button onClick={userLogout} basic color='red' icon>
                        <Icon name="log out"></Icon>
                        Logout
                    </Button>
                </Menu.Item> : <>
                    <Menu.Item as={Link} to="/auth/login" name='Login' />
                    <Menu.Item as={Link} to="/auth/register" name='Register' />
                </>
                }
            </Menu.Menu>
        </Menu>
    )
}

export default Header
