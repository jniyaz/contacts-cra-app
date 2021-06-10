import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Image, Button, Icon, Input } from 'semantic-ui-react'
import logo from '../../assets/images/users.svg'
import logout from '../../contexts/actions/auth/logout';
import searchContacts from '../../contexts/actions/contacts/searchContacts';
import { GlobalContext } from '../../contexts/Provider';
import isAuthenticated from '../../utils/isAuthenticated';

const Header = () => {
    // const { pathname } = useLocation();
    const history = useHistory();
    const { contactsDispatch: dispatch } = useContext(GlobalContext);

    const handleLogout = () => {
        logout(history)(dispatch)
    }

    const onSearchChange = (e, { value }) => {
        const searchQuery = value.trim().replace(/" "/g, "");
        searchContacts(searchQuery)(dispatch);
    }

    return (
        <Menu secondary pointing>
            <Image src={logo} width={68} />
            <Menu.Item as={Link} to="/" style={{fontSize: 24, fontFamily: "Oswald",}} name='Contacts' />
            <Menu.Menu position='right'>
                {isAuthenticated() ? <>
                    <Menu.Item>
                        <Input className='icon' onChange={onSearchChange} icon='search' placeholder='Search...' />
                    </Menu.Item>
                <Menu.Item>
                    <Button as={Link} to="/contacts/create" primary icon>
                        <Icon name="add"></Icon>
                        Add Contact
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={handleLogout} basic color='red' icon>
                        <Icon name="log out"></Icon>
                        Logout
                    </Button>
                </Menu.Item> </> 
                : <>
                    <Menu.Item as={Link} to="/auth/login" name='Login' />
                    <Menu.Item as={Link} to="/auth/register" name='Register' />
                </>
                }
            </Menu.Menu>
        </Menu>
    )
}

export default Header
